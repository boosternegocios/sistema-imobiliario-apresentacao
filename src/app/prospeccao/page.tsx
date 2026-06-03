"use client";

import React from "react";
import { 
  ShieldAlert, Activity, TrendingDown, Target, Wallet, Fingerprint, Layers, CheckCircle2, XCircle, ChevronRight
} from "lucide-react";

export default function ProspeccaoPDF() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-blue-500/30">
      {/* INSTRUÇÃO DE IMPRESSÃO (Escondida no PDF) */}
      <div className="print:hidden bg-indigo-600 text-white p-4 text-center flex items-center justify-center gap-2 sticky top-0 z-50 shadow-lg">
        <span className="font-semibold">Modo de Exportação:</span>
        Aperte <kbd className="bg-indigo-800 px-2 py-1 rounded text-sm font-mono">Ctrl + P</kbd>. 
        <strong>Importante:</strong> Marque a opção "Gráficos de segundo plano" (Background graphics) nas configurações de impressão.
      </div>

      <main className="max-w-[1100px] mx-auto bg-[#0B0F19] print:bg-[#0B0F19]">
        
        {/* --- PÁGINA 1: O GRANDE GARGALO (DOR) --- */}
        <div className="page-break-after-always px-8 py-12 md:py-20 print:py-10 min-h-[1050px] print:min-h-0 print:h-[297mm] flex flex-col relative overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/30 blur-[120px] rounded-full pointer-events-none" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }} />
          
          <header className="flex items-center gap-4 mb-16 print:mb-8 z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-900/50" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>S</div>
            <span className="font-bold text-3xl tracking-wide text-gray-100">Sistema Imobiliário</span>
          </header>

          <div className="z-10 flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl print:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-[1.15] mb-8 print:mb-6" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              Sua equipe capta muito, mas por que a conversão não acompanha?
            </h1>
            <p className="text-xl md:text-2xl print:text-xl text-gray-400 max-w-4xl mb-12 print:mb-8 leading-relaxed">
              Você provavelmente já tem um CRM. Já assinou um disparador de mensagens. Talvez tenha até um chatbot. O problema não é a falta de ferramentas... <strong>é o excesso delas.</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4 mb-8 print:mb-4">
              {/* Card O Custo do "Frankenstein" */}
              <div className="p-8 print:p-6 rounded-2xl bg-[#1a0f14] border border-red-900/30 relative break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div className="flex items-center gap-3 mb-6 print:mb-4">
                  <ShieldAlert className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl print:text-xl font-bold text-white">A Ilusão da Fragmentação</h3>
                </div>
                <p className="text-gray-400 mb-6 print:mb-4">Operações que usam sistemas "remendados" perdem vendas no atrito:</p>
                <ul className="space-y-4 print:space-y-2">
                  <li className="flex items-start gap-3 text-gray-300"><XCircle className="w-6 h-6 text-red-500/80 shrink-0" /> <span><strong>Delay (Speed to lead):</strong> O lead entra, passa por ferramentas de integração, vai pro Chatbot e demora até chegar no seu CRM base (como Nido, CV CRM ou Vista). Minutos preciosos são perdidos.</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><XCircle className="w-6 h-6 text-red-500/80 shrink-0" /> <span><strong>Ponto Cego:</strong> O corretor vai pro WhatsApp do celular. O gestor fica cego e o CRM desatualizado.</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><XCircle className="w-6 h-6 text-red-500/80 shrink-0" /> <span><strong>Custo Múltiplo:</strong> Mensalidades sobrepostas de várias plataformas para fazer uma única venda.</span></li>
                </ul>
              </div>

              {/* Card O Ecossistema */}
              <div className="p-8 print:p-6 rounded-2xl bg-[#0f172a] border border-blue-900/40 relative break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div className="flex items-center gap-3 mb-6 print:mb-4">
                  <Layers className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl print:text-xl font-bold text-white">O Poder do All-in-One</h3>
                </div>
                <p className="text-gray-400 mb-6 print:mb-4">Quando uma única plataforma controla de ponta a ponta, o atrito some:</p>
                <ul className="space-y-4 print:space-y-2">
                  <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-6 h-6 text-emerald-400/80 shrink-0" /> <span><strong>Zero Delay:</strong> O lead entra e a IA (nativa) responde e qualifica na mesma hora. Tudo dentro do CRM.</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-6 h-6 text-emerald-400/80 shrink-0" /> <span><strong>Visibilidade 100%:</strong> O WhatsApp roda dentro do sistema. Você audita o que o corretor fala, em tempo real.</span></li>
                  <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-6 h-6 text-emerald-400/80 shrink-0" /> <span><strong>Previsibilidade:</strong> Você sabe exatamente o custo de aquisição (CAC), sem perder dados em integrações.</span></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-6 print:mt-4 text-blue-400 font-medium text-xl print:text-lg">
              Nós não vendemos "mais uma ferramenta". Nós entregamos a fundação para sua imobiliária escalar.
            </div>
          </div>
        </div>

        {/* --- PÁGINA 2: O IMPACTO DIRETO (SOLUÇÕES) --- */}
        <div className="page-break-after-always px-8 py-12 md:py-20 print:py-10 min-h-[1050px] print:min-h-0 print:h-[297mm] flex flex-col justify-center relative">
          <div className="text-center mb-16 print:mb-8">
            <h2 className="text-4xl print:text-3xl font-bold mb-4">O Fim da Perda de Vendas</h2>
            <p className="text-xl print:text-lg text-gray-400">Como nosso ecossistema elimina os maiores ralos de dinheiro da sua operação.</p>
          </div>

          <div className="space-y-12 print:space-y-6">
            
            {/* Benefício 1 */}
            <div className="flex flex-col md:flex-row gap-8 print:gap-6 items-center bg-[#0d1321] p-8 print:p-6 rounded-3xl border border-white/5 shadow-xl break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              <div className="w-20 h-20 print:w-16 print:h-16 rounded-full bg-blue-900/30 flex items-center justify-center shrink-0">
                <Target className="w-10 h-10 print:w-8 print:h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl print:text-xl font-bold mb-3 print:mb-2">1. Roteamento Instantâneo & Roleta</h3>
                <p className="text-gray-300 text-lg print:text-base leading-relaxed">
                  Sem depender de integrações lentas ou gambiarras para distribuir leads. O sistema capta, identifica quem é o próximo corretor da fila e entrega na hora. Se o corretor demorar para atender, o próprio sistema aciona um alerta ou passa a bola para outro. <strong>O lead nunca esfria.</strong>
                </p>
              </div>
            </div>

            {/* Benefício 2 */}
            <div className="flex flex-col md:flex-row gap-8 print:gap-6 items-center bg-[#0d1321] p-8 print:p-6 rounded-3xl border border-white/5 shadow-xl break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              <div className="w-20 h-20 print:w-16 print:h-16 rounded-full bg-indigo-900/30 flex items-center justify-center shrink-0">
                <Activity className="w-10 h-10 print:w-8 print:h-8 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl print:text-xl font-bold mb-3 print:mb-2">2. Fim do Ponto Cego (Comunicação Unificada)</h3>
                <p className="text-gray-300 text-lg print:text-base leading-relaxed">
                  O problema do corretor ir pro WhatsApp pessoal e você perder o controle, acabou. Nossa Inbox Unificada mantém as conversas (WhatsApp, Insta, E-mail) dentro da ficha do cliente. <strong>A carteira de clientes pertence à imobiliária</strong>, não ao corretor.
                </p>
              </div>
            </div>

            {/* Benefício 3 */}
            <div className="flex flex-col md:flex-row gap-8 print:gap-6 items-center bg-[#0d1321] p-8 print:p-6 rounded-3xl border border-white/5 shadow-xl break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              <div className="w-20 h-20 print:w-16 print:h-16 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Fingerprint className="w-10 h-10 print:w-8 print:h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl print:text-xl font-bold mb-3 print:mb-2">3. A IA como sua "Pré-venda" Infalível</h3>
                <p className="text-gray-300 text-lg print:text-base leading-relaxed">
                  Nossos agentes de IA (treinados por você) não são robôs burros. Eles entendem contexto, fazem as perguntas certas e qualificam o lead de madrugada, no domingo, ou quando sua equipe estiver ocupada. <strong>O humano só atua quando a intenção de compra é real.</strong>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- PÁGINA 3: TELAS E ROI --- */}
        <div className="px-8 py-12 md:py-20 print:py-10 min-h-[1050px] print:min-h-0 print:h-[297mm] flex flex-col justify-between relative">
          
          <div className="mb-12 print:mb-8">
            <h2 className="text-4xl print:text-3xl font-bold mb-4 print:mb-2 text-center">Tudo Acontece Aqui Dentro</h2>
            <p className="text-xl print:text-lg text-gray-400 text-center">Gestão visual, bonita e impossível do corretor ignorar.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 print:gap-4 mb-16 print:mb-8">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#090d16] break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Telas/Dashboard/screen.png" alt="Dashboard" className="w-full h-auto max-h-[350px] object-contain object-top opacity-90 hover:opacity-100 transition-opacity" />
              <div className="p-4 print:p-2 bg-gray-900/90 text-center font-medium border-t border-white/10 print:text-sm">Gestão de Performance e ROI em Tempo Real</div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#090d16] break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Telas/Inbox unificada/screen.png" alt="Inbox" className="w-full h-auto max-h-[350px] object-contain object-top opacity-90 hover:opacity-100 transition-opacity" />
              <div className="p-4 print:p-2 bg-gray-900/90 text-center font-medium border-t border-white/10 print:text-sm">Inbox: Centralização de toda comunicação</div>
            </div>
          </div>

          {/* O Fechamento Matador */}
          <div className="mt-auto p-12 print:p-8 rounded-3xl bg-gradient-to-br from-[#0c1630] to-[#0a1122] border border-blue-500/20 text-center shadow-2xl break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
            <Wallet className="w-16 h-16 print:w-12 print:h-12 text-emerald-400 mx-auto mb-6 print:mb-4" />
            <h3 className="text-3xl md:text-5xl print:text-3xl font-bold text-white mb-6 print:mb-4 leading-tight">Quanto custa a fragmentação?</h3>
            <p className="text-xl print:text-lg text-gray-300 max-w-3xl mx-auto mb-10 print:mb-6 leading-relaxed">
              O custo não é apenas a soma das 4 mensalidades diferentes que você paga hoje. O custo real é o lead de R$ 50,00 que não recebeu retorno porque se perdeu no processo. 
              <br/><br/>
              Pare de perder dinheiro na transição entre ferramentas. <strong>Centralize sua operação.</strong>
            </p>
            
            <div className="hidden print:block text-blue-400 font-semibold text-xl mt-4 bg-blue-900/20 py-4 px-8 rounded-full border border-blue-800/50 inline-block">
              Entre em contato e agende sua demonstração.
            </div>
            <button className="print:hidden px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-lg shadow-lg shadow-blue-600/30 flex items-center gap-2 mx-auto transition-all">
              Ver Ecossistema na Prática <ChevronRight />
            </button>
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
          @page { margin: 0; size: A4 portrait; }
          html, body {
            width: 100%;
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
          }
          main {
            padding-top: 0 !important;
          }
          /* Prevenir corte no meio dos elementos */
          .break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}} />
    </div>
  );
}
