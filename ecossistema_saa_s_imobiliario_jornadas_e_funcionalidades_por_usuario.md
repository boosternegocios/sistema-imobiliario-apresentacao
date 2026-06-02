# Ecossistema SaaS Imobiliário — Jornadas e Funcionalidades por Usuário

## 1. Objetivo do documento

Este documento define, em nível de arquitetura de produto e análise de sistemas, a versão consolidada e atualizada de **todas as jornadas, responsabilidades, permissões, contextos de uso e funcionalidades por tipo de usuário** do ecossistema SaaS imobiliário.

A plataforma foi concebida para atender simultaneamente dois mercados:

- **Imobiliárias**, com operação multiusuário, gestão de equipe, controle de leads, imóveis, atendimento, visitas, propostas, automações e agentes.
- **Corretores autônomos**, inclusive aqueles que atuam com múltiplas imobiliárias e também mantêm carteira própria.

O sistema deve operar como um **ecossistema unificado**, com um único núcleo funcional e múltiplos contextos de operação, mantendo isolamento de dados, controle de permissões e excelente experiência de uso.

---

## 2. Princípios estruturais do ecossistema

### 2.1 Um sistema, múltiplos contextos
A plataforma não será dividida em dois produtos distintos. Ela será um único sistema com modos de uso diferentes.

Os contextos principais são:

- **Contexto Empresa / Imobiliária**
- **Contexto Corretor Autônomo / Workspace Próprio**

### 2.2 Conta única com múltiplos vínculos
Um usuário pode possuir uma única conta e estar vinculado a múltiplos contextos simultaneamente.

Exemplo:
- vínculo com Imobiliária X
- vínculo com Imobiliária Y
- workspace próprio de operação autônoma

### 2.3 Isolamento por contexto
Cada contexto deve isolar:
- leads
- imóveis
- propostas
- visitas
- tarefas
- agentes
- integrações
- dashboards
- permissões

### 2.4 Governança por contexto
Cada contexto controla:
- quem pode entrar
- quais módulos cada usuário pode acessar
- quais registros cada usuário pode visualizar
- quais ações cada usuário pode executar

### 2.5 Regra de monetização
- Quando o usuário entra como membro de uma imobiliária, o **cliente pagante é a imobiliária**.
- Quando o usuário possui operação própria/autônoma, ele pode ser **cliente pagante do seu próprio workspace**.

---

## 3. Entidades macro do ecossistema

As principais entidades de negócio consideradas neste documento são:

- Conta de usuário
- Organização / Imobiliária
- Workspace autônomo
- Vínculo de usuário
- Papel / role
- Permissão
- Lead
- Cliente
- Proprietário
- Imóvel
- Atendimento / conversa
- Pipeline
- Etapa
- Visita
- Proposta
- Tarefa
- Documento
- Corretor
- Equipe
- Agente inteligente
- Execução de agente
- Integração externa
- Log de atividade
- Dashboard / indicador

---

## 4. Perfis de usuário do ecossistema

O ecossistema deve suportar os seguintes perfis.

### Perfis organizacionais
1. Super Admin da Plataforma
2. Admin da Imobiliária
3. Gestor Comercial
4. Corretor vinculado à imobiliária
5. SDR / Pré-atendimento
6. Operacional / Administrativo
7. Proprietário do imóvel

### Perfis independentes
8. Corretor Autônomo

### Perfis híbridos
9. Corretor multi-vínculo

O corretor multi-vínculo pode operar simultaneamente como:
- membro da Imobiliária A
- membro da Imobiliária B
- autônomo em workspace próprio

---

## 5. Estrutura geral de módulos do sistema

Todos os usuários, respeitando permissões e contexto, interagem com os mesmos grandes blocos funcionais:

