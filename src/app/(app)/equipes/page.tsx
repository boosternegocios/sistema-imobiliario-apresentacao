import { createClient } from "@/utils/supabase/server";
import TeamManager from "@/components/crm/TeamManager";

export default async function EquipesPage() {
  const supabase = await createClient();

  const { data: userData } = await supabase.auth.getUser();
  if (!userData?.user) return <div>Não autenticado</div>;

  const { data: membership } = await supabase
    .from("organization_members")
    .select("organization_id")
    .eq("user_id", userData.user.id)
    .single();

  if (!membership) return <div>Sem organização</div>;
  const orgId = membership.organization_id;

  const { data: members } = await supabase
    .from("organization_members")
    .select("*, profiles(*)")
    .eq("organization_id", orgId)
    .order("created_at", { ascending: true });

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold font-display text-[#05325E]">Gerenciamento de Equipe</h1>
        <p className="text-slate-500 mt-2">Convidar corretores e gerenciar permissões da sua imobiliária.</p>
      </div>

      <TeamManager orgId={orgId} initialMembers={members || []} />
    </div>
  );
}
