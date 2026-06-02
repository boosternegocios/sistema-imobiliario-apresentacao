'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function moveLeadAction(leadId: string, newStageId: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('leads')
    .update({ 
      stage_id: newStageId,
      updated_at: new Date().toISOString()
    })
    .eq('id', leadId)

  if (error) {
    console.error('Error moving lead:', error)
    throw new Error('Falha ao mover o lead')
  }

  revalidatePath('/pipeline')
}

export async function seedPipelineAction(organizationId: string) {
  const supabase = await createClient()

  // 1. Criar Pipeline
  const { data: pipeline, error: pipeError } = await supabase
    .from('pipelines')
    .insert({
      organization_id: organizationId,
      name: 'Vendas Padrão',
    })
    .select()
    .single()

  if (pipeError) return { error: pipeError }

  // 2. Criar Estágios (Colunas)
  const stages = [
    { name: 'Novos', order_index: 0 },
    { name: 'Qualificação', order_index: 1 },
    { name: 'Visita', order_index: 2 },
    { name: 'Proposta', order_index: 3 }
  ]

  const { data: createdStages, error: stagesError } = await supabase
    .from('pipeline_stages')
    .insert(stages.map(s => ({ ...s, pipeline_id: pipeline.id })))
    .select()

  if (stagesError) return { error: stagesError }

  // 3. Criar Leads Fakes para testar
  const fakeLeads = [
    { name: 'Arthur Villa-Lobos', email: 'arthur@exemplo.com', score: 80, temperature: 'hot', interest_type: 'apartment', stage_id: createdStages[0].id },
    { name: 'Clarice Lispector', email: 'clarice@exemplo.com', score: 60, temperature: 'warm', interest_type: 'house', stage_id: createdStages[0].id },
    { name: 'Jorge Amado', email: 'jorge@exemplo.com', score: 90, temperature: 'hot', interest_type: 'mansion', stage_id: createdStages[1].id },
    { name: 'Machado de Assis', email: 'machado@exemplo.com', score: 50, temperature: 'cold', interest_type: 'studio', stage_id: createdStages[3].id },
  ]

  await supabase
    .from('leads')
    .insert(fakeLeads.map(l => ({ ...l, organization_id: organizationId })))

  revalidatePath('/pipeline')
  return { success: true }
}

export async function createPipelineAction(organizationId: string, name: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('pipelines').insert({ organization_id: organizationId, name }).select().single()
  if (error) throw new Error(error.message)
  revalidatePath('/pipeline')
  return data
}

export async function updatePipelineAction(pipelineId: string, name: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('pipelines').update({ name }).eq('id', pipelineId).select().single()
  if (error) throw new Error(error.message)
  revalidatePath('/pipeline')
  return data
}

export async function deletePipelineAction(pipelineId: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('pipelines').delete().eq('id', pipelineId)
  if (error) throw new Error(error.message)
  revalidatePath('/pipeline')
  return true
}

export async function createStageAction(pipelineId: string, name: string, order_index: number) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('pipeline_stages').insert({ pipeline_id: pipelineId, name, order_index }).select().single()
  if (error) throw new Error(error.message)
  revalidatePath('/pipeline')
  return data
}

export async function updateStageAction(stageId: string, name: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('pipeline_stages').update({ name }).eq('id', stageId).select().single()
  if (error) throw new Error(error.message)
  revalidatePath('/pipeline')
  return data
}

export async function deleteStageAction(stageId: string) {
  const supabase = await createClient()
  // Block deletion if leads exist
  const { count, error: countError } = await supabase.from('leads').select('id', { count: 'exact', head: true }).eq('stage_id', stageId)
  
  if (countError) throw new Error(countError.message)
  if (count && count > 0) {
    throw new Error('Não é possível excluir esta coluna porque ela possui leads. Mova-os primeiro.')
  }

  const { error } = await supabase.from('pipeline_stages').delete().eq('id', stageId)
  if (error) throw new Error(error.message)
  revalidatePath('/pipeline')
  return true
}

export async function savePipelineBulkAction(
  organizationId: string, 
  pipelineId: string | null, 
  name: string, 
  stages: { id?: string, name: string, order_index: number }[]
) {
  const supabase = await createClient()
  
  let targetPipelineId = pipelineId

  if (!targetPipelineId) {
    const { data, error } = await supabase.from('pipelines').insert({ organization_id: organizationId, name }).select().single()
    if (error) throw new Error(error.message)
    targetPipelineId = data.id
  } else {
    const { error } = await supabase.from('pipelines').update({ name }).eq('id', targetPipelineId)
    if (error) throw new Error(error.message)
  }

  // Get current stages
  const { data: currentStages } = await supabase.from('pipeline_stages').select('*').eq('pipeline_id', targetPipelineId)
  const currentStageIds = (currentStages || []).map(s => s.id)
  
  const incomingIds = stages.filter(s => s.id).map(s => s.id)
  
  const stagesToDelete = currentStageIds.filter(id => !incomingIds.includes(id))

  // Try to delete removed stages (fails if leads exist, which is good)
  for (const id of stagesToDelete) {
    const { count } = await supabase.from('leads').select('id', { count: 'exact', head: true }).eq('stage_id', id)
    if (count && count > 0) {
      throw new Error('Você tentou deletar um estágio que possui leads. Mova os leads primeiro.')
    }
    await supabase.from('pipeline_stages').delete().eq('id', id)
  }

  // Upsert stages
  for (const stage of stages) {
    if (stage.id) {
      await supabase.from('pipeline_stages').update({ name: stage.name, order_index: stage.order_index }).eq('id', stage.id)
    } else {
      await supabase.from('pipeline_stages').insert({ pipeline_id: targetPipelineId, name: stage.name, order_index: stage.order_index })
    }
  }

  revalidatePath('/pipeline')
  revalidatePath('/configuracoes/pipelines')
  return { success: true, pipelineId: targetPipelineId }
}
