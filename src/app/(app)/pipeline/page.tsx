import { createClient } from "@/utils/supabase/server";
import { seedPipelineAction } from "./actions";
import KanbanBoard, { Stage } from "@/components/crm/KanbanBoard";
import PipelineHeader from "@/components/crm/PipelineHeader";

export default async function PipelinePage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (!userData.user) return <div>Usuário não autenticado</div>;

  const { data: membership } = await supabase
    .from("organization_members")
    .select("organization_id")
    .eq("user_id", userData.user.id)
    .single();

  if (!membership) return <div>Você não pertence a nenhuma organização.</div>;

  const orgId = membership.organization_id;

  // Fetch ALL pipelines for this org
  const { data: pipelines } = await supabase
    .from("pipelines")
    .select("*")
    .eq("organization_id", orgId)
    .order("created_at", { ascending: true });

  let allPipelines = pipelines || [];

  if (allPipelines.length === 0) {
    await seedPipelineAction(orgId);
    const result = await supabase
      .from("pipelines")
      .select("*")
      .eq("organization_id", orgId)
      .order("created_at", { ascending: true });
    allPipelines = result.data || [];
  }

  // Determine current pipeline
  const currentPipeline = searchParams.id 
    ? allPipelines.find(p => p.id === searchParams.id) || allPipelines[0]
    : allPipelines[0];

  if (!currentPipeline) return <div>Erro ao carregar Pipeline.</div>;

  const { data: rawStages } = await supabase
    .from("pipeline_stages")
    .select("*")
    .eq("pipeline_id", currentPipeline.id)
    .order("order_index", { ascending: true });

  const { data: rawLeads } = await supabase
    .from("leads")
    .select("*")
    .eq("organization_id", orgId)
    .order("updated_at", { ascending: false });

  const stages: Stage[] = (rawStages || []).map((stage) => ({
    id: stage.id,
    name: stage.name,
    order_index: stage.order_index,
    leads: (rawLeads || []).filter((lead) => lead.stage_id === stage.id).map(l => ({
      id: l.id,
      name: l.name,
      interest_type: l.interest_type || 'Imóvel',
      temperature: l.temperature,
      stage_id: l.stage_id,
      score: l.score
    })),
  }));

  return (
    <>
      <PipelineHeader 
        orgId={orgId}
        pipelines={allPipelines} 
        currentPipeline={currentPipeline} 
        stages={rawStages || []} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[160px]">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">Valor Total do Funil</p>
          <h3 className="text-2xl font-extrabold text-[#05325E] font-display my-2">R$ 14.850.000,00</h3>
        </div>
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[160px]">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">Tickets Ativos</p>
          <h3 className="text-2xl font-extrabold text-slate-800 font-display my-2">32 Unidades</h3>
        </div>
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[160px]">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">Conversão Média</p>
          <h3 className="text-3xl font-extrabold text-slate-800 font-display my-2">18.4%</h3>
        </div>
      </div>

      <KanbanBoard initialStages={stages} />
    </>
  );
}
