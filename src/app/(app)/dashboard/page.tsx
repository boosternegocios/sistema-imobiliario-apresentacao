import PerformanceChart from "@/components/dashboard/PerformanceChart";
import { 
  FileDown, 
  Plus, 
  UserPlus, 
  AlertCircle, 
  CalendarDays, 
  CircleDollarSign, 
  Clock, 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  User, 
  Zap,
  Map
} from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#05325E] tracking-tight">
            Dashboard Principal
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Bem-vindo de volta, Arthur. Aqui está o que aconteceu hoje.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-[#05325E] font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
            <FileDown className="w-5 h-5" strokeWidth={1.5} />
            Relatório PDF
          </button>
          <button className="action-gradient flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all">
            <Plus className="w-5 h-5" strokeWidth={2} />
            Novo Lead
          </button>
        </div>
      </div>

      {/* Row 1: KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KpiCard
          icon={UserPlus}
          badgeText="+12% HOJE"
          badgeColor="text-emerald-600 bg-emerald-50"
          title="Leads do Dia"
          value="42"
          iconColor="text-[#4A90E2]"
          iconBg="bg-blue-50"
        />
        <KpiCard
          icon={AlertCircle}
          badgeText="URGENTE"
          badgeColor="text-[#D9534F] bg-[#FDEDED]"
          title="Sem Resposta"
          value="08"
          iconColor="text-[#D9534F]"
          iconBg="bg-[#FDEDED]"
        />
        <KpiCard
          icon={CalendarDays}
          badgeText="HOJE"
          badgeColor="text-[#05325E] bg-blue-100"
          title="Visitas de Hoje"
          value="15"
          iconColor="text-[#4A90E2]"
          iconBg="bg-blue-50"
        />
        <KpiCard
          icon={CircleDollarSign}
          badgeText="ATIVAS"
          badgeColor="text-amber-700 bg-amber-100"
          title="Propostas em Aberto"
          value="R$ 4.2M"
          iconColor="text-amber-500"
          iconBg="bg-amber-50"
        />
      </div>

      {/* Row 2: Main Grid */}
      <div className="grid grid-cols-10 gap-8 mb-8">
        {/* Performance Chart (60%) */}
        <div className="col-span-10 lg:col-span-6 bg-white p-8 rounded-[24px] shadow-[var(--shadow-premium)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-extrabold text-[#05325E] tracking-tight">
                Performance de Leads
              </h2>
              <p className="text-sm text-slate-500">
                Conversão de leads qualificados vs. período anterior
              </p>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-[#05325E] bg-white shadow-sm">
                Semanal
              </button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-slate-500 hover:text-[#05325E]">
                Mensal
              </button>
            </div>
          </div>

          {/* Interactive Chart */}
          <PerformanceChart />
        </div>

        {/* SLA Alerts (40%) */}
        <div className="col-span-10 lg:col-span-4 bg-white p-8 rounded-[24px] shadow-[var(--shadow-premium)]">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-[#D9534F]" strokeWidth={2} />
            <h2 className="text-xl font-extrabold text-[#05325E] tracking-tight">
              SLA Vencido
            </h2>
          </div>
          <div className="space-y-4">
            <SlaAlertCard name="Mariana Costa" delay="4H ATRASADO" initials="MC" />
            <SlaAlertCard name="Roberto Mendes" delay="2H ATRASADO" initials="RM" />
            <div className="pt-4 text-center">
              <a className="text-blue-600 font-bold text-sm hover:underline" href="#">
                Ver todos os alertas
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Secondary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white p-8 rounded-[24px] shadow-[var(--shadow-premium)] flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-extrabold text-[#05325E] tracking-tight">
              Próximas Visitas
            </h2>
          </div>
          <div className="space-y-8 relative flex-grow before:absolute before:left-[1.35rem] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
            <VisitItem
              time="14:30 - 15:30"
              title="Cobertura Duplex - Ed. Onyx"
              location="Vila Nova Conceição, SP"
              active
            />
            <VisitItem
              time="17:00 - 18:00"
              title="Casa Jardim Europa - Classic Style"
              location="Jardim Europa, SP"
            />
          </div>
        </div>

        {/* Right Column: AI Recommendations */}
        <div className="sidebar-gradient p-8 rounded-[24px] relative overflow-hidden flex flex-col h-full shadow-[var(--shadow-premium)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-[60px]"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md shadow-sm">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Recomendações da IA
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-400/30 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-white">
                    Lead Estagnado
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Fabiano Silva
                </h3>
                <p className="text-blue-100/70 text-sm italic mb-6 leading-relaxed">
                  "O lead não interage há 5 dias. Com base no perfil, ele prefere
                  contato via WhatsApp às 10h."
                </p>
                <button className="bg-white text-blue-900 w-full py-3.5 px-6 rounded-full font-bold text-sm transition-transform hover:scale-[1.02] active:scale-95">
                  Enviar apresentação
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400/30 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-white">
                    Oportunidade de Match
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
                  Novo imóvel captado em Moema coincide 95% com as buscas de Ana
                  Oliveira.
                </p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-500/20">
                  Ver Combinação
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Subcomponents for the dashboard page

function KpiCard({ icon: Icon, badgeText, badgeColor, title, value, iconColor, iconBg }: any) {
  return (
    <div className="bg-white p-6 rounded-[24px] transition-shadow shadow-[var(--shadow-premium)]">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.5} />
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${badgeColor}`}>
          {badgeText}
        </span>
      </div>
      <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-[#05325E]">{value}</p>
    </div>
  );
}

function SlaAlertCard({ name, delay, initials }: any) {
  return (
    <div className="bg-[#F5F7F8] p-5 rounded-[24px] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#05325E] text-white flex items-center justify-center font-bold text-lg shadow-sm">
          {initials}
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#05325E] leading-tight">{name}</h4>
          <p className="text-[10px] font-black uppercase mt-1 text-[#D9534F] bg-[#FDEDED] px-2 py-0.5 rounded-full w-fit">
            {delay}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
          <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

function VisitItem({ time, title, location, active }: any) {
  return (
    <div className="relative flex items-center gap-6 pl-12">
      <div className={`absolute left-0 w-11 h-11 rounded-full bg-white border-4 ${active ? 'border-blue-50' : 'border-slate-50'} flex items-center justify-center z-10 shadow-sm`}>
        <MapPin className={`w-5 h-5 ${active ? 'text-blue-500' : 'text-slate-400'}`} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between flex-grow bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
        <div className="mb-3 md:mb-0">
          <p className={`text-xs font-bold mb-1 ${active ? 'text-blue-600' : 'text-slate-400'}`}>
            {time}
          </p>
          <h4 className="text-md font-bold text-[#05325E]">{title}</h4>
          <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
            <Map className="w-3 h-3" strokeWidth={2} /> {location}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ChevronRight className="w-5 h-5 text-slate-300" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