1. Dashboard
2. CRM / Leads
3. Atendimento Omnichannel
4. Pipeline Comercial
5. Gestão de Imóveis
6. Agenda / Visitas / Tarefas
7. Propostas e Negociação
8. Gestão de Proprietários
9. Gestão de Corretores e Equipes
10. Relatórios e Indicadores
11. Automações
12. Integrações e Consumo
13. Agentes Inteligentes
14. Configurações e Governança

---

# BLOCO A — SUPER ADMIN DA PLATAFORMA

## A.1 Objetivo do perfil
Gerenciar a plataforma SaaS como produto, supervisionando contas, organizações, consumo, billing, módulos, permissões globais, estabilidade operacional e expansão do ecossistema.

## A.2 Quem é esse usuário
É a sua empresa operando o produto como SaaS owner.

## A.3 Jornada principal
1. Acessa painel global da plataforma
2. Visualiza contas e organizações ativas
3. Monitora uso da plataforma
4. Monitora consumo de infraestrutura e integrações
5. Controla planos, módulos e billing
6. Atua em suporte avançado, auditoria e governança global

## A.4 Funcionalidades detalhadas

### A.4.1 Gestão global de contas
- criar organização
- editar organização
- suspender organização
- reativar organização
- visualizar workspaces autônomos
- visualizar vínculos de usuários com múltiplos contextos
- migrar contas
- mesclar registros organizacionais quando necessário

### A.4.2 Gestão global de planos e monetização
- criar plano
- editar plano
- ativar módulos por plano
- limitar usuários por plano
- limitar recursos por plano
- definir add-ons
- controlar billing por organização
- controlar billing por workspace autônomo

### A.4.3 Monitoramento técnico da plataforma
- número total de organizações
- número total de usuários
- número total de corretores autônomos
- número de agentes ativos
- consumo agregado de integrações
- falhas globais de webhook
- falhas de integrações
- logs de execução crítica

### A.4.4 Governança global
- cadastrar tipos de papéis do sistema
- configurar matriz-base de permissões
- ativar recursos beta
- liberar módulos específicos por conta
- configurar políticas globais de retenção de dados
- controlar auditoria

### A.4.5 Suporte e auditoria
- impersonar organização para suporte controlado
- ver logs de eventos
- ver histórico de alterações críticas
- rastrear ações por usuário
- monitorar erro de agentes
- monitorar falhas em automações

## A.5 Campos e dados críticos visíveis
- nome da conta
- tipo de cliente
- plano
- status da assinatura
- número de usuários ativos
- número de agentes ativos
- data de criação
- data da última atividade
- consumo operacional agregado

---

# BLOCO B — ADMIN DA IMOBILIÁRIA

## B.1 Objetivo do perfil
Gerenciar a operação da imobiliária de ponta a ponta: equipe, leads, imóveis, canais, processos, automações, agentes, relatórios e integrações.

## B.2 Quem é esse usuário
- dono da imobiliária
- sócio
- diretor comercial
- responsável pela operação

## B.3 Jornada principal
1. Cria ou acessa a conta da imobiliária
2. Configura dados da empresa
3. Convida usuários
4. Define equipes e permissões
5. Configura pipeline e rotinas comerciais
6. Conecta canais e integrações
7. Publica agentes e automações
8. Monitora a operação em dashboards
9. Otimiza a conversão da equipe

## B.4 Funcionalidades detalhadas

### B.4.1 Onboarding e configuração da organização
- cadastrar nome da imobiliária
- cadastrar CNPJ ou identificação interna
- cadastrar endereço
- cadastrar unidades / filiais
- configurar telefone principal
- configurar e-mail principal
- configurar logotipo e identidade
- configurar timezone
- definir idioma padrão
- ativar módulos contratados

### B.4.2 Gestão de usuários e equipes
- convidar usuário
- vincular usuário a equipe
- definir papel do usuário
- editar papel
- remover vínculo
- inativar usuário
- reativar usuário
- definir gestor responsável
- definir carteira visível por usuário

