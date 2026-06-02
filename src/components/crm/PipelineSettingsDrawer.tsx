'use client';

import { useState } from 'react';
import { X, Plus, Trash2, Edit2, Check, Settings2 } from 'lucide-react';
import { createStageAction, updateStageAction, deleteStageAction, updatePipelineAction, deletePipelineAction } from '@/app/(app)/pipeline/actions';

export default function PipelineSettingsDrawer({
  pipeline,
  stages,
  isOpen,
  onClose,
}: {
  pipeline: any;
  stages: any[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [newStageName, setNewStageName] = useState('');
  const [editingStageId, setEditingStageId] = useState<string | null>(null);
  const [editingStageName, setEditingStageName] = useState('');
  
  const [isEditingPipeline, setIsEditingPipeline] = useState(false);
  const [pipelineName, setPipelineName] = useState(pipeline?.name || '');

  if (!isOpen) return null;

  const handleUpdatePipeline = async () => {
    if (!pipelineName.trim()) return;
    setLoading(true);
    setError(null);
    try {
      await updatePipelineAction(pipeline.id, pipelineName);
      setIsEditingPipeline(false);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleDeletePipeline = async () => {
    if (!window.confirm("ATENÇÃO: Deletar este funil vai deletar também todos os leads e colunas atrelados a ele. Tem certeza absoluta?")) {
      return;
    }
    setLoading(true);
    try {
      await deletePipelineAction(pipeline.id);
      window.location.href = '/pipeline';
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleAddStage = async () => {
    if (!newStageName.trim()) return;
    setLoading(true);
    setError(null);
    try {
      await createStageAction(pipeline.id, newStageName, stages.length);
      setNewStageName('');
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleUpdateStage = async (stageId: string) => {
    if (!editingStageName.trim()) {
      setEditingStageId(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await updateStageAction(stageId, editingStageName);
      setEditingStageId(null);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleDeleteStage = async (stageId: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteStageAction(stageId);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 p-2 rounded-lg text-[#05325E]">
              <Settings2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#05325E]">Configurar Funil</h2>
              {isEditingPipeline ? (
                 <div className="flex items-center gap-2 mt-1">
                   <input
                     type="text"
                     value={pipelineName}
                     onChange={(e) => setPipelineName(e.target.value)}
                     className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-sm outline-none"
                     autoFocus
                   />
                   <button onClick={handleUpdatePipeline} className="text-green-600 p-1"><Check className="w-4 h-4"/></button>
                 </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-sm text-slate-500">{pipeline.name}</p>
                  <button onClick={() => { setIsEditingPipeline(true); setPipelineName(pipeline.name); }} className="text-slate-400 hover:text-[#4A90E2]"><Edit2 className="w-3 h-3"/></button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleDeletePipeline} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors" title="Deletar Pipeline inteiro">
              <Trash2 className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
              {error}
            </div>
          )}

          <div className="space-y-3">
            {stages.map((stage) => (
              <div key={stage.id} className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-slate-300 transition-colors">
                {editingStageId === stage.id ? (
                  <input
                    type="text"
                    value={editingStageName}
                    onChange={(e) => setEditingStageName(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#4A90E2]"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && handleUpdateStage(stage.id)}
                  />
                ) : (
                  <span className="font-semibold text-slate-700">{stage.name}</span>
                )}

                <div className="flex items-center gap-1 ml-4">
                  {editingStageId === stage.id ? (
                    <button 
                      onClick={() => handleUpdateStage(stage.id)}
                      disabled={loading}
                      className="p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        setEditingStageId(stage.id);
                        setEditingStageName(stage.name);
                      }}
                      disabled={loading}
                      className="p-1.5 text-slate-400 hover:text-[#4A90E2] hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  )}
                  
                  <button 
                    onClick={() => handleDeleteStage(stage.id)}
                    disabled={loading}
                    className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 mb-4">Adicionar Nova Coluna</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ex: Contrato Assinado"
                value={newStageName}
                onChange={(e) => setNewStageName(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 outline-none focus:border-[#4A90E2]"
                onKeyDown={(e) => e.key === 'Enter' && handleAddStage()}
              />
              <button 
                onClick={handleAddStage}
                disabled={loading || !newStageName.trim()}
                className="bg-[#05325E] text-white p-2.5 rounded-xl hover:bg-[#0a4279] transition-colors disabled:opacity-50"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
