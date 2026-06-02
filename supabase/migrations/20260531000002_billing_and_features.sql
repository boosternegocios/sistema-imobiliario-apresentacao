-- Billing, Plans, Features, and Subscriptions

-- Funcionalidades (Features) do Sistema
CREATE TABLE features (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,  -- ex: 'ai_agents', 'automations'
    name JSONB NOT NULL,        -- {"pt-BR": "Agentes IA"}
    description JSONB,
    category TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Habilitar RLS e permitir leitura para todos os usuários logados
ALTER TABLE features ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura pública de features para autenticados" ON features FOR SELECT USING (auth.role() = 'authenticated');

-- Planos (Plans)
CREATE TABLE plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name JSONB NOT NULL,        -- {"pt-BR": "Profissional"}
    slug TEXT UNIQUE NOT NULL,
    description JSONB,
    
    price_monthly DECIMAL,
    price_quarterly DECIMAL,
    price_semiannual DECIMAL,
    price_yearly DECIMAL,
    currency TEXT DEFAULT 'BRL',
    prices_intl JSONB DEFAULT '{}'::jsonb,
    
    stripe_product_id TEXT,
    stripe_prices JSONB DEFAULT '{}'::jsonb,
    
    is_active BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    trial_days INTEGER DEFAULT 14,
    display_order INTEGER DEFAULT 0,
    target_audience TEXT DEFAULT 'all', -- 'imobiliaria', 'corretor', 'all'
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura pública de planos para autenticados" ON plans FOR SELECT USING (auth.role() = 'authenticated');

-- Quais features pertencem a quais planos
CREATE TABLE plan_features (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    plan_id UUID NOT NULL REFERENCES plans(id) ON DELETE CASCADE,
    feature_id UUID NOT NULL REFERENCES features(id) ON DELETE CASCADE,
    config JSONB DEFAULT '{}'::jsonb,
    UNIQUE(plan_id, feature_id)
);

ALTER TABLE plan_features ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura pública de plan_features para autenticados" ON plan_features FOR SELECT USING (auth.role() = 'authenticated');

-- Assinaturas (Subscriptions)
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    plan_id UUID NOT NULL REFERENCES plans(id),
    billing_cycle TEXT NOT NULL, -- 'monthly', 'quarterly', 'yearly'
    status TEXT DEFAULT 'trial', -- 'trial', 'active', 'past_due', 'canceled'
    
    trial_ends_at TIMESTAMPTZ,
    current_period_start TIMESTAMPTZ,
    current_period_end TIMESTAMPTZ,
    canceled_at TIMESTAMPTZ,
    cancel_reason TEXT,
    
    stripe_subscription_id TEXT,
    stripe_customer_id TEXT,
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(organization_id)
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver assinatura da própria organização" ON subscriptions FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid()));

-- Triggers for updated_at
CREATE TRIGGER update_plans_modtime BEFORE UPDATE ON plans FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_subscriptions_modtime BEFORE UPDATE ON subscriptions FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