### B.4.3 Gestão de corretores vinculados
- adicionar corretor interno
- adicionar corretor externo/parceiro
- vincular corretor existente da plataforma
- remover vínculo do corretor
- limitar escopo de atuação do corretor
- definir bairros / regiões / imóveis sob responsabilidade do corretor
- definir se o corretor pode ter leads próprios dentro da imobiliária

### B.4.4 Gestão comercial
- criar pipelines
- editar etapas
- definir múltiplos pipelines por linha de negócio
- cadastrar motivos de perda
- configurar tags
- configurar score de lead
- configurar SLA por etapa
- configurar regras de redistribuição de leads
- configurar regras de ownership

### B.4.5 Gestão de leads
- visualizar todos os leads da organização
- pesquisar leads
- filtrar leads por corretor, origem, etapa, prioridade, bairro e valor
- reatribuir leads
- pausar leads
- marcar lead como perdido
- reativar lead
- consolidar lead duplicado
- bloquear lead para evitar conflito entre corretores
- visualizar linha do tempo completa

### B.4.6 Gestão de imóveis
- cadastrar imóvel
- editar imóvel
- arquivar imóvel
- vincular proprietário
- vincular corretor responsável
- alterar status do imóvel
- registrar histórico de preço
- monitorar desempenho por imóvel
- acompanhar leads, visitas e propostas por imóvel

### B.4.7 Gestão de proprietários
- cadastrar proprietário
- editar proprietário
- vincular proprietário a múltiplos imóveis
- acompanhar relacionamento
- habilitar portal do proprietário
- definir o que o proprietário pode visualizar

### B.4.8 Gestão de atendimento e canais
- conectar WhatsApp da empresa
- conectar inbox do Instagram
- conectar formulários
- conectar chat do site
- centralizar caixa de entrada da imobiliária
- definir filas de atendimento
- definir roteamento automático
- definir templates e respostas rápidas

### B.4.9 Gestão de visitas e tarefas
- visualizar agenda global
- visualizar agenda por corretor
- criar visita
- editar visita
- cancelar visita
- confirmar visita
- acompanhar visitas realizadas e no-show
- monitorar tarefas atrasadas
- criar tarefas manuais e recorrentes

### B.4.10 Gestão de propostas
- visualizar todas as propostas
- criar proposta manual
- editar proposta
- registrar contraproposta
- registrar aceite
- registrar recusa
- acompanhar status negocial

### B.4.11 Relatórios e dashboards
- leads por origem
- conversão por etapa
- conversão por corretor
- tempo médio de resposta
- imóveis parados
- visitas agendadas
- propostas em aberto
- valor em pipeline
- perdas por motivo
- desempenho de agentes

### B.4.12 Automações
- criar automação
- ativar/desativar automação
- definir gatilho
- definir ação
- conectar automação a canais, pipeline ou CRM
- monitorar logs de automação

### B.4.13 Agentes inteligentes
- criar agente da empresa
- editar agente
- duplicar agente
- ativar/desativar agente
- conectar agente a canais da empresa
- definir quais dados o agente acessa
- definir ações permitidas
- testar agente
- acompanhar monitoramento dos agentes organizacionais

### B.4.14 Integrações e consumo
- conectar LLMs
- conectar webhooks
- conectar n8n
- conectar provedores de e-mail
- monitorar consumo
- definir limites
- bloquear execução ao atingir teto
- ver logs e falhas

## B.5 Campos e visões críticas do dashboard do admin
- leads do dia
- leads sem resposta
- tempo médio de primeira resposta
- visitas de hoje
- propostas em aberto
- valor total do pipeline
- ranking de corretores
- agentes ativos
- integrações com falha
- tarefas críticas

---

# BLOCO C — GESTOR COMERCIAL

## C.1 Objetivo do perfil
Acompanhar e otimizar a execução do processo comercial da equipe.

## C.2 Quem é esse usuário
- gerente de vendas
- coordenador comercial
- líder de equipe

