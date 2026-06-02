"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { moveLeadAction } from "@/app/(app)/pipeline/actions";
import { MoreHorizontal, MapPin, MessageCircle, Mail } from "lucide-react";

export type Lead = {
  id: string;
  name: string;
  interest_type: string;
  temperature: string;
  stage_id: string;
  score: number;
};

export type Stage = {
  id: string;
  name: string;
  order_index: number;
  leads: Lead[];
};

export default function KanbanBoard({ initialStages }: { initialStages: Stage[] }) {
  // Estado otimista para a interface reagir instantaneamente
  const [stages, setStages] = useState<Stage[]>(initialStages);

  // Workaround para o erro de hidratação do react-beautiful-dnd no Next 13+
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    // Lógica para movimentar os arrays no Frontend (Optimistic UI)
    const newStages = JSON.parse(JSON.stringify(stages)) as Stage[];
    
    const sourceStage = newStages.find(s => s.id === source.droppableId);
    const destStage = newStages.find(s => s.id === destination.droppableId);

    if (!sourceStage || !destStage) return;

    const [movedLead] = sourceStage.leads.splice(source.index, 1);
    movedLead.stage_id = destStage.id;
    destStage.leads.splice(destination.index, 0, movedLead);

    setStages(newStages);

    // Salvar no banco via Server Action
    try {
      await moveLeadAction(draggableId, destination.droppableId);
    } catch (error) {
      // Reverter se der erro no banco
      setStages(initialStages);
      console.error("Falha ao mover", error);
    }
  };

  const getStageColor = (index: number) => {
    const colors = ["bg-blue-400", "bg-amber-400", "bg-emerald-400", "bg-purple-400"];
    return colors[index % colors.length];
  };

  if (!isBrowser) {
    return null; // Evitar Hydration Error do dnd
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 min-h-[600px] overflow-x-auto pb-6 no-scrollbar items-start">
        {stages.map((stage, stageIndex) => (
          <div key={stage.id} className="flex-shrink-0 w-80 flex flex-col">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${getStageColor(stageIndex)}`}></span>
                <h4 className="font-bold text-sm font-display text-slate-800">{stage.name}</h4>
                <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold">
                  {stage.leads.length.toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            <Droppable droppableId={stage.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`flex-1 rounded-[16px] p-3 space-y-4 min-h-[65vh] transition-all duration-200 border-2 ${
                    snapshot.isDraggingOver 
                      ? "bg-slate-300/60 border-[#4A90E2] shadow-inner" 
                      : "bg-slate-200/50 border-slate-200 hover:bg-slate-200/80"
                  }`}
                >
                  {stage.leads.map((lead, index) => (
                    <Draggable key={lead.id} draggableId={lead.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`bg-white p-5 rounded-lg shadow-sm border ${
                            snapshot.isDragging ? "border-[#4A90E2] shadow-xl scale-[1.02]" : "border-transparent"
                          } hover:border-[#4A90E2]/30 transition-all cursor-grab active:cursor-grabbing group`}
                          style={provided.draggableProps.style}
                        >
                          <div className="flex justify-between items-start mb-3">
                            {lead.temperature === 'hot' && (
                              <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-[9px] font-black tracking-wider uppercase">
                                ALTA PRIORIDADE
                              </span>
                            )}
                            {lead.temperature === 'warm' && (
                              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[9px] font-black tracking-wider uppercase">
                                QUENTE
                              </span>
                            )}
                            {lead.temperature === 'cold' && (
                              <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-[9px] font-black tracking-wider uppercase">
                                ESFRIANDO
                              </span>
                            )}
                            
                            <MoreHorizontal className="w-5 h-5 text-slate-300 group-hover:text-[#4A90E2]" strokeWidth={1.5} />
                          </div>
                          
                          <h5 className="font-bold text-slate-800 text-base mb-1 font-display">
                            {lead.name}
                          </h5>
                          <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                            {lead.interest_type.toUpperCase()}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <div className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                              <Mail className="w-4 h-4" strokeWidth={1.5} />
                            </div>
                            <div className="text-[10px] font-bold text-slate-400">
                              Score: {lead.score}
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
