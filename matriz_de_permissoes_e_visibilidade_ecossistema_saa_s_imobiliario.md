# Matriz de Permissões e Visibilidade — Ecossistema SaaS Imobiliário

## 1. Objetivo do documento

Este documento define a **matriz de permissões, níveis de acesso, escopo de visibilidade e regras de governança** do ecossistema SaaS imobiliário.

O objetivo é garantir que o sistema suporte:

- múltiplos perfis de usuário
- múltiplos contextos de operação
- conta única com múltiplos vínculos
- isolamento de dados por organização e workspace
- segurança operacional
- escalabilidade arquitetural

Este documento é crítico para:

- arquitetura de banco de dados
- regras de backend
- políticas de acesso
- comportamento das telas
- filtros de dados
- UX contextual

---

## 2. Princípios estruturais

### 2.1 Permissão sempre depende de contexto
Nenhuma permissão deve ser avaliada apenas pelo papel do usuário.

Toda permissão deve considerar:
- usuário
- papel
- contexto ativo
- vínculo do usuário com o contexto
- módulo acessado
- ação desejada
- ownership do registro

### 2.2 Contextos possíveis
Os contextos do sistema são:
- contexto da imobiliária
- contexto de filial/unidade da imobiliária, quando aplicável
- contexto de workspace autônomo
- contexto global da plataforma (super admin)

### 2.3 Isolamento de dados
Registros de um contexto não podem ser acessados por outro contexto, salvo por super admin e somente em fluxos autorizados.

### 2.4 Ownership dos registros
Todo registro relevante deve possuir, no mínimo:
- contexto_id
- tipo_contexto
- organization_id ou workspace_id
- owner_user_id quando aplicável
- assigned_user_id quando aplicável

### 2.5 Visão consolidada pessoal
A visão consolidada pessoal é permitida apenas para o próprio corretor multi-vínculo, e deve consolidar apenas itens operacionais de agenda, tarefas e lembretes, sem vazar dados estratégicos de um contexto para outro.

---

## 3. Perfis cobertos na matriz

1. Super Admin da Plataforma
2. Admin da Imobiliária
3. Gestor Comercial
4. Corretor Vinculado
5. SDR / Pré-atendimento
6. Operacional / Administrativo
7. Proprietário do Imóvel
8. Corretor Autônomo
9. Corretor Multi-vínculo

Observação: o corretor multi-vínculo não é um papel técnico separado. Ele é um usuário com múltiplos vínculos e diferentes papéis em contextos distintos.

---

## 4. Níveis de ação possíveis por recurso

Cada recurso do sistema deve mapear, no mínimo, os seguintes níveis de ação:

- visualizar lista
- visualizar detalhe
- criar
- editar
- excluir
- arquivar/inativar
- atribuir/reatribuir
- aprovar/publicar
- exportar
- comentar/anotar
- executar ação operacional
- configurar
- administrar

---

## 5. Níveis de visibilidade possíveis

### 5.1 Visibilidade global da plataforma
Disponível apenas para super admin.

### 5.2 Visibilidade total da organização
Permite ver todos os registros do contexto da imobiliária.

### 5.3 Visibilidade por unidade/filial
Permite ver apenas registros da unidade vinculada.

### 5.4 Visibilidade por equipe
Permite ver apenas registros da equipe do usuário.

### 5.5 Visibilidade por carteira própria
Permite ver apenas registros atribuídos ao usuário.

### 5.6 Visibilidade por portal limitado
Permite ver apenas informações especificamente compartilhadas, como no caso do proprietário.

---

## 6. Regras gerais por perfil

# 6.1 Super Admin da Plataforma

## Escopo
Global.

## Pode visualizar
- todas as organizações
- todos os workspaces autônomos
- todos os usuários
- todos os planos
- todos os logs críticos
- dados agregados de uso

## Pode criar/editar
- organizações
- planos
- módulos
- permissões base
- políticas globais

## Não deve fazer por padrão
- operar rotina comercial da imobiliária
- interagir em leads como usuário comum

## Casos especiais
Pode impersonar uma conta para suporte controlado, com trilha de auditoria.

---

# 6.2 Admin da Imobiliária

## Escopo
Todo o contexto da imobiliária e, quando aplicável, suas unidades.

## Pode visualizar
- todos os leads da imobiliária
- todos os imóveis da imobiliária
- todas as propostas
- toda a equipe
- todos os dashboards organizacionais
- automações e agentes da empresa
- integrações da empresa