## C.3 Jornada principal
1. Acessa dashboard comercial
2. Visualiza leads novos e leads sem atendimento
3. Redistribui leads
4. Acompanha pipeline
5. Cobra follow-ups
6. Monitora visitas e propostas
7. Atua sobre gargalos e baixa performance

## C.4 Funcionalidades detalhadas

### C.4.1 Dashboard comercial
- leads novos do período
- leads sem atendimento
- leads com SLA vencido
- leads em risco
- visitas não confirmadas
- propostas sem retorno
- conversão por corretor
- fila de priorização

### C.4.2 Gestão de leads e ownership
- visualizar leads da equipe
- redistribuir leads
- transferir leads entre corretores
- assumir lead temporariamente
- ver motivo de perda
- identificar leads duplicados
- monitorar qualidade do atendimento

### C.4.3 Gestão do pipeline
- visualizar kanban por equipe
- visualizar lista por etapa
- identificar travamentos por etapa
- filtrar por corretor
- filtrar por imobiliária/unidade
- acompanhar tempo médio por etapa

### C.4.4 Gestão de produtividade
- ranking de resposta
- ranking de visitas
- ranking de propostas
- ranking de conversão
- tarefas vencidas por corretor
- carteira parada por corretor

### C.4.5 Acompanhamento operacional
- monitorar agenda da equipe
- monitorar visitas do dia
- monitorar negociações abertas
- monitorar propostas pendentes
- ver indicadores de agentes que atendem a equipe

### C.4.6 Ações de coaching e suporte
- adicionar notas internas
- comentar registros
- deixar instruções para corretor
- acionar tarefa obrigatória
- sinalizar prioridade de lead

## C.5 Dados críticos visíveis
- nome do corretor
- quantidade de leads ativos
- tempo médio de resposta
- número de visitas do período
- taxa de conversão
- propostas emitidas
- negócios travados

---

# BLOCO D — CORRETOR VINCULADO À IMOBILIÁRIA

## D.1 Objetivo do perfil
Atender, qualificar e converter leads dentro do contexto da imobiliária à qual está vinculado.

## D.2 Quem é esse usuário
- corretor empregado
- corretor parceiro
- corretor externo vinculado à operação

## D.3 Jornada principal
1. Entra na plataforma
2. Seleciona o contexto da imobiliária
3. Visualiza seus leads e tarefas prioritárias
4. Atende conversas na inbox
5. Qualifica lead
6. Agenda visita
7. Atualiza pipeline
8. Gera proposta
9. Faz follow-up
10. Fecha negócio

## D.4 Funcionalidades detalhadas

### D.4.1 Dashboard do corretor
- meus leads do dia
- leads quentes
- tarefas pendentes
- visitas de hoje
- propostas pendentes
- leads sem resposta
- comissão prevista, se a imobiliária permitir

### D.4.2 Minha carteira de leads
- visualizar meus leads
- buscar lead
- filtrar por etapa, prioridade, origem, bairro, valor
- abrir ficha completa do lead
- editar informações permitidas do lead
- mover lead de etapa
- registrar perda

### D.4.3 Ficha do lead
A ficha deve exibir:
- nome
- telefone
- e-mail
- origem
- interesse principal
- tipo de imóvel
- faixa de valor
- bairros desejados
- urgência
- necessidade de financiamento
- corretor responsável
- etapa atual
- score / temperatura
- tags
- histórico de interações
- tarefas vinculadas
- imóveis sugeridos
- visitas vinculadas
- propostas vinculadas
- resumo por IA

### D.4.4 Atendimento omnichannel
- visualizar conversas atribuídas
- responder mensagens
- usar templates
- anexar arquivos
- ver contexto do lead ao lado da conversa
- usar sugestão de resposta da IA
- transferir atendimento para gestor/SDR quando permitido

### D.4.5 Agenda e visitas
- visualizar agenda diária, semanal e mensal
- agendar visita
- reagendar visita
- cancelar visita
- confirmar presença
- registrar resultado da visita
- criar follow-up pós-visita

