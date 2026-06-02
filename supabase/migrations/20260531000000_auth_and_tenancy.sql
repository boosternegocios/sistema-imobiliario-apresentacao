-- Ativar extensão para UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Perfis de usuário (estende auth.users do Supabase)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    phone TEXT,
    document TEXT,
    is_super_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Habilitar RLS em profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver seu próprio perfil" 
ON profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seu próprio perfil" 
ON profiles FOR UPDATE 
USING (auth.uid() = id);

-- Preferências do usuário (i18n, timezone, etc.)
CREATE TABLE user_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    locale TEXT DEFAULT 'pt-BR', -- 'pt-BR', 'pt-PT', 'en', 'es'
    timezone TEXT DEFAULT 'America/Sao_Paulo',
    date_format TEXT DEFAULT 'DD/MM/YYYY',
    currency_display TEXT DEFAULT 'BRL',
    theme TEXT DEFAULT 'system', -- 'light', 'dark', 'system'
    notifications_email BOOLEAN DEFAULT TRUE,
    notifications_push BOOLEAN DEFAULT TRUE,
    UNIQUE(user_id)
);

ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver e editar suas próprias preferências"
ON user_preferences FOR ALL
USING (auth.uid() = user_id);

-- Organizations (Imobiliárias / Corretores Autônomos)
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    logo_url TEXT,
    brand_colors JSONB DEFAULT '{"primary": "#062B52", "secondary": "#4DA3FF"}'::jsonb,
    contact_email TEXT,
    contact_phone TEXT,
    address JSONB,
    settings JSONB DEFAULT '{}'::jsonb,
    is_autonomous BOOLEAN DEFAULT FALSE,
    
    -- Integrações do cliente
    ai_provider TEXT,             -- 'openai', 'anthropic', 'google'
    ai_api_key_encrypted TEXT,    -- chave criptografada
    ai_model TEXT,                -- 'gpt-4o', 'claude-sonnet', etc.
    custom_supabase_url TEXT,     -- para futura migração a DB dedicado
    custom_supabase_key TEXT,     -- para futura migração
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

-- Membros (multi-contexto: 1 usuário pode pertencer a N organizações)
CREATE TABLE organization_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('admin', 'gestor', 'corretor', 'sdr', 'operacional')),
    -- team_id será adicionado depois
    is_active BOOLEAN DEFAULT TRUE,
    custom_permissions JSONB DEFAULT '{}'::jsonb,
    joined_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(organization_id, user_id)
);

ALTER TABLE organization_members ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS para Organizations baseada nos membros
CREATE POLICY "Membros podem ver suas organizações"
ON organizations FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM organization_members
        WHERE organization_members.organization_id = organizations.id
        AND organization_members.user_id = auth.uid()
        AND organization_members.is_active = true
    )
);

CREATE POLICY "Apenas admins podem atualizar a organização"
ON organizations FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM organization_members
        WHERE organization_members.organization_id = organizations.id
        AND organization_members.user_id = auth.uid()
        AND organization_members.role = 'admin'
        AND organization_members.is_active = true
    )
);

-- Políticas para Membros
CREATE POLICY "Membros podem ver outros membros da mesma organização"
ON organization_members FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM organization_members AS viewer
        WHERE viewer.organization_id = organization_members.organization_id
        AND viewer.user_id = auth.uid()
    )
);

-- Função auxiliar para gerenciar os campos updated_at
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_modtime
    BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_organizations_modtime
    BEFORE UPDATE ON organizations
    FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
