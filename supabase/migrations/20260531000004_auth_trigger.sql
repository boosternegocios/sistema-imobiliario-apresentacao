-- Função disparada quando um novo usuário é criado no Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    new_org_id UUID;
    clean_name TEXT;
BEGIN
    -- 1. Criar o Perfil do Usuário (lendo do metadata do JWT/Auth)
    INSERT INTO public.profiles (id, full_name)
    VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', 'Usuário'));

    -- 2. Definir Preferências Iniciais
    INSERT INTO public.user_preferences (user_id)
    VALUES (NEW.id);

    -- 3. Criar uma Organização Padrão para este usuário (Autônomo por padrão)
    clean_name := COALESCE(NEW.raw_user_meta_data->>'full_name', 'Meu Workspace');
    
    INSERT INTO public.organizations (name, slug, is_autonomous)
    VALUES (clean_name || ' Imóveis', gen_random_uuid()::text, true)
    RETURNING id INTO new_org_id;

    -- 4. Vincular o Usuário recém-criado à Organização como Admin absoluto
    INSERT INTO public.organization_members (organization_id, user_id, role)
    VALUES (new_org_id, NEW.id, 'admin');

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Garantir que o gatilho seja atrelado ao auth.users do Supabase
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
