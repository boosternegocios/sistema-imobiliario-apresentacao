'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, ArrowUp, ArrowDown, Check, X } from 'lucide-react';
import { savePipelineBulkAction, deletePipelineAction } from '@/app/(app)/pipeline/actions';

type Stage = { id?: string; name: string; order_index: number; _tempId?: string };
type Pipeline = { id: string; name: string; stages: Stage[] };

export default function PipelineSettingsManager({ orgId, initialPipelines }: { orgId: string, initialPipelines: Pipeline[] }) {
  const [pipelines, setPipelines] = useState<Pipeline[]>(initialPipelines);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPipelineId, setEditingPipelineId] = useState<string | null>(null);
  const [pipelineName, setPipelineName] = useState('');
  const [stages, setStages] = useState<Stage[]>([]);
  const [loading, setLoading] = useState(false);

  const openCreateModal = () => {
    setEditingPipelineId(null);
    setPipelineName('');
    setStages([
      { name: 'Novos', order_index: 0, _tempId: Math.random().toString() },
      { name: 'Qualificação', order_index: 1, _tempId: Math.random().toString() },
    ]);
    setIsModalOpen(true);
  };

  const openEditModal = (pipeline: Pipeline) => {
    setEditingPipelineId(pipeline.id);
    setPipelineName(pipeline.name);
    setStages([...pipeline.stages].sort((a, b) => a.order_index - b.order_index));
    setIsModalOpen(true);
  };

  const handleAddStage = () => {
    setStages([...stages, { name: 'Novo Estágio', order_index: stages.length, _tempId: Math.random().toString() }]);
  };

  const handleRemoveStage = (index: number) => {
    const newStages = [...stages];
    newStages.splice(index, 1);
    // Re-index
    newStages.forEach((s, i) => s.order_index = i);
    setStages(newStages);
  };

  const handleMoveStage = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === stages.length - 1) return;

    const newStages = [...stages];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Swap
    const temp = newStages[index];
    newStages[index] = newStages[targetIndex];
    newStages[targetIndex] = temp;

    // Re-index
    newStages.forEach((s, i) => s.order_index = i);
    setStages(newStages);
  };

  const handleStageNameChange = (index: number, name: string) => {
    const newStages = [...stages];
    newStages[index].name = name;
    setStages(newStages);
  };

  const handleSave = async () => {
    if (!pipelineName.trim()) {
      alert("O nome do pipeline é obrigatório.");
      return;
    }
    setLoading(true);
    try {
      // Map out _tempId before sending
      const cleanStages = stages.map(s => ({
        id: s.id,
        name: s.name,
        order_index: s.order_index
      }));
      
      await savePipelineBulkAction(orgId, editingPipelineId, pipelineName, cleanStages);
      window.location.reload(); // Quick refresh to get new state
    } catch (e: any) {
      alert(e.message || "Erro ao salvar pipeline.");
    }
    setLoading(false);
  };

  const handleDeletePipeline = async (id: string) => {
    if (confirm("ATENÇÃO: Deletar este funil excluirá TODOS os estágios e leads contidos nele. Confirma?")) {
      try {
        await deletePipelineAction(id);
        window.location.reload();
      } catch (e: any) {
        alert(e.message || "Erro ao deletar pipeline.");
      }
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">Seus Funis</h2>
          <button 
            onClick={openCreateModal}
            className="flex items-center gap-2 bg-[#4A90E2] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#357ABD] transition-colors shadow-lg shadow-blue-500/20"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            Criar Novo Funil
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500">
                <th className="px-6 py-4">Nome do Funil</th>
                <th className="px-6 py-4">Colunas (Estágios)</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {pipelines.map(pipeline => (
                <tr key={pipeline.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-[#05325E]">{pipeline.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {pipeline.stages.sort((a,b) => a.order_index - b.order_index).map(stage => (
                        <span key={stage.id} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-semibold border border-blue-100">
                          {stage.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => openEditModal(pipeline)}
                        className="p-2 text-slate-400 hover:text-[#4A90E2] hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar Pipeline"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeletePipeline(pipeline.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Excluir Pipeline"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {pipelines.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                    Nenhum funil encontrado. Crie seu primeiro funil!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#05325E]">
                {editingPipelineId ? 'Editar Funil' : 'Criar Novo Funil'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Nome do Funil</label>
                <input 
                  type="text" 
                  value={pipelineName}
                  onChange={e => setPipelineName(e.target.value)}
                  placeholder="Ex: Vendas de Alto Padrão"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#4A90E2] transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-bold text-slate-700">Estágios do Funil (Colunas)</label>
                  <button 
                    onClick={handleAddStage}
                    className="text-[#4A90E2] text-sm font-bold flex items-center gap-1 hover:text-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Adicionar Estágio
                  </button>
                </div>
                
                <div className="space-y-3">
                  {stages.map((stage, index) => (
                    <div key={stage.id || stage._tempId} className="flex items-center gap-3 bg-white border border-slate-200 p-3 rounded-xl shadow-sm group">
                      <div className="flex flex-col gap-1">
                        <button 
                          onClick={() => handleMoveStage(index, 'up')}
                          disabled={index === 0}
                          className="text-slate-300 hover:text-slate-600 disabled:opacity-30 transition-colors"
                        >
                          <ArrowUp className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleMoveStage(index, 'down')}
                          disabled={index === stages.length - 1}
                          className="text-slate-300 hover:text-slate-600 disabled:opacity-30 transition-colors"
                        >
                          <ArrowDown className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <input 
                        type="text"
                        value={stage.name}
                        onChange={e => handleStageNameChange(index, e.target.value)}
                        className="flex-1 bg-transparent font-semibold text-slate-800 outline-none px-2"
                        placeholder="Nome do estágio"
                      />
                      
                      <button 
                        onClick={() => handleRemoveStage(index)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                        title="Remover estágio"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {stages.length === 0 && (
                    <p className="text-sm text-slate-500 text-center py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                      Nenhum estágio adicionado.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50 rounded-b-2xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 font-bold text-slate-500 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSave}
                disabled={loading}
                className="flex items-center gap-2 bg-[#4A90E2] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#357ABD] transition-colors shadow-lg disabled:opacity-50"
              >
                {loading ? 'Salvando...' : <><Check className="w-5 h-5" /> Salvar Funil</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
