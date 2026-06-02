"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  LayoutDashboard,
  BarChart2,
  MessageSquare,
  Kanban,
  Home,
  Calendar,
  FileText,
  Contact2,
  User,
  Users,
  PieChart,
  GitPullRequestDraft,
  Bot,
  Network,
  Settings,
  PlusCircle
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar-gradient h-screen w-[280px] flex flex-col fixed left-0 top-0 overflow-y-auto rounded-r-[24px] z-50 shadow-2xl shadow-blue-900/20">
      <div className="px-8 py-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
            <Building2 className="text-white w-6 h-6" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight font-display">
              LeadEstate
            </h2>
          </div>
        </div>
      </div>
      
      <nav className="flex flex-col py-2 gap-1 flex-grow">
        <NavItem icon={LayoutDashboard} text="Dashboard" href="/dashboard" />
        <NavItem icon={BarChart2} text="Leads / CRM" href="/crm" />
        <NavItem icon={MessageSquare} text="Atendimento" href="/atendimento" />
        <NavItem icon={Kanban} text="Pipeline" href="/pipeline" />
        <NavItem icon={Home} text="Imóveis" href="/imoveis" />
        <NavItem icon={Calendar} text="Agenda" href="/agenda" />
        <NavItem icon={FileText} text="Propostas" href="/propostas" />
        <NavItem icon={Contact2} text="Proprietários" href="/proprietarios" />
        <NavItem icon={User} text="Corretores" href="/corretores" />
        <NavItem icon={Users} text="Equipes" href="/equipes" />
        <NavItem icon={PieChart} text="Relatórios" href="/relatorios" />
        <NavItem icon={GitPullRequestDraft} text="Automações" href="/automacoes" />
        <NavItem icon={Bot} text="Agentes Inteligentes" href="/agentes" />
        <NavItem icon={Network} text="Integrações" href="/integracoes" />
        <NavItem icon={Settings} text="Configurações" href="/configuracoes" />
      </nav>

      <div className="p-6 mt-auto">
        <button className="w-full flex items-center justify-center gap-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white py-3 rounded-[16px] font-bold text-sm transition-colors shadow-lg">
          <PlusCircle className="w-5 h-5" strokeWidth={2} />
          Novo Imóvel
        </button>
      </div>
    </aside>
  );
}

function NavItem({ icon: Icon, text, href }: { icon: any; text: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  if (isActive) {
    return (
      <Link href={href} className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#4A90E2] to-[#2161C3] text-white rounded-full mx-4 font-bold shadow-[0_10px_20px_-5px_rgba(74,144,226,0.5)] transition-all group">
        <Icon className="w-[20px] h-[20px]" strokeWidth={2} />
        <span className="text-[14px] font-display">{text}</span>
      </Link>
    );
  }

  return (
    <Link href={href} className="flex items-center gap-3 px-6 py-2.5 text-blue-100/70 hover:text-white hover:bg-white/5 rounded-full mx-4 transition-all group">
      <Icon className="w-[20px] h-[20px]" strokeWidth={1.5} />
      <span className="text-[14px] font-display font-medium">{text}</span>
    </Link>
  );
}