## Pode criar/editar
- usuários da imobiliária
- equipes
- pipelines
- imóveis
- proprietários
- agentes da empresa
- automações da empresa
- integrações da empresa
- regras de distribuição
- SLAs

## Pode excluir/inativar
- usuários internos, conforme política
- imóveis
- automações
- agentes
- integrações

## Pode aprovar/publicar
- agentes da empresa
- automações
- configurações de visibilidade do proprietário

## Restrições
- não pode acessar dados de outra imobiliária
- não pode acessar workspace próprio do corretor fora do contexto da empresa

---

# 6.3 Gestor Comercial

## Escopo
Equipe, carteira e pipeline sob sua gestão.

## Pode visualizar
- leads da equipe
- pipeline da equipe
- visitas da equipe
- propostas da equipe
- performance dos corretores da equipe
- agenda da equipe
- agentes e automações que impactam sua equipe, quando permitido

## Pode criar/editar
- observações em leads
- tarefas
- redistribuições de leads
- ajustes operacionais no pipeline
- prioridades e flags de acompanhamento

## Pode atribuir/reatribuir
- leads entre corretores da equipe
- tarefas dentro da equipe

## Pode exportar
- relatórios da sua equipe, se habilitado

## Restrições
- não administra billing
- não administra integrações globais da empresa, salvo permissão extra
- não vê dados estratégicos fora do escopo da equipe, salvo permissão superior

---

# 6.4 Corretor Vinculado

## Escopo
Carteira própria e recursos liberados pela imobiliária dentro do contexto ativo.

## Pode visualizar
- leads atribuídos a ele
- imóveis permitidos pela imobiliária
- propostas próprias ou vinculadas à sua carteira
- tarefas próprias
- agenda própria
- assistentes/agentes liberados pela empresa

## Pode criar
- tarefas próprias
- visitas
- propostas
- observações em leads próprios

## Pode editar
- dados operacionais dos leads da sua carteira, conforme política
- estágio do pipeline de seus leads
- suas próprias tarefas
- visitas sob sua responsabilidade
- propostas sob sua responsabilidade, quando permitido

## Pode executar
- atender lead
- responder inbox
- agendar visita
- registrar feedback de visita
- mover etapa do pipeline
- registrar perda

## Restrições
- não pode ver leads de outros corretores, salvo permissão específica
- não pode editar regras da empresa
- não pode administrar integrações da empresa
- não pode publicar agentes organizacionais
- não pode ver relatórios globais, salvo visão resumida autorizada

---

# 6.5 SDR / Pré-atendimento

## Escopo
Fila inicial de leads e leads em processo de qualificação.

## Pode visualizar
- leads novos na fila de triagem
- dados básicos do lead
- inbox de entrada inicial
- histórico suficiente para qualificação

## Pode criar
- lead manual
- observação de triagem
- tarefa de encaminhamento

## Pode editar
- campos de qualificação
- temperatura do lead
- prioridade inicial
- corretor atribuído, se permitido

## Pode executar
- conversar com lead
- qualificar lead
- marcar lead como frio, morno ou quente
- encaminhar lead para corretor
- inserir lead em nutrição

## Restrições
- não deve visualizar negociações avançadas sem necessidade
- não deve acessar relatórios financeiros
- não administra integrações
- não publica agentes da empresa

---

# 6.6 Operacional / Administrativo

## Escopo
Processos documentais e suporte ao fechamento.

## Pode visualizar
- propostas em fase operacional
- documentos vinculados
- pendências operacionais
- andamentos de financiamento, quando houver módulo

## Pode criar
- pendências
- registros operacionais
- uploads documentais
- observações internas

## Pode editar
- status documental
- checklist documental
- prazos de pendências

## Pode executar
- aprovar recebimento documental
- sinalizar pendência
- concluir etapa operacional

## Restrições
- não atende lead comercial como padrão
- não vê relatórios estratégicos completos
- não administra equipe
- não publica automações ou agentes

---

# 6.7 Proprietário do Imóvel

## Escopo
Portal limitado ao(s) próprio(s) imóvel(is).

## Pode visualizar
- seus imóveis
- status do imóvel
- quantidade de leads recebidos
- quantidade de visitas
- quantidade de propostas
- feedbacks compartilhados
- mudanças de preço, se a imobiliária compartilhar

## Pode executar
- solicitar contato
- enviar dúvida
- acompanhar atualizações disponibilizadas

## Restrições
- não vê dados pessoais de leads
- não vê equipe interna
- não vê outros imóveis fora da sua carteira
- não vê automações, agentes, integrações ou relatórios estratégicos

