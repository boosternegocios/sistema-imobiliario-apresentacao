-- Removemos as políticas problemáticas
DROP POLICY IF EXISTS "Membros podem ver outros da mesma organizacao" ON organization_members;
DROP POLICY IF EXISTS "Membros podem ver sua propria participacao" ON organization_members;
DROP POLICY IF EXISTS "Membros podem ver outros membros da mesma organização" ON organization_members;

-- Criamos uma função SECURITY DEFINER (Roda com privilégios de Admin, ignorando o RLS)
-- Isso quebra o loop infinito de recursão.
CREATE OR REPLACE FUNCTION get_user_organization_ids()
RETURNS SETOF uuid
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT organization_id 
  FROM organization_members 
  WHERE user_id = auth.uid() 
  AND is_active = true;
$$;

-- Agora a política usa a função segura
CREATE POLICY "Membros podem ver tudo da sua organizacao"
ON organization_members FOR SELECT
USING (organization_id IN (SELECT get_user_organization_ids()));