### D.4.6 Pipeline
- visualizar pipeline pessoal
- mover negócio de etapa
- abrir card detalhado
- registrar observação
- registrar impeditivo
- atualizar próxima ação

### D.4.7 Propostas
- criar proposta
- editar proposta
- registrar contraproposta
- registrar aceite/recusa
- anexar documentação básica quando permitido

### D.4.8 Biblioteca de imóveis
- pesquisar imóveis da imobiliária
- filtrar por bairro, cidade, valor, tipo e características
- ver galeria
- ver ficha do imóvel
- ver disponibilidade
- sugerir imóvel ao lead

### D.4.9 Tarefas
- visualizar tarefas do dia
- concluir tarefa
- reagendar tarefa
- criar tarefa manual
- ver tarefas vencidas

### D.4.10 Assistência de IA / agentes internos
- receber sugestão de resposta
- receber sugestão de imóvel
- receber resumo de lead
- receber sugestão de próxima ação

## D.5 Restrições possíveis
Dependendo da política da imobiliária, o corretor pode:
- não visualizar todos os leads da empresa
- não visualizar leads de outros corretores
- não visualizar relatórios globais
- não editar determinadas entidades
- não acessar integrações e agentes da empresa

---

# BLOCO E — SDR / PRÉ-ATENDIMENTO

## E.1 Objetivo do perfil
Executar a triagem inicial dos leads, qualificando e roteando corretamente as oportunidades.

## E.2 Quem é esse usuário
- pré-vendas
- atendente inicial
- operador de qualificação

## E.3 Jornada principal
1. Recebe lead novo
2. Abre conversa inicial
3. Coleta informações mínimas
4. Classifica lead
5. Define prioridade
6. Encaminha para corretor ou automação

## E.4 Funcionalidades detalhadas

### E.4.1 Fila de novos leads
- visualizar leads recém-chegados
- ordenar por tempo de entrada
- filtrar por origem
- filtrar por canal
- identificar leads ainda não atendidos

### E.4.2 Inbox de triagem
- responder lead
- usar roteiro guiado
- usar templates
- usar IA de apoio
- registrar resumo de triagem

### E.4.3 Qualificação estruturada
Campos e dados que podem ser coletados:
- nome completo
- telefone
- e-mail
- tipo de imóvel de interesse
- finalidade
- faixa de valor
- região desejada
- urgência
- necessidade de financiamento
- disponibilidade para visita

### E.4.4 Classificação e encaminhamento
- marcar lead como frio, morno ou quente
- atribuir corretor
- enviar para fila específica
- agendar visita preliminar
- inserir em campanha de nutrição

### E.4.5 Controle de qualidade
- ver histórico da triagem
- revisar leads devolvidos
- corrigir dados básicos do lead

---

# BLOCO F — OPERACIONAL / ADMINISTRATIVO

## F.1 Objetivo do perfil
Dar suporte ao processo documental, operacional e de fechamento, reduzindo atrito e retrabalho.

## F.2 Quem é esse usuário
- administrativo da imobiliária
- backoffice
- suporte à venda

## F.3 Jornada principal
1. Acompanha propostas em fase avançada
2. Organiza documentação
3. Controla pendências
4. Atualiza andamento
5. Dá suporte até o fechamento

## F.4 Funcionalidades detalhadas

### F.4.1 Gestão documental
- subir documentos
- editar metadados de documentos
- definir tipo de documento
- vincular documento a lead, proposta, imóvel ou proprietário
- visualizar checklist documental
- marcar documento como pendente / recebido / aprovado / recusado

### F.4.2 Gestão de pendências
- criar pendência
- atribuir responsável
- definir prazo
- marcar como concluída
- monitorar pendências vencidas

### F.4.3 Acompanhamento de proposta e fechamento
- ver propostas em etapa documental
- atualizar status operacional
- registrar andamento de financiamento
- registrar observações internas
- alertar equipe sobre falta de documentos

