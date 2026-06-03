"use client";

import React from "react";
import { 
  Building2, Bot, Workflow, BarChart3, ShieldCheck, 
  CheckCircle2, XCircle, ChevronRight, Zap, Target
} from "lucide-react";

export default function ProspeccaoPDF() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans">
      {/* INSTRUÇÃO DE IMPRESSÃO (Escondida no PDF) */}
      <div className="print:hidden bg-blue-600 text-white p-4 text-center flex items-center justify-center gap-2 sticky top-0 z-50 shadow-lg">
        <span className="font-semibold">Modo de Exportação para PDF:</span>
        Aperte <kbd className="bg-blue-800 px-2 py-1 rounded text-sm font-mono">Ctrl + P</kbd> ou <kbd className="bg-blue-800 px-2 py-1 rounded text-sm font-mono">Cmd + P</kbd>. 
        <strong>Importante:</strong> Marque a opção "Gráficos de segundo plano" (Background graphics) nas configurações de impressão para manter o visual Dark Mode.
      </div>

      <main className="max-w-[1100px] mx-auto bg-[#0B0F19] print:bg-[#0B0F19]">
        
        {/* --- PÁGINA 1: HERO E O PROBLEMA --- */}
        <div className="page-break-after-always px-8 py-12 md:py-20 min-h-[1050px] flex flex-col relative overflow-hidden">
          {/* Efeitos de fundo (print-color-adjust obriga a impressão da cor) */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/30 blur-[120px] rounded-full pointer-events-none" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }} />
          
          <header className="flex items-center gap-4 mb-16 z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-900/50" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>S</div>
            <span className="font-bold text-3xl tracking-wide text-gray-100">Sistema Imobiliário</span>
          </header>

          <div className="z-10 flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-[1.1] mb-6" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              Por que sua imobiliária perde vendas tendo tantos leads?
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-16 leading-relaxed">
              O mercado mudou, mas a maioria das imobiliárias continua gerenciando clientes de forma fragmentada, gerando custo alto e conversão baixa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Card O Modelo Antigo */}
              <div className="p-8 rounded-2xl bg-red-950/20 border border-red-900/30 relative" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div className="absolute -top-4 left-6 bg-red-900/80 text-red-100 px-4 py-1 rounded-full text-sm font-semibold border border-red-700/50">O Modelo Tradicional</div>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start gap-3 text-gray-300"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> <span>Paga um CRM base (ex: Nido, CV).</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> <span>Paga uma ferramenta extra para WhatsApp.</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> <span>Paga integração (Zapier, Pluga) para ligar tudo.</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> <span>Corretores esquecem de atualizar o funil.</span></li>
                </ul>
                <div className="mt-6 pt-6 border-t border-red-900/30 text-red-400 font-medium">
                  Resultado: Alto custo, dados espalhados e perda de timing comercial.
                </div>
              </div>

              {/* Card O Nosso Modelo */}
              <div className="p-8 rounded-2xl bg-blue-900/10 border border-blue-800/40 relative" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div className="absolute -top-4 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-blue-900/50">O Nosso Ecossistema</div>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> <span>Um único sistema integrado (CRM All-in-One).</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> <span>Inteligência Artificial Nativa (atendimento 24/7).</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> <span>Integrações diretas e gratuitas (Facebook, Portais).</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> <span>Automações que obrigam o fluxo a andar.</span></li>
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-900/50 text-blue-400 font-medium">
                  Resultado: Controle total, previsibilidade e drástica redução de custos.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PÁGINA 2: OS 3 PILARES --- */}
        <div className="page-break-after-always px-8 py-12 md:py-20 min-h-[1050px] flex flex-col justify-center relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Os 3 Pilares da Máquina de Vendas</h2>
            <p className="text-xl text-gray-400">Desenhado para imobiliárias que buscam alta performance operacional.</p>
          </div>

          <div className="space-y-12">
            {/* Pilar 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-[#0d1527] to-[#121c33] rounded-2xl border border-white/5 flex items-center justify-center p-8 shadow-2xl" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <Bot className="w-32 h-32 text-indigo-400" />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div className="text-indigo-400 font-bold tracking-widest text-sm uppercase">Pilar 1</div>
                <h3 className="text-3xl font-bold">Inteligência Artificial Integrada</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Não pague por um bot terceirizado. Nossa plataforma possui <strong>Agentes de IA Nativos</strong>. Eles qualificam leads de madrugada, analisam sentimentos nas conversas e só transferem para o corretor quando a venda estiver quente. Você treina a IA com as regras e produtos da sua empresa.
                </p>
                <div className="flex gap-4 pt-2">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm text-gray-300 flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-400"/> Atendimento 24/7</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm text-gray-300 flex items-center gap-1"><Target className="w-4 h-4 text-red-400"/> Foco em conversão</span>
                </div>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-[#0d1527] to-[#121c33] rounded-2xl border border-white/5 flex items-center justify-center p-8 shadow-2xl" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <Workflow className="w-32 h-32 text-emerald-400" />
              </div>
              <div className="w-full md:w-2/3 space-y-4 text-right">
                <div className="text-emerald-400 font-bold tracking-widest text-sm uppercase">Pilar 2</div>
                <h3 className="text-3xl font-bold">Automação de Ponta a Ponta</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  O corretor deve focar em relacionamento, não em preencher sistemas. O nosso <strong>Workflow Automático</strong> distribui leads via roleta, envia e-mails e WhatsApps de nutrição automaticamente e alerta gestores sobre leads esquecidos no funil. 
                </p>
                <div className="flex gap-4 pt-2 justify-end">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm text-gray-300 flex items-center gap-1">Fim do trabalho manual</span>
                </div>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-[#0d1527] to-[#121c33] rounded-2xl border border-white/5 flex items-center justify-center p-8 shadow-2xl" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <Building2 className="w-32 h-32 text-blue-400" />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div className="text-blue-400 font-bold tracking-widest text-sm uppercase">Pilar 3</div>
                <h3 className="text-3xl font-bold">Gestão Completa (All-in-One)</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Toda a sua operação numa tela só. Do <strong>Dashboard Financeiro</strong> à <strong>Lista de Imóveis</strong>, passando pela <strong>Caixa de Entrada Unificada</strong> (onde WhatsApp, E-mail e Insta ficam no mesmo lugar). Gestão visual via Pipeline Kanban e assinatura de propostas.
                </p>
                <div className="flex gap-4 pt-2">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm text-gray-300 flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-blue-400"/> Segurança de Dados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PÁGINA 3: TELAS E FECHAMENTO --- */}
        <div className="px-8 py-12 md:py-20 min-h-[1050px] flex flex-col justify-between relative">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Design Feito Para Engajar</h2>
            <p className="text-xl text-gray-400">Uma plataforma intuitiva, rápida e bonita. Seus corretores vão querer usar.</p>
          </div>

          {/* Grid de Imagens */}
          <div className="grid grid-cols-2 gap-6 mb-16">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl bg-gray-900" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Telas/Dashboard/screen.png" alt="Dashboard" className="w-full object-cover" />
              <div className="p-3 bg-gray-900/90 text-sm text-center text-gray-300 border-t border-white/10">Dashboard Executivo</div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl bg-gray-900" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Telas/Pipeline/screen.png" alt="Pipeline" className="w-full object-cover" />
              <div className="p-3 bg-gray-900/90 text-sm text-center text-gray-300 border-t border-white/10">Funil de Vendas Kanban</div>
            </div>
          </div>

          {/* Call to Action Final */}
          <div className="mt-auto p-12 rounded-3xl bg-gradient-to-br from-blue-900/40 to-indigo-900/20 border border-blue-500/20 text-center" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para unificar sua operação?</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Apresentamos apenas uma fração do que o nosso Ecossistema SaaS pode fazer pelo seu negócio. Reduza seus custos de tecnologia e aumente as conversões do seu time hoje.
            </p>
            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-lg print:hidden">
              Agende uma demonstração gratuita <ChevronRight />
            </div>
            <div className="hidden print:block text-blue-400 font-semibold text-xl mt-4">
              Entre em contato para uma demonstração completa do sistema.
            </div>
          </div>
        </div>

      </main>

      {/* Estilos específicos para impressão */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background-color: #0B0F19 !important;
          }
          .page-break-after-always {
            page-break-after: always;
          }
          /* Ocultar margens padroes do navegador na impressao se possivel */
          @page { margin: 0; size: A4 portrait; }
          html, body {
            width: 100%;
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
          }
          main {
            padding-top: 2rem !important;
          }
        }
      `}} />
    </div>
  );
}