---

# 6.8 Corretor Autônomo

## Escopo
Seu próprio workspace.

## Pode visualizar
- todos os leads do workspace próprio
- todos os imóveis próprios do workspace
- todas as propostas do workspace próprio
- agenda própria
- dashboards pessoais
- agentes próprios
- integrações próprias

## Pode criar/editar
- pipeline próprio
- imóveis próprios
- leads próprios
- propostas próprias
- agentes próprios
- automações próprias
- integrações próprias

## Pode executar
- atendimento
- follow-up
- agendamento
- disparo de automações próprias
- monitoramento do consumo do próprio workspace

## Restrições
- não acessa dados internos de imobiliárias às quais não esteja vinculado
- quando estiver num contexto organizacional, deve obedecer à governança do contexto da empresa

---

# 6.9 Corretor Multi-vínculo

## Escopo
Múltiplos contextos, com acesso determinado pelo vínculo ativo.

## Regra principal
As permissões são sempre resolvidas no contexto ativo.

## Em contexto de Imobiliária X
Age como corretor vinculado, gestor ou outro papel que a X tiver concedido.

## Em contexto de Imobiliária Y
Age conforme as permissões concedidas pela Y.

## Em workspace próprio
Age como corretor autônomo.

## Pode visualizar em visão consolidada pessoal
- agenda consolidada
- tarefas consolidadas
- lembretes consolidados
- follow-ups pendentes

## Não pode na visão consolidada
- abrir detalhes estratégicos cruzados
- exportar dados consolidados entre contextos
- ver relatórios gerenciais combinando empresas diferentes

---

## 7. Matriz por módulo

# 7.1 Dashboard

## Super Admin
- ver dashboard global da plataforma
- ver dashboard por organização
- exportar métricas globais

## Admin da Imobiliária
- ver dashboard completo da organização
- filtrar por equipe, unidade, corretor e período
- exportar relatórios permitidos

## Gestor Comercial
- ver dashboard da equipe
- ver KPIs da equipe
- sem acesso automático a billing

## Corretor Vinculado
- ver dashboard pessoal
- não ver indicadores globais da empresa por padrão

## SDR
- ver dashboard de triagem
- foco em leads novos, SLA inicial e fila de atendimento

## Operacional
- ver dashboard operacional/documental

## Proprietário
- não acessa dashboard interno; acessa portal limitado

## Corretor Autônomo
- ver dashboard completo do próprio workspace

---

# 7.2 CRM / Leads

## Super Admin
- ver dados em auditoria/suporte controlado

## Admin da Imobiliária
- CRUD completo no contexto da empresa
- reatribuir leads
- consolidar duplicados
- definir ownership

## Gestor Comercial
- ver e redistribuir leads da equipe
- editar dados operacionais
- sem poder de configuração estrutural total, salvo permissão extra

## Corretor Vinculado
- ver apenas sua carteira, salvo permissão extra
- editar apenas campos permitidos
- criar observações, visitas, tarefas e propostas relacionadas

## SDR
- ver leads em triagem
- editar campos de qualificação
- atribuir/encaminhar

## Operacional
- ver leads apenas quando necessário ao processo documental

## Proprietário
- sem acesso ao CRM

## Corretor Autônomo
- CRUD completo no próprio workspace

---

# 7.3 Atendimento Omnichannel

## Admin da Imobiliária
- ver caixa unificada da empresa
- configurar filas
- configurar roteamento
- acompanhar SLA

## Gestor Comercial
- ver conversas da equipe
- redistribuir atendimento
- acompanhar performance

## Corretor Vinculado
- ver conversas atribuídas a ele
- responder
- usar templates
- usar IA liberada

## SDR
- ver fila de entrada inicial
- responder e qualificar

## Operacional
- acesso apenas se fizer parte do fluxo, por regra específica

## Corretor Autônomo
- ver e gerenciar seus próprios canais conectados

## Proprietário
- sem inbox interna; apenas portal/solicitação limitada, se houver

---

# 7.4 Pipeline Comercial

## Admin da Imobiliária
- criar/editar pipelines
- configurar etapas
- ver todos os negócios da empresa

## Gestor Comercial
- ver pipeline da equipe
- redistribuir
- acompanhar gargalos

## Corretor Vinculado
- ver pipeline pessoal
- mover negócios próprios
- sem editar estrutura do pipeline

## SDR
- acesso apenas à etapa/fila de pré-qualificação, se o desenho da empresa usar pipeline nessa fase