### F.4.4 Comunicação interna
- comentar processo
- anexar evidências
- registrar histórico interno da operação

---

# BLOCO G — PROPRIETÁRIO DO IMÓVEL

## G.1 Objetivo do perfil
Acompanhar o desempenho do imóvel e o trabalho da imobiliária de forma transparente.

## G.2 Quem é esse usuário
- dono do imóvel
- proprietário que contrata a imobiliária para vender ou alugar

## G.3 Jornada principal
1. Recebe acesso ao portal
2. Visualiza seus imóveis
3. Acompanha indicadores básicos
4. Visualiza visitas e propostas
5. Solicita contato se necessário

## G.4 Funcionalidades detalhadas

### G.4.1 Portal do proprietário
- login seguro
- visualizar imóveis vinculados
- visualizar status do imóvel
- ver histórico de mudanças de preço quando permitido
- ver leads recebidos por imóvel
- ver visitas realizadas
- ver propostas recebidas
- ver feedbacks de mercado quando a imobiliária compartilhar

### G.4.2 Comunicação
- solicitar retorno da imobiliária
- enviar mensagem institucional/solicitação
- receber atualização automática do andamento

### G.4.3 Restrições do perfil
O proprietário não deve visualizar:
- dados sensíveis de leads
- dados internos da equipe
- dados de outros imóveis que não sejam seus
- métricas estratégicas da imobiliária

---

# BLOCO H — CORRETOR AUTÔNOMO

## H.1 Objetivo do perfil
Gerenciar a própria operação comercial, atender clientes próprios, organizar carteira, automatizar follow-ups e operar como negócio individual.

## H.2 Quem é esse usuário
- corretor independente
- corretor que atua sem equipe fixa
- corretor que deseja CRM próprio

## H.3 Jornada principal
1. Cria ou acessa o workspace próprio
2. Configura seu perfil profissional
3. Importa ou cadastra leads
4. Organiza pipeline pessoal
5. Atende clientes em canais conectados
6. Agenda visitas
7. Mantém follow-up ativo
8. Cria agentes pessoais
9. Acompanha seus resultados e ganhos

## H.4 Funcionalidades detalhadas

### H.4.1 Configuração do workspace próprio
- cadastrar nome comercial
- cadastrar CRECI / dados profissionais
- configurar telefone e e-mail
- configurar marca pessoal
- conectar seus canais
- escolher idioma/timezone

### H.4.2 CRM próprio
- cadastrar leads próprios
- importar leads
- editar leads
- organizar por tags
- gerenciar status
- manter histórico completo
- registrar origem do lead

### H.4.3 Pipeline pessoal
- criar pipeline próprio
- editar etapas
- mover leads
- definir prioridades
- acompanhar valor potencial da carteira

### H.4.4 Imóveis e carteira
- cadastrar imóveis próprios/captados
- organizar imóveis por origem
- associar imóveis a leads
- manter histórico de negociação por imóvel

### H.4.5 Atendimento pessoal
- conectar WhatsApp próprio
- conectar canais disponíveis
- usar inbox unificada
- responder com apoio de IA
- usar templates personalizados

### H.4.6 Agenda e rotina
- agenda pessoal
- visitas
- tarefas
- follow-up automático
- lembretes de retorno

### H.4.7 Propostas e comissão
- criar proposta
- organizar negociação
- acompanhar receita prevista
- acompanhar comissão prevista

### H.4.8 Agentes próprios
- criar agentes pessoais
- usar assistente do corretor
- configurar agente de follow-up
- configurar agente de qualificação
- conectar agentes ao workspace próprio

### H.4.9 Dashboard pessoal
- leads do dia
- oportunidades abertas
- tarefas do dia
- visitas
- propostas abertas
- comissão prevista
- clientes parados
- agentes ativos

---

# BLOCO I — CORRETOR MULTI-VÍNCULO

## I.1 Objetivo do perfil
Operar com um único login e múltiplos contextos, sem misturar dados entre imobiliárias e carteira própria.

