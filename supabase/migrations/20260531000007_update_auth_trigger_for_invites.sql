-- Atualiza o gatilho de novo usuário para suportar convites (vinculando a uma organização existente)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    new_org_id UUID;
    clean_name TEXT;
    invited_org_id UUID;
    invited_role TEXT;
BEGIN
    -- 1. Criar o Perfil do Usuário
    INSERT INTO public.profiles (id, full_name)
    VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', 'Usuário'));

    -- 2. Definir Preferências Iniciais
    INSERT INTO public.user_preferences (user_id)
    VALUES (NEW.id);

    -- 3. Verifica se o usuário foi convidado para uma organização
    IF NEW.raw_user_meta_data->>'organization_id' IS NOT NULL THEN
        invited_org_id := (NEW.raw_user_meta_data->>'organization_id')::UUID;
        invited_role := COALESCE(NEW.raw_user_meta_data->>'role', 'member');
        
        -- Vincula o usuário à organização existente
        INSERT INTO public.organization_members (organization_id, user_id, role)
        VALUES (invited_org_id, NEW.id, invited_role);
    ELSE
        -- 4. Criar uma Organização Padrão para este usuário (Autônomo por padrão)
        clean_name := COALESCE(NEW.raw_user_meta_data->>'full_name', 'Meu Workspace');
        
        INSERT INTO public.organizations (name, slug, is_autonomous)
        VALUES (clean_name || ' Imóveis', gen_random_uuid()::text, true)
        RETURNING id INTO new_org_id;

        -- 5. Vincular o Usuário recém-criado à Organização como Admin absoluto
        INSERT INTO public.organization_members (organization_id, user_id, role)
        VALUES (new_org_id, NEW.id, 'admin');
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
