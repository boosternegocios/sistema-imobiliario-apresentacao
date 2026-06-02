import { createClient } from "@/utils/supabase/server";
import PipelineSettingsManager from "@/components/crm/PipelineSettingsManager";

export default async function PipelinesSettingsPage() {
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

  const { data: pipelines } = await supabase
    .from("pipelines")
    .select("*")
    .eq("organization_id", orgId)
    .order("created_at", { ascending: true });

  const pipelineIds = (pipelines || []).map(p => p.id);
  
  let stages = [];
  if (pipelineIds.length > 0) {
    const { data: rawStages } = await supabase
      .from("pipeline_stages")
      .select("*")
      .in("pipeline_id", pipelineIds)
      .order("order_index", { ascending: true });
    stages = rawStages || [];
  }

  // Group stages by pipeline
  const pipelinesWithStages = (pipelines || []).map(pipeline => ({
    ...pipeline,
    stages: stages.filter(s => s.pipeline_id === pipeline.id)
  }));

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold font-display text-[#05325E]">Configurações de Pipelines</h1>
        <p className="text-slate-500 mt-2">Gerencie os funis de vendas da sua imobiliária, adicione novos ou edite as colunas existentes.</p>
      </div>

      <PipelineSettingsManager orgId={orgId} initialPipelines={pipelinesWithStages} />
    </div>
  );
}