## I.2 Quem é esse usuário
- corretor que trabalha com duas ou mais imobiliárias
- corretor que também atua como autônomo

## I.3 Princípio central do perfil
Esse usuário **não deve ter três logins diferentes**. Ele deve ter:
- 1 conta única
- múltiplos vínculos
- múltiplos contextos operacionais

## I.4 Jornada principal
1. Entra com uma única conta
2. Escolhe o contexto de trabalho
3. Opera no contexto selecionado
4. Alterna entre contextos quando necessário
5. Usa visão consolidada pessoal sem quebrar isolamento de dados

## I.5 Contextos possíveis do corretor multi-vínculo
- Imobiliária X
- Imobiliária Y
- Workspace Próprio

## I.6 Funcionalidades detalhadas

### I.6.1 Seletor de contexto
A interface deve permitir:
- visualizar todos os contextos vinculados
- trocar de contexto manualmente
- visualizar o contexto ativo de forma clara
- diferenciar visualmente contexto organizacional e contexto próprio

### I.6.2 Regras ao trocar de contexto
Ao mudar de contexto, o sistema deve atualizar:
- leads visíveis
- imóveis visíveis
- pipeline visível
- tarefas visíveis
- agenda do contexto
- agentes disponíveis
- integrações disponíveis
- permissões disponíveis
- dashboards e métricas

### I.6.3 Visão consolidada opcional do corretor
A plataforma pode oferecer uma visão pessoal consolidada apenas para o corretor, mostrando:
- agenda consolidada
- tarefas consolidadas
- lembretes consolidados
- próximos follow-ups

Sem expor, consolidar ou compartilhar indevidamente dados sensíveis entre contextos empresariais.

### I.6.4 Ownership e privacidade
- Imobiliária X não vê dados da Y
- Imobiliária Y não vê dados do workspace próprio
- workspace próprio não deve expor dados internos da X ou Y
- cada lead, tarefa, visita, proposta e agente deve pertencer a um contexto claro

### I.6.5 Monetização do corretor multi-vínculo
- quando opera na Imobiliária X, o pagante é a X
- quando opera na Imobiliária Y, o pagante é a Y
- quando opera no próprio workspace, ele pode ser cliente pagante

---

# BLOCO J — MÓDULO DE AGENTES INTELIGENTES POR PERFIL

## J.1 Objetivo do módulo no ecossistema
Permitir que diferentes contextos do sistema criem, gerenciem e operem agentes de IA com comportamentos, dados e permissões controladas.

## J.2 Tipos de agentes por contexto

### J.2.1 Agentes organizacionais
Criados pela imobiliária para operar em nome da empresa.
Exemplos:
- agente de atendimento inicial
- agente qualificador
- agente de follow-up
- agente de reativação
- agente de agendamento

### J.2.2 Agentes internos
Criados para ajudar time interno.
Exemplos:
- assistente do corretor
- assistente do gestor
- analista de pipeline

### J.2.3 Agentes pessoais do corretor autônomo
Criados no workspace do corretor.
Exemplos:
- agente de resposta rápida
- agente de organização de follow-up
- agente de qualificação pessoal

## J.3 Quem pode fazer o quê

### Super Admin
- monitorar agentes globalmente
- ver logs globais
- auditar falhas críticas

### Admin da Imobiliária
- criar agentes organizacionais
- definir comportamento
- publicar agentes
- conectar agentes aos canais da empresa
- escolher LLM e integrações
- monitorar desempenho

### Gestor Comercial
- monitorar agentes da equipe
- testar agentes
- sugerir ajustes
- acompanhar taxa de sucesso

### Corretor vinculado
- utilizar agentes liberados pela empresa
- interagir com agentes internos
- não criar agentes da empresa, salvo permissão específica

### Corretor autônomo
- criar agentes do próprio workspace
- monitorar agentes próprios
- configurar LLM e integrações próprias

