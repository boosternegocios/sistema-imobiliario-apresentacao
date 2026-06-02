-- Corrige o erro de recursão infinita na RLS policy do organization_members
DROP POLICY IF EXISTS "Membros podem ver outros membros da mesma organização" ON organization_members;

CREATE POLICY "Membros podem ver sua propria participacao"
ON organization_members FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Membros podem ver outros da mesma organizacao"
ON organization_members FOR SELECT
USING (
    organization_id IN (
        SELECT organization_id FROM organization_members WHERE user_id = auth.uid()
    )
);
