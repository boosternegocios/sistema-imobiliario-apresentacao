"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, ChevronLeft, Building2, TrendingUp, BarChart3, 
  UploadCloud, UserPlus, List, Users, Workflow, Target, Inbox, 
  Calendar, Home, FileText, Cpu, Library, Wand2, Activity, Zap, 
  PlusCircle, Link, Settings, TerminalSquare, UserCircle, CheckCircle2, Wallet 
} from "lucide-react";

const slides = [
  {
    id: "intro",
    title: "Revolucionando o Mercado Imobiliário",
    subtitle: "Por que criamos este sistema?",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          O mercado imobiliário moderno exige agilidade, organização e decisões baseadas em dados. Notamos que muitas incorporadoras e imobiliárias perdem vendas por falta de acompanhamento de leads, processos desorganizados e comunicação descentralizada.
        </p>
        <p>
          Criamos este Ecossistema SaaS para <strong>centralizar, automatizar e potencializar</strong> sua operação comercial. É mais do que um CRM, é uma máquina de vendas inteligente desenhada especificamente para as necessidades do seu time.
        </p>
        <div className="flex gap-4 mt-8 pt-4">
          <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400 w-5 h-5" /> <span>Mais conversões</span></div>
          <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400 w-5 h-5" /> <span>Menos tempo perdido</span></div>
          <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400 w-5 h-5" /> <span>Controle total</span></div>
        </div>
      </div>
    ),
    image: "/Telas/Dashboard/screen.png",
    icon: <Building2 className="w-12 h-12 text-blue-400" />
  },
  // --- VISÃO GERAL ---
  {
    id: "dashboard",
    title: "Visão Geral e Inteligência (Dashboard)",
    subtitle: "O controle do seu negócio na palma da mão",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          O <strong>Dashboard</strong> é o centro de comando do gestor. Aqui você tem uma visão clara e em tempo real da saúde da sua operação.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Métricas cruciais:</strong> Vendas no mês, leads ativos, e conversões.</li>
          <li><strong>Decisões rápidas:</strong> Identifique gargalos e oportunidades antes que virem problemas.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Dashboard/screen.png",
    icon: <TrendingUp className="w-12 h-12 text-indigo-400" />
  },
  {
    id: "relatorios",
    title: "Central de Relatórios",
    subtitle: "Dados que guiam suas estratégias",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Toda operação de sucesso depende de acompanhamento profundo. A <strong>Central de Relatórios</strong> extrai a inteligência dos seus dados.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Performance de equipe:</strong> Saiba quem está vendendo mais e o porquê.</li>
          <li><strong>Métricas de campanhas:</strong> ROI de marketing, custo por lead e canais mais eficientes.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Central de relatorios/screen.png",
    icon: <BarChart3 className="w-12 h-12 text-blue-500" />
  },
  // --- GESTÃO DE LEADS ---
  {
    id: "importacao-lead",
    title: "Importação de Leads",
    subtitle: "Traga sua base sem atrito",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Migrar de sistema ou subir planilhas não precisa ser uma dor de cabeça. O processo de <strong>Importação de Leads</strong> foi pensado para ser rápido e seguro.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Mapeamento inteligente:</strong> O sistema reconhece os campos da sua planilha.</li>
          <li><strong>Higienização:</strong> Remoção de duplicidades automática.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Importação do lead/screen.png",
    icon: <UploadCloud className="w-12 h-12 text-cyan-500" />
  },
  {
    id: "cadastrar-lead",
    title: "Cadastrar Lead Manualmente",
    subtitle: "Entrada rápida para novas captações",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          O corretor está na rua e conseguiu um contato quente? A tela de <strong>Cadastrar Lead</strong> é otimizada para salvar o cliente em segundos.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Campos essenciais:</strong> Direto ao ponto, pedindo apenas o que importa no primeiro momento.</li>
          <li><strong>Atribuição imediata:</strong> O corretor já pode colocar o lead direto no funil de vendas.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Cadastrar lead/screen.png",
    icon: <UserPlus className="w-12 h-12 text-emerald-400" />
  },
  {
    id: "lista-leads",
    title: "Lista de Leads",
    subtitle: "Sua carteira de clientes acessível",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A <strong>Lista de Leads</strong> é o diretório completo de todos os contatos. Com filtros avançados, o corretor encontra qualquer cliente instantaneamente.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Segmentação avançada:</strong> Filtre por temperatura, interesse, budget ou última interação.</li>
          <li><strong>Ações em massa:</strong> Envie comunicados para grupos específicos com facilidade.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Lista de leads/screen.png",
    icon: <List className="w-12 h-12 text-slate-400" />
  },
  {
    id: "ficha-lead",
    title: "Ficha Detalhada do Lead",
    subtitle: "Conheça seu cliente como nunca antes",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A <strong>Ficha do Lead</strong> é o coração do CRM. Ela reúne todas as interações, preferências e dados do cliente.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Contexto total:</strong> Histórico de chamadas, e-mails e WhatsApps lidos.</li>
          <li><strong>Atendimento premium:</strong> Informações valiosas para criar rapport na hora de vender.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Ficha do lead/screen.png",
    icon: <Users className="w-12 h-12 text-pink-400" />
  },
  {
    id: "pipeline",
    title: "Gestão do Funil (Pipeline)",
    subtitle: "Nenhum cliente esquecido para trás",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          O <strong>Pipeline de Vendas</strong> organiza todos os seus potenciais clientes por etapa da negociação de forma visual e intuitiva (Kanban). 
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Drag and drop:</strong> Mova os leads de etapa com um arrastar de mouse.</li>
          <li><strong>Previsibilidade:</strong> Foco nas negociações mais quentes perto do fechamento.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Pipeline/screen.png",
    icon: <Workflow className="w-12 h-12 text-purple-400" />
  },
  {
    id: "drawer-oportunidade",
    title: "Resumo da Oportunidade (Drawer)",
    subtitle: "Agilidade sem mudar de tela",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Clicar no Pipeline abre o <strong>Drawer de Oportunidade</strong>, uma aba lateral rápida para atualizar o status do negócio sem perder a visão do funil.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Notas rápidas:</strong> Adicione observações sobre a última conversa rapidamente.</li>
          <li><strong>Foco no fluxo:</strong> Não quebra a linha de raciocínio do corretor.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Drawer de oportunidade/screen.png",
    icon: <Target className="w-12 h-12 text-red-400" />
  },
  // --- COMUNICAÇÃO ---
  {
    id: "inbox",
    title: "Comunicação Unificada (Inbox)",
    subtitle: "Todos os canais em um só lugar",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          WhatsApp, E-mail, Redes Sociais... A <strong>Inbox Unificada</strong> concentra todas as mensagens do cliente em uma única tela.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Agilidade na resposta:</strong> Quem responde primeiro, vende mais.</li>
          <li><strong>Histórico da empresa:</strong> Se um corretor sair, todo o histórico fica na plataforma.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Inbox unificada/screen.png",
    icon: <Inbox className="w-12 h-12 text-cyan-400" />
  },
  {
    id: "tasks",
    title: "Agenda e Tarefas Diárias",
    subtitle: "Visitas marcadas e nunca esquecidas",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          O fluxo de um corretor é intenso. A tela de <strong>Criar Tarefa</strong> organiza a rotina, desde uma ligação até visitas nos estandes.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Visitas Agendadas:</strong> Marque a visita com integração ao calendário.</li>
          <li><strong>Lembretes Automáticos:</strong> O sistema dispara WhatsApp para o cliente não faltar.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Criar tarefa/screen.png",
    icon: <Calendar className="w-12 h-12 text-orange-400" />
  },
  // --- PRODUTO ---
  {
    id: "lista-imoveis",
    title: "Lista de Imóveis",
    subtitle: "Seu estoque completo",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A <strong>Lista de Imóveis</strong> permite que a equipe navegue e filtre todas as opções disponíveis no portfólio da incorporadora ou imobiliária.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Filtros precisos:</strong> Encontre imóveis por bairro, faixa de preço, metragem ou status da obra.</li>
          <li><strong>Disponibilidade:</strong> Visão clara do que já foi vendido, reservado ou está livre.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Lista de imoveis/screen.png",
    icon: <Home className="w-12 h-12 text-sky-400" />
  },
  {
    id: "ficha-imovel",
    title: "Gestão do Produto (Ficha do Imóvel)",
    subtitle: "Seu estoque vitrine",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A <strong>Ficha do Imóvel</strong> traz todas as informações, plantas e fotos que o corretor precisa para encantar o cliente.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Apresentação rica:</strong> Mostre galerias de fotos e tours virtuais direto do sistema.</li>
          <li><strong>Cruzamento de dados:</strong> O sistema indica clientes que combinam com este imóvel.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Ficha do imovel/screen.png",
    icon: <FileText className="w-12 h-12 text-amber-400" />
  },
  // --- IA ---
  {
    id: "agentes",
    title: "Agentes de IA (Visão Geral)",
    subtitle: "Inteligência Artificial atuando na sua equipe",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Os <strong>Agentes de IA</strong> revolucionam sua operação. Eles são bots inteligentes treinados com seus dados para atuar no atendimento ou análise.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Atendimento 24/7:</strong> Qualificam leads de madrugada como um corretor faria.</li>
          <li><strong>Análise de sentimentos:</strong> Entendem se o cliente está satisfeito ou prestes a desistir.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Agentes/screen.png",
    icon: <Cpu className="w-12 h-12 text-emerald-400" />
  },
  {
    id: "biblioteca-agentes",
    title: "Biblioteca de Agentes",
    subtitle: "Modelos prontos para sua imobiliária",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Não sabe como configurar uma IA? A <strong>Biblioteca de Agentes</strong> traz IAs pré-configuradas para o mercado imobiliário prontas para usar.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Agente de Qualificação:</strong> Faz as perguntas certas antes de passar pro corretor.</li>
          <li><strong>Agente de Recuperação:</strong> Entra em contato com leads frios oferecendo novas condições.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Biblioteca de agentes/screen.png",
    icon: <Library className="w-12 h-12 text-indigo-400" />
  },
  {
    id: "criar-agentes",
    title: "Criação de Agentes de IA",
    subtitle: "Personalize a mente da sua IA",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A tela de <strong>Criar Agentes</strong> permite que você treine uma Inteligência Artificial com a voz, o tom e as diretrizes da sua própria empresa.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Base de conhecimento própria:</strong> Faça upload de PDFs e manuais de empreendimentos.</li>
          <li><strong>Prompt Customizado:</strong> Defina limites do que a IA pode prometer ao cliente.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Criar agentes/screen.png",
    icon: <Wand2 className="w-12 h-12 text-fuchsia-400" />
  },
  {
    id: "monitoramento-agentes",
    title: "Monitoramento dos Agentes",
    subtitle: "Insights e acompanhamento da IA",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Controle total. No <strong>Monitoramento dos Agentes</strong>, os gestores auditam e supervisionam tudo o que a Inteligência Artificial está fazendo.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Taxa de Sucesso:</strong> Quantos leads a IA conseguiu transferir com sucesso para humanos.</li>
          <li><strong>Auditoria de Chat:</strong> Leia as conversas que a IA está tendo para garantir a qualidade.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Monitoramento dos agentes/screen.png",
    icon: <Activity className="w-12 h-12 text-green-400" />
  },
  // --- AUTOMAÇÕES ---
  {
    id: "automacoes",
    title: "Automações Inteligentes",
    subtitle: "Processos no piloto automático",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A tela de <strong>Automações</strong> exibe todas as regras ativas do sistema. Ela permite que a máquina cuide dos processos mecânicos.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Visão global:</strong> Acompanhe quantas automações foram disparadas no dia.</li>
          <li><strong>Gestão simplificada:</strong> Pause ou ative campanhas e roteamentos com um clique.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Automações/screen.png",
    icon: <Zap className="w-12 h-12 text-yellow-400" />
  },
  {
    id: "criar-automacao",
    title: "Criador de Automações (Workflow)",
    subtitle: "Monte fluxos de trabalho visuais",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A ferramenta de <strong>Criar Automação</strong> é um canvas visual onde você desenha gatilhos e ações (Ex: Se um lead vier do Facebook, aguardar 5 min, e mandar WhatsApp).
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Régua de relacionamento:</strong> Crie sequências complexas de nutrição sem saber programar.</li>
          <li><strong>Roleta de Leads:</strong> Configure a distribuição justa de contatos novos entre os corretores da roleta.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Criar automação/screen.png",
    icon: <PlusCircle className="w-12 h-12 text-pink-500" />
  },
  // --- INTEGRAÇÕES ---
  {
    id: "integracoes",
    title: "Hub de Integrações",
    subtitle: "Conectado com seu ecossistema",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Nenhum sistema sobrevive isolado. O módulo de <strong>Integrações</strong> conecta nossa plataforma a Meta Ads, Google, Portais Imobiliários e ERPs (ex: Sienge).
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Leads automáticos:</strong> O lead preenche o formulário no Facebook e cai na tela do corretor em milissegundos.</li>
          <li><strong>Sincronização de Imóveis:</strong> Publica de forma integrada com ZAP, VivaReal, etc.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Integrações/screen.png",
    icon: <Link className="w-12 h-12 text-cyan-300" />
  },
  {
    id: "configuracoes-integracao",
    title: "Configurações das Integrações",
    subtitle: "Ajuste fino de conexões",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Dentro de <strong>Configurações das Integrações</strong>, a equipe de TI ou o gestor configura chaves de acesso, Webhooks e regras de mapeamento de campos.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Flexibilidade Total:</strong> Mapeie campos customizados (ex: "renda mensal") do Meta para o CRM.</li>
          <li><strong>Segurança:</strong> Gerenciamento seguro de Tokens e permissões externas.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Configurações das integrações/screen.png",
    icon: <Settings className="w-12 h-12 text-slate-400" />
  },
  {
    id: "propostas",
    title: "Gestão de Propostas",
    subtitle: "Negociações claras e seguras",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          O módulo de <strong>Propostas</strong> permite enviar, rastrear e aprovar propostas comerciais com poucos cliques.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Aprovação Rápida:</strong> Fluxo de aceite digital entre corretor, cliente e diretoria.</li>
          <li><strong>Histórico de Negociação:</strong> Todas as contra-propostas e valores ficam salvos no histórico da venda.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Drawer de oportunidade/screen.png",
    icon: <FileText className="w-12 h-12 text-blue-400" />
  },
  // --- EQUIPE ---
  {
    id: "perfil-corretor",
    title: "Perfil do Corretor",
    subtitle: "Gestão e metas individuais",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          A tela de <strong>Perfil do Corretor</strong> mostra a "identidade" do profissional no sistema, incluindo sua foto, permissões e metas estipuladas.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Gestão de Permissões:</strong> Controle exatamente o que cada corretor pode ver ou editar.</li>
          <li><strong>Gamificação e Metas:</strong> Acompanhamento de quantos leads faltam para bater a meta do mês.</li>
        </ul>
      </div>
    ),
    image: "/Telas/Perfil do corretor/screen.png",
  },
  // --- VALORES E TRANSPARÊNCIA ---
  {
    id: "investimento",
    title: "Transparência Total (Investimento)",
    subtitle: "Sem taxas ocultas, dados 100% seus",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>
          Muitas empresas escondem os custos de servidor e IA. Nós conectamos você direto na fonte, pagando <strong>preço de custo</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white/5 p-5 rounded-xl border border-blue-500/30">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2"><Building2 className="w-5 h-5"/> Ecossistema All-in-One</h4>
            <ul className="text-sm space-y-3">
              <li className="flex flex-col">
                <span className="text-gray-400">Implementação & Setup</span>
                <strong className="text-white text-lg">R$ 2.500,00</strong>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400">Licença Mensal</span>
                <strong className="text-white text-lg">R$ 699/mês</strong>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-5 rounded-xl border border-emerald-500/30">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Wallet className="w-5 h-5"/> Sua Infra (Preço de Custo)</h4>
            <ul className="text-sm space-y-3">
              <li className="flex flex-col">
                <span className="text-gray-400">Inteligência Artificial</span>
                <span className="text-white">Pague apenas os centavos que consumir, conectado direto na provedora.</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400">Banco de Dados (Supabase)</span>
                <span className="text-white">Limite gratuito atende a maioria. Custo máximo aprox. <strong>$20/mês (~R$ 110)</strong> se a operação escalar absurdamente.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    image: "/Telas/Dashboard/screen.png",
    icon: <Wallet className="w-12 h-12 text-emerald-400" />
  }
];

export default function Apresentacao() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-hidden flex flex-col font-sans selection:bg-blue-500/30">
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center z-10 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-lg">S</div>
          <span className="font-semibold text-xl tracking-wide">Ecossistema Imobiliário</span>
        </div>
        <div className="text-sm font-medium text-gray-400">
          Apresentação Comercial • {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center relative p-8 md:p-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px]" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[100px]" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10"
          >
            {/* Text Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-block p-3 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm">
                  {slide.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-xl text-blue-400 font-medium">
                  {slide.subtitle}
                </h2>
              </div>
              
              <div className="prose prose-invert prose-lg">
                {slide.content}
              </div>
              
              <div className="flex items-center gap-4 pt-6">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors font-medium flex items-center gap-2 shadow-lg shadow-blue-900/50"
                >
                  Próximo <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group"
              >
                {/* Mockup Frame */}
                <div className="h-8 bg-gray-900 flex items-center px-4 gap-2 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                {/* Fallback pattern if image is missing */}
                <div className="aspect-video bg-gray-800 relative w-full overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
                      (e.target as HTMLImageElement).className = "absolute inset-0 w-full h-full object-cover opacity-50 blur-sm";
                    }}
                  />
                  
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-800 w-full">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