## J.4 Jornada de criação de agente
1. Acessar o módulo de Agentes
2. Visualizar agentes existentes
3. Criar novo agente
4. Definir informações básicas
5. Definir comportamento
6. Definir prompt base
7. Definir contexto de negócio
8. Definir dados acessíveis
9. Conectar infraestrutura (LLM, n8n, webhook)
10. Conectar canal de atuação
11. Configurar gatilhos
12. Configurar ações permitidas
13. Testar agente
14. Publicar agente
15. Monitorar performance

## J.5 Campos obrigatórios do agente
- nome do agente
- descrição
- tipo de agente
- objetivo principal
- área de atuação
- persona
- tom de voz
- estilo de resposta
- idioma
- instrução principal
- regras de comportamento
- limitações
- dados acessíveis
- provedor de IA
- modelo LLM
- canal principal
- gatilho principal
- ação principal
- status do agente

## J.6 Dados e indicadores do monitoramento
- execuções totais
- conversas iniciadas
- leads qualificados
- tarefas criadas
- mensagens enviadas
- taxa de sucesso
- falhas
- custo estimado por execução
- última atividade

---

# BLOCO K — MATRIZ RESUMIDA DE FUNCIONALIDADES POR PERFIL

## K.1 Super Admin
Acesso global à plataforma, contas, planos, billing, auditoria e governança.

## K.2 Admin da Imobiliária
Acesso total ao contexto da imobiliária, incluindo equipe, leads, imóveis, agentes, automações e integrações.

## K.3 Gestor Comercial
Acesso à operação comercial e desempenho da equipe, com redistribuição e acompanhamento.

## K.4 Corretor vinculado
Acesso operacional à sua carteira, atendimento, visitas, pipeline e propostas, conforme permissão.

## K.5 SDR
Acesso ao atendimento inicial, qualificação e roteamento de leads.

## K.6 Operacional
Acesso à parte documental, pendências e apoio ao fechamento.

## K.7 Proprietário
Acesso limitado ao portal do próprio imóvel.

## K.8 Corretor autônomo
Acesso ao próprio workspace e operação independente.

## K.9 Corretor multi-vínculo
Acesso a múltiplos contextos com troca manual e isolamento total.

---

# BLOCO L — REGRAS DE NEGÓCIO ESSENCIAIS DO ECOSSISTEMA

## L.1 Conta única e múltiplos contextos
Um usuário pode possuir uma conta única com múltiplos vínculos.

## L.2 Isolamento por tenant/contexto
Nenhuma organização pode acessar dados de outra organização.

## L.3 Ownership de registros
Todo registro relevante deve pertencer explicitamente a um contexto.

## L.4 Governança por contexto
As permissões devem ser resolvidas por papel + contexto.

## L.5 Monetização
- organização paga por membros do seu contexto
- corretor paga apenas se tiver workspace próprio

## L.6 Agentes e integrações
Agentes e integrações devem respeitar o contexto de origem.

## L.7 Dashboard contextual
Todo dashboard deve refletir somente os dados do contexto ativo.

## L.8 Consolidação pessoal opcional
Somente o próprio corretor pode ter visão consolidada pessoal, sem violar isolamento organizacional.

---

# BLOCO M — CONCLUSÃO ARQUITETURAL

Este ecossistema não é apenas um CRM.

Ele é um **sistema operacional imobiliário multi-contexto**, capaz de suportar:
- operação empresarial
- operação individual
- corretores multi-vínculo
- automação avançada
- agentes inteligentes
- integrações externas
- múltiplos modelos de monetização

A chave arquitetural do produto está em cinco pilares:

1. núcleo funcional único
2. contexto isolado por tenant/workspace
3. permissões flexíveis por papel e contexto
4. conta única com múltiplos vínculos
5. automação e agentes operando dentro de regras de governança

Com essa base, o produto consegue atender tanto imobiliárias quanto corretores autônomos sem virar dois sistemas diferentes, mantendo consistência, escalabilidade e alto valor percebido.

