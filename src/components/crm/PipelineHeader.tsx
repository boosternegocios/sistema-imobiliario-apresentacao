'use client';

import { useState } from 'react';
import { Filter, Plus, Columns3, List, Settings, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function PipelineHeader({ 
  pipelines, 
  currentPipeline, 
  stages,
  orgId
}: { 
  pipelines: any[], 
  currentPipeline: any,
  stages: any[],
  orgId: string
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 group"
            >
              <h1 className="text-3xl font-extrabold font-display tracking-tight text-[#05325E] group-hover:text-[#4A90E2] transition-colors">
                {currentPipeline.name}
              </h1>
              <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-[#4A90E2] transition-colors" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-30">
                {pipelines.map(p => (
                  <button 
                    key={p.id}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${p.id === currentPipeline.id ? 'text-[#4A90E2] font-bold' : 'text-slate-700'}`}
                    onClick={() => {
                      window.location.href = `/pipeline?id=${p.id}`;
                    }}
                  >
                    {p.name}
                  </button>
                ))}
                <div className="border-t border-slate-100 mt-2 pt-2 px-2">
                  <Link 
                    href="/configuracoes/pipelines"
                    className="block w-full text-left px-2 py-2 text-sm text-[#4A90E2] font-semibold hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Gerenciar Funis
                  </Link>
                </div>
              </div>
            )}
          </div>
          <p className="text-slate-500 font-medium mt-1">
            Gerencie seu funil de vendas e arraste os cards.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-bold text-[#05325E] transition-all">
              <Columns3 className="w-4 h-4" strokeWidth={2} />
              Kanban
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold text-slate-500 hover:text-[#05325E] transition-all">
              <List className="w-4 h-4" strokeWidth={2} />
              Lista
            </button>
          </div>
          
          <Link 
            href="/configuracoes/pipelines"
            className="flex items-center justify-center w-10 h-10 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-[#05325E] hover:bg-slate-50 transition-colors"
            title="Configurar Funis"
          >
            <Settings className="w-4 h-4" strokeWidth={2} />
          </Link>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" strokeWidth={2} />
            Filtrar
          </button>
          
          <button className="flex items-center gap-2 px-6 py-2 bg-[#4A90E2] text-white rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-95">
            <Plus className="w-5 h-5" strokeWidth={2} />
            Novo Lead
          </button>
        </div>
      </div>
    </>
  );
}
