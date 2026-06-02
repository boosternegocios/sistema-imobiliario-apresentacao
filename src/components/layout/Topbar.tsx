import { Search, Bell, LayoutGrid, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed top-0 right-0 left-[280px] h-20 bg-[#F7F8FA]/80 backdrop-blur-xl z-40 flex items-center justify-between px-8 border-none">
      <div className="flex items-center gap-6">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
          <span className="text-xs font-semibold text-slate-400 mr-2">Contexto:</span>
          <span className="text-sm font-bold text-[#05325E]">Espaço de Trabalho Próprio</span>
          <ChevronDown className="w-4 h-4 ml-1 text-slate-400" strokeWidth={2} />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative group hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={2} />
          <input 
            className="bg-white border-none outline-none rounded-full pl-10 pr-4 py-2.5 w-72 text-sm focus:ring-2 focus:ring-[#4A90E2] transition-all shadow-sm" 
            placeholder="Buscar em todo o ecossistema..." 
            type="text" 
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600" strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
            <LayoutGrid className="w-5 h-5 text-slate-600" strokeWidth={1.5} />
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-right hidden xl:block">
              <p className="text-sm font-bold text-[#05325E]">Arthur Lima</p>
              <p className="text-[10px] text-slate-500 font-medium">Diretor Comercial</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#05325E] text-white flex items-center justify-center font-bold text-sm ring-2 ring-white shadow-md">
              AL
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