## Corretor Autônomo
- criar e editar pipeline próprio
- ver pipeline completo do seu workspace

---

# 7.5 Gestão de Imóveis

## Admin da Imobiliária
- CRUD completo dos imóveis da empresa
- vincular proprietário e corretor
- ver desempenho do imóvel

## Gestor Comercial
- visualizar imóveis da equipe/empresa conforme escopo
- acompanhar performance comercial dos imóveis

## Corretor Vinculado
- ver imóveis permitidos
- sugerir imóveis a leads
- editar apenas o que a empresa permitir

## SDR
- visualizar imóveis suficientes para qualificação e sugestão inicial, se permitido

## Proprietário
- ver apenas seus próprios imóveis, em portal limitado

## Corretor Autônomo
- CRUD completo dos imóveis próprios do workspace

---

# 7.6 Agenda / Visitas / Tarefas

## Admin da Imobiliária
- ver agenda global
- ver agenda por equipe/corretor
- criar e editar tarefas e visitas

## Gestor Comercial
- ver agenda da equipe
- acompanhar pendências
- redistribuir tarefas quando permitido

## Corretor Vinculado
- ver agenda própria
- criar e editar visitas próprias
- concluir tarefas próprias

## SDR
- agendar visitas preliminares, se permitido
- criar tarefas de encaminhamento

## Operacional
- criar e acompanhar pendências operacionais

## Corretor Autônomo
- agenda completa do próprio workspace
- tarefas e visitas próprias

---

# 7.7 Propostas e Negociação

## Admin da Imobiliária
- ver todas as propostas
- criar/editar propostas
- ver métricas negociais

## Gestor Comercial
- ver propostas da equipe
- acompanhar retorno
- intervir em negociações

## Corretor Vinculado
- criar e editar propostas próprias, conforme política
- registrar contrapropostas

## Operacional
- ver propostas em fase de fechamento/documentação
- atualizar pendências operacionais

## Proprietário
- ver quantidade e status resumido das propostas do próprio imóvel, se a imobiliária decidir compartilhar

## Corretor Autônomo
- CRUD completo das propostas do próprio workspace

---

# 7.8 Gestão de Proprietários

## Admin da Imobiliária
- CRUD completo
- habilitar portal
- definir visibilidade do proprietário

## Gestor Comercial
- visualizar relacionamento com proprietários quando fizer parte de sua operação

## Corretor Vinculado
- visualizar dados do proprietário conforme necessidade e permissão
- não administra portal por padrão

## Operacional
- visualizar e atualizar dados ligados ao processo documental, quando necessário

## Proprietário
- apenas seu portal limitado

## Corretor Autônomo
- gerir proprietários vinculados ao próprio workspace

---

# 7.9 Gestão de Corretores e Equipes

## Admin da Imobiliária
- CRUD de equipe
- definir metas
- definir vínculos
- definir papel do corretor

## Gestor Comercial
- ver desempenho da equipe
- acompanhar metas
- sem gerenciar billing e plano, salvo permissão especial

## Corretor Vinculado
- ver apenas dados pessoais e, opcionalmente, ranking resumido

## Corretor Autônomo
- não possui esse módulo como empresa, salvo expansão futura para mini-equipe

---

# 7.10 Relatórios e Indicadores

## Admin da Imobiliária
- acesso amplo aos relatórios organizacionais
- exportação conforme política

## Gestor Comercial
- relatórios da equipe
- comparativos por corretor e etapa

## Corretor Vinculado
- relatórios pessoais resumidos
- sem relatórios estratégicos globais por padrão

## SDR
- relatórios da fila de triagem e qualificação

## Operacional
- relatórios de pendências/processos operacionais

## Corretor Autônomo
- relatórios completos do próprio workspace

## Proprietário
- sem acesso ao módulo de relatórios internos

---

# 7.11 Automações

## Admin da Imobiliária
- CRUD completo de automações da empresa
- publicar, pausar, editar e monitorar

## Gestor Comercial
- visualizar automações que impactam sua operação
- monitorar logs, se permitido
- sugerir ajustes

## Corretor Vinculado
- utilizar automações da empresa de forma indireta
- sem configurar automações organizacionais por padrão

## Corretor Autônomo
- CRUD completo de automações próprias do workspace

## SDR/Operacional
- apenas usar fluxos já configurados, salvo permissão especial

---

# 7.12 Integrações e Consumo

## Admin da Imobiliária
- conectar integrações da empresa
- ver consumo da empresa
- definir limites
- ver falhas

## Gestor Comercial
- pode ver status operacional, mas não necessariamente editar credenciais

## Corretor Vinculado
- sem acesso às integrações da empresa por padrão

## Corretor Autônomo
- conecta integrações do próprio workspace
- vê consumo próprio

## Super Admin
- vê uso agregado e status global

---

# 7.13 Agentes Inteligentes

## Super Admin
- monitorar agentes em nível global
- auditar falhas críticas

## Admin da Imobiliária
- CRUD completo de agentes organizacionais
- publicar, pausar, duplicar, testar, monitorar

## Gestor Comercial
- monitorar agentes da equipe
- testar e sugerir ajustes, se permitido

## Corretor Vinculado
- usar agentes liberados
- sem criar agentes organizacionais por padrão

## Corretor Autônomo
- CRUD completo de agentes próprios do workspace

## SDR
- utilizar agentes de qualificação disponibilizados

## Proprietário
- sem acesso ao módulo

---

# 7.14 Configurações e Governança

## Super Admin
- governança global

## Admin da Imobiliária
- governança da organização
- usuários, equipes, políticas e permissões locais

## Gestor Comercial
- governança parcial da equipe, sem administrar estrutura-base, salvo permissão adicional

## Demais perfis
- acesso extremamente limitado ou inexistente

---

## 8. Matriz de ownership por entidade

### Lead
Deve ter:
- contexto proprietário
- organization_id ou workspace_id
- owner_user_id opcional
- assigned_user_id opcional
- team_id opcional

### Imóvel
Deve ter:
- contexto proprietário
- organization_id ou workspace_id
- owner_user_id opcional
- assigned_broker_id opcional
- property_owner_id opcional

### Proposta
Deve ter:
- contexto proprietário
- lead_id
- property_id
- assigned_user_id
- created_by_user_id

### Visita
Deve ter:
- contexto proprietário
- lead_id
- property_id
- assigned_user_id

### Tarefa
Deve ter:
- contexto proprietário
- related_entity_type
- related_entity_id
- assigned_user_id
- created_by_user_id

### Agente
Deve ter:
- contexto proprietário
- tipo de agente (organizacional ou pessoal)
- owner_user_id ou organization_id/workspace_id

### Integração
Deve ter:
- contexto proprietário
- tipo de integração
- credencial isolada por contexto

---

## 9. Regras especiais para corretor multi-vínculo

### 9.1 Login
Um único login.

### 9.2 Troca de contexto
Obrigatória e explícita.

### 9.3 Permissões
Resolvidas conforme o contexto ativo.

### 9.4 Visualização consolidada
Permitida apenas para agenda/tarefas/lembretes pessoais, sem cruzar dados estratégicos sensíveis.

### 9.5 Exportação
Não permitir exportação consolidada cruzando contextos empresariais diferentes.

### 9.6 Agentes
Agentes da Imobiliária X não podem agir no contexto da Y.
Agentes do workspace próprio não podem operar sobre dados da X ou Y sem integração autorizada e claramente isolada.

---

## 10. Regras de monetização relacionadas à permissão

### 10.1 Imobiliária paga por membros do seu contexto
Se um corretor é membro da Imobiliária X, o acesso dele naquele contexto é financiado pela X.

### 10.2 Corretor autônomo paga apenas pelo próprio workspace
Se o corretor tem operação própria, ele pode contratar plano do seu workspace autônomo.

### 10.3 Um mesmo usuário pode ter acesso pago por múltiplas fontes
Exemplo:
- X paga o contexto X
- Y paga o contexto Y
- o corretor paga o contexto próprio

A autenticação é única, mas a cobrança é por vínculo/contexto.

---

## 11. Requisitos arquiteturais derivados da matriz

A implementação deve suportar:

- RBAC por contexto
- vinculação múltipla por usuário
- tenant isolation
- ownership por entidade
- filtros automáticos por contexto ativo
- trilha de auditoria
- impersonação controlada para suporte
- feature flags por plano
- restrição por módulo e por ação

---

## 12. Conclusão

A matriz de permissões e visibilidade do ecossistema SaaS imobiliário é o componente que impede o produto de virar uma bagunça operacional.

A regra central é simples:

**o sistema é único, mas o acesso é sempre contextual, governado e isolado.**

Com isso, a plataforma consegue suportar:
- imobiliárias completas
- corretores internos
- corretores autônomos
- corretores multi-vínculo
- agentes inteligentes por contexto
- monetização híbrida

sem comprometer segurança, governança, experiência do usuário e escalabilidade.

