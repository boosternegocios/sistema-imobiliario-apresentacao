# Mapa de Telas e Navegação — Ecossistema SaaS Imobiliário

## 1. Objetivo do documento

Este documento define o **mapa completo de telas, estrutura de navegação, comportamento das rotas, hierarquia de interface, tipos de abertura de conteúdo e fluxo de uso** do ecossistema SaaS imobiliário.

Ele foi criado para servir como base de prototipação e construção em ferramentas de IA como Google Stitch, evitando:

- duplicidade de páginas
- rotas desnecessárias
- sobreposição de funcionalidades
- dashboards redundantes
- fluxos confusos
- navegação quebrada
- inconsistência entre perfis

O documento segue princípios de **UX moderna, arquitetura de informação, navegação contextual, produtividade operacional e escalabilidade visual**.

---

## 2. Princípios de UX e Arquitetura de Navegação

### 2.1 Um sistema, múltiplos contextos
A plataforma deve operar como um único sistema com múltiplos contextos de uso.

Isso significa que:
- não devem existir sistemas separados para imobiliária e corretor
- não devem existir telas duplicadas sem necessidade
- a mesma tela pode assumir comportamentos diferentes conforme perfil e contexto

### 2.2 Priorizar reaproveitamento de tela
Antes de criar uma nova página, avaliar se o comportamento pode ser resolvido por:
- filtro de contexto
- permissão de visualização
- exibição condicional de blocos
- aba interna
- drawer lateral
- modal

### 2.3 Páginas macro, não microfragmentadas
O sistema deve evitar excesso de páginas específicas para pequenas ações.

Exemplo correto:
- uma tela de Leads com lista + filtros + drawer de detalhe

Exemplo incorreto:
- uma página para listar leads
- outra para detalhe do lead
- outra para editar lead
- outra para histórico do lead

Quando possível, a UX deve centralizar a operação.

### 2.4 Contexto ativo sempre visível
A interface deve sempre informar claramente:
- em qual contexto o usuário está operando
- qual perfil ele está usando naquele contexto
- quais dados pertencem àquele contexto

### 2.5 Navegação orientada à rotina
A navegação deve priorizar frequência de uso.

Os módulos mais operacionais devem ficar mais acessíveis:
- Dashboard
- Leads
- Atendimento
- Pipeline
- Imóveis
- Agenda
- Propostas

### 2.6 Estrutura moderna e intuitiva
Padrão recomendado:
- sidebar principal fixa e colapsável
- topbar contextual
- área central dinâmica
- drawers para detalhes rápidos
- modais para ações rápidas
- tabs internas para organização de dados complexos

---

## 3. Estrutura global de navegação

## 3.1 Navegação primária (sidebar)
A sidebar principal deve conter os seguintes itens:

1. Dashboard
2. Leads / CRM
3. Atendimento
4. Pipeline
5. Imóveis
6. Agenda
7. Propostas
8. Proprietários
9. Corretores e Equipes
10. Relatórios
11. Automações
12. Agentes Inteligentes
13. Integrações e Consumo
14. Configurações

### Observações de UX
- a sidebar deve destacar o item ativo
- deve poder ser colapsada
- deve respeitar permissão por contexto
- itens indisponíveis não devem aparecer ou devem aparecer bloqueados, conforme estratégia do produto

## 3.2 Navegação secundária
Alguns módulos devem ter navegação secundária em formato de abas ou submenus.

Exemplo:

### Agentes Inteligentes
- Central de Agentes
- Criar Agente
- Biblioteca de Agentes
- Monitoramento
- Logs

### Integrações e Consumo
- Visão Geral
- IA
- Canais
- Automações Externas
- Webhooks
- Limites
- Logs

### Configurações
- Organização
- Usuários
- Equipes
- Papéis e Permissões
- Pipeline
- Tags e Motivos de Perda
- Canais
- Branding

## 3.3 Topbar global
A topbar deve conter:
- nome/título da tela
- subtítulo contextual
- seletor de contexto
- busca global
- ações rápidas
- notificações
- avatar/menu do usuário

### Seletor de contexto
Elemento obrigatório para usuários multi-vínculo.

Deve permitir alternar entre:
- Imobiliária X
- Imobiliária Y
- Workspace Próprio

---

## 4. Tipos de telas e padrões de abertura

A IA deve obedecer aos seguintes padrões para evitar rotas desnecessárias.

### 4.1 Página completa
Usar quando:
- a área for um módulo principal
- houver necessidade de visão ampla
- houver alto volume de dados
- houver filtros, relatórios, kanban, agenda ou listagens importantes

### 4.2 Drawer lateral
Usar quando:
- precisar abrir detalhe de um item sem sair da listagem
- for útil manter contexto visual da tela atual
- a ação for rápida e frequente

Exemplos:
- detalhe do lead
- detalhe da conversa
- detalhe da proposta
- detalhe do imóvel

### 4.3 Modal
Usar quando:
- a ação for curta
- exigir confirmação
- envolver formulários pequenos
- não precisar navegação longa

Exemplos:
- confirmar exclusão
- criar tag
- criar tarefa rápida
- duplicar agente

### 4.4 Tabs internas
Usar quando:
- a entidade for complexa
- o usuário precisar organizar o conteúdo por categorias

Exemplo:
Ficha do Lead:
- resumo
- histórico
- tarefas
- visitas
- propostas
- imóveis sugeridos

### 4.5 Stepper / Wizard
Usar quando:
- o processo tiver múltiplas etapas
- precisar guiar o usuário com clareza

Exemplos:
- criação de agente
- onboarding da imobiliária
- configuração de integração externa

---

## 5. Mapa de telas por módulo

# 5.1 DASHBOARD

## 5.1.1 Tela: Dashboard Principal
### Tipo
Página principal

### Objetivo
Entregar visão geral contextual da operação.

### Perfis que acessam
- Super Admin
- Admin da Imobiliária
- Gestor Comercial
- Corretor Vinculado
- Corretor Autônomo
- SDR
- Operacional

### Regra de UX
Deve ser **a mesma tela-base**, com widgets variando por perfil e contexto.

### Não criar
- dashboard_admin separado
- dashboard_gestor separado
- dashboard_corretor separado

### Criar
- 1 Dashboard Principal com blocos condicionais

### Componentes principais
- cards KPI
- listas de atenção
- gráficos
- tarefas críticas
- ranking
- atalhos rápidos

### Widgets possíveis por perfil
#### Admin
- leads do dia
- leads sem resposta
- tempo médio de resposta
- visitas do período
- propostas em aberto
- pipeline financeiro
- ranking de corretores
- imóveis parados
- agentes ativos
- falhas de integração

#### Gestor
- leads da equipe
- SLA vencido
- pipeline da equipe
- corretor com lead parado
- visitas da equipe

#### Corretor
- meus leads quentes
- tarefas do dia
- visitas de hoje
- propostas pendentes
- follow-ups atrasados

#### SDR
- fila de novos leads
- leads sem triagem
- tempo médio até qualificação

#### Operacional
- pendências documentais
- propostas em fase operacional
- itens aguardando documento

### Ações principais da tela
- abrir lead
- abrir agenda
- abrir pipeline
- ver detalhes de indicadores

### Navegação de saída
- Dashboard → Leads
- Dashboard → Atendimento
- Dashboard → Agenda
- Dashboard → Pipeline
- Dashboard → Propostas

---

# 5.2 LEADS / CRM

## 5.2.1 Tela: Lista de Leads
### Tipo
Página principal

### Objetivo
Centralizar a carteira de leads do contexto ativo.

### Perfis
- Admin
- Gestor
- Corretor
- SDR
- Corretor Autônomo
- Operacional (visão limitada)

### Componentes principais
- barra de busca
- filtros avançados
- chips de segmentação
- tabela ou lista inteligente
- ações em massa
- botão criar lead

### Filtros
- nome
- origem
- corretor responsável
- etapa
- prioridade
- temperatura
- bairro
- faixa de valor
- tipo de imóvel
- data de entrada

### Colunas sugeridas
- nome do lead
- telefone
- origem
- corretor
- etapa
- temperatura
- última interação
- próxima ação
- SLA

### Ações na linha
- abrir detalhe
- editar
- criar tarefa
- mudar etapa
- marcar perdido
- reatribuir

### Navegação
- clique no lead abre **Drawer de Ficha do Lead**
- criar lead abre **Modal** ou **Drawer de Criação Rápida**, com botão para tela completa se necessário

---

## 5.2.2 Tela: Ficha do Lead
### Tipo
Drawer lateral de detalhe

### Objetivo
Permitir operação completa do lead sem sair da listagem.

### Estrutura interna
Tabs:
- Resumo
- Histórico
- Tarefas
- Visitas
- Propostas
- Imóveis sugeridos
- IA / Insights

### Conteúdo da aba Resumo
- dados principais
- corretor responsável
- etapa atual
- origem
- prioridade
- temperatura
- score
- interesse
- faixa de valor
- bairros de interesse
- necessidade de financiamento

### Ações principais dentro da ficha
- enviar mensagem
- agendar visita
- criar tarefa
- mover etapa
- registrar proposta
- marcar como perdido
- ver histórico completo

### Regra de UX
A ficha do lead deve ser operacional e rica em contexto.

### Quando abrir página completa
Somente se houver necessidade de edição avançada ou fluxo profundo.

---

## 5.2.3 Tela: Importação de Leads
### Tipo
Página secundária

### Objetivo
Permitir importação em lote.

### Componentes
- upload CSV
- mapeamento de campos
- prévia da importação
- validação
- confirmação

---

# 5.3 ATENDIMENTO OMNICHANNEL

## 5.3.1 Tela: Inbox Unificada
### Tipo
Página principal

### Objetivo
Centralizar atendimento multicanal.

### Estrutura visual
3 colunas:

#### Coluna 1 — Lista de conversas
- nome
- canal
- prioridade
- status
- tempo sem resposta
- corretor responsável

#### Coluna 2 — Conversa
- histórico de mensagens
- campo de resposta
- anexos
- templates
- sugestões de IA

#### Coluna 3 — Contexto do lead
- lead associado
- imóvel de interesse
- etapa
- tarefas pendentes
- resumo de IA

### Perfis
- Admin
- Gestor
- Corretor
- SDR
- Corretor Autônomo

### Navegação
- lista de conversa atualiza o centro
- botão no lead abre drawer de ficha do lead
- botão criar tarefa abre modal
- botão agendar visita abre modal/drawer rápido

### Não criar
- página separada de detalhe da conversa
- página separada só para lead da conversa

Tudo deve operar na mesma tela.

---

# 5.4 PIPELINE

## 5.4.1 Tela: Pipeline Comercial
### Tipo
Página principal

### Objetivo
Visualizar e operar o funil de vendas.

### Modos de visualização
- Kanban
- Lista

### Componentes principais
- seletor de pipeline
- filtros
- cards por etapa
- indicadores por coluna
- valor acumulado por etapa

### Dados do card
- nome do lead
- corretor
- valor potencial
- imóvel de interesse
- tempo na etapa
- próxima ação
- prioridade

### Ações do card
- arrastar para etapa
- abrir detalhe
- criar tarefa
- registrar proposta

### Navegação
- clique no card abre **Drawer de Oportunidade**
- detalhe profundo opcional em página se necessário

---

## 5.4.2 Tela: Drawer de Oportunidade
### Tipo
Drawer lateral

### Objetivo
Exibir o detalhe da oportunidade no pipeline.

### Tabs
- Resumo
- Histórico
- Tarefas
- Visitas
- Propostas
- IA / Insights

---

# 5.5 IMÓVEIS

## 5.5.1 Tela: Lista de Imóveis
### Tipo
Página principal

### Objetivo
Gerenciar o estoque de imóveis do contexto ativo.

### Modos de visualização
- cards
- tabela

### Filtros
- tipo
- finalidade
- cidade
- bairro
- faixa de valor
- corretor responsável
- status
- proprietário

### Conteúdo do card
- foto principal
- código
- tipo
- finalidade
- bairro/cidade
- valor
- status
- leads
- visitas
- propostas

### Ações
- abrir detalhe
- editar
- alterar status
- ver leads vinculados

---

## 5.5.2 Tela: Ficha do Imóvel
### Tipo
Drawer lateral ou página detalhada

### Regra de UX
Abrir em **drawer** para acesso rápido.
Abrir em **página completa** apenas para edição avançada.

### Tabs
- Resumo
- Galeria
- Características
- Leads
- Visitas
- Propostas
- Proprietário
- Histórico de preço
- Documentos

### Ações
- editar imóvel
- sugerir a lead
- alterar status
- ver desempenho comercial

---

## 5.5.3 Tela: Cadastro / Edição de Imóvel
### Tipo
Página completa

### Objetivo
Cadastrar ou editar imóvel com formulário estruturado.

### Estrutura em seções
- Dados principais
- Endereço
- Características
- Valores
- Mídia
- Proprietário
- Status comercial
- Documentos

### Regra de UX
Não usar formulário único gigante. Usar stepper ou seções expansíveis.

---

# 5.6 AGENDA / VISITAS / TAREFAS

## 5.6.1 Tela: Agenda Principal
### Tipo
Página principal

### Objetivo
Organizar rotina operacional.

### Modos de visualização
- dia
- semana
- mês
- lista

### Componentes
- calendário
- filtros por usuário/equipe
- bloco de visitas
- bloco de tarefas
- lembretes críticos

### Perfis
- Admin
- Gestor
- Corretor
- SDR
- Operacional
- Corretor Autônomo

---

## 5.6.2 Tela: Drawer de Visita
### Tipo
Drawer lateral

### Objetivo
Exibir e editar uma visita.

### Conteúdo
- lead
- imóvel
- data/hora
- status
- responsável
- observações
- resultado da visita

### Ações
- confirmar
- reagendar
- cancelar
- registrar feedback
- criar tarefa pós-visita

---

## 5.6.3 Tela: Modal de Tarefa Rápida
### Tipo
Modal

### Objetivo
Criar tarefa sem sair da tela atual.

### Campos
- título
- descrição
- prazo
- responsável
- entidade relacionada
- prioridade

---

# 5.7 PROPOSTAS

## 5.7.1 Tela: Lista de Propostas
### Tipo
Página principal

### Objetivo
Centralizar o acompanhamento das negociações.

### Filtros
- status
- corretor
- imóvel
- data
- valor

### Colunas
- lead
- imóvel
- corretor
- valor ofertado
- forma de pagamento
- status
- última atualização
- próxima ação

### Ações
- abrir proposta
- editar
- registrar contraproposta
- marcar aceite/recusa

---

## 5.7.2 Tela: Drawer de Proposta
### Tipo
Drawer lateral

### Tabs
- Resumo
- Histórico da negociação
- Contrapropostas
- Documentos
- Pendências

### Ações
- editar status
- anexar documento
- criar pendência
- registrar aceite
- registrar recusa

---

# 5.8 PROPRIETÁRIOS

## 5.8.1 Tela: Lista de Proprietários
### Tipo
Página principal

### Objetivo
Gerenciar relacionamento com proprietários.

### Colunas / Cards
- nome
- contato
- quantidade de imóveis
- imóveis ativos
- últimas interações

### Ações
- abrir ficha
- editar
- habilitar portal

---

## 5.8.2 Tela: Ficha do Proprietário
### Tipo
Drawer lateral

### Tabs
- Dados gerais
- Imóveis
- Histórico
- Propostas
- Configuração de portal

---

## 5.8.3 Tela: Portal do Proprietário
### Tipo
Área externa / página separada de acesso limitado

### Objetivo
Exibir informações limitadas do(s) imóvel(is) do proprietário.

### Estrutura
- visão dos imóveis
- status
- leads recebidos
- visitas
- propostas
- feedbacks compartilhados

### Regra de UX
Não misturar com área administrativa interna.
É um ambiente separado e simplificado.

---

# 5.9 CORRETORES E EQUIPES

## 5.9.1 Tela: Gestão de Corretores
### Tipo
Página principal

### Objetivo
Permitir acompanhamento da equipe.

### Colunas
- nome
- equipe
- leads ativos
- tempo médio de resposta
- visitas
- propostas
- conversão

### Ações
- abrir perfil
- editar vínculo
- alterar equipe
- ativar/inativar

---

## 5.9.2 Tela: Perfil do Corretor
### Tipo
Drawer lateral ou página detalhada

### Tabs
- Resumo
- Leads
- Visitas
- Propostas
- Metas
- Atividade
- Contextos vinculados (quando multi-vínculo)

---

## 5.9.3 Tela: Gestão de Equipes
### Tipo
Página secundária

### Objetivo
Organizar equipes comerciais.

### Componentes
- lista de equipes
- gestor responsável
- membros
- metas

---

# 5.10 RELATÓRIOS

## 5.10.1 Tela: Central de Relatórios
### Tipo
Página principal

### Objetivo
Concentrar relatórios estratégicos e operacionais.

### Estrutura
- menu lateral de categorias
- área principal com relatório ativo
- filtros superiores

### Categorias
- Leads
- Atendimento
- Pipeline
- Imóveis
- Corretores
- Propostas
- Agentes
- Integrações

### Regra de UX
Não criar uma página separada para cada microrelatório sem necessidade.
Preferir uma central com relatórios em tabs/categorias.

---

# 5.11 AUTOMAÇÕES

## 5.11.1 Tela: Central de Automações
### Tipo
Página principal

### Objetivo
Listar e gerenciar automações.

### Colunas / Cards
- nome
- gatilho
- ação
- status
- contexto
- última execução
- falhas

### Ações
- criar automação
- editar
- ativar/desativar
- duplicar
- abrir log

---

## 5.11.2 Tela: Criar Automação
### Tipo
Wizard / stepper

### Etapas
1. Informações básicas
2. Gatilho
3. Condições
4. Ações
5. Integrações
6. Teste
7. Publicação

### Regra de UX
Usar wizard. Não jogar tudo numa tela só.

---

# 5.12 AGENTES INTELIGENTES

## 5.12.1 Tela: Central de Agentes
### Tipo
Página principal

### Objetivo
Listar todos os agentes do contexto ativo.

### Colunas / Cards
- nome do agente
- tipo
- objetivo
- canal
- modelo LLM
- status
- execuções
- última atividade
- taxa de sucesso

### Ações
- criar
- editar
- duplicar
- ativar/desativar
- excluir
- abrir logs

---

## 5.12.2 Tela: Criar Agente
### Tipo
Wizard / stepper

### Etapas obrigatórias
1. Informações Básicas
2. Comportamento
3. Prompt Base
4. Contexto de Negócio
5. Dados Acessíveis
6. Infraestrutura e LLM
7. Conexão com Canais
8. Gatilhos
9. Ações Permitidas
10. Teste
11. Publicação

### Regra de UX
Não criar páginas separadas por etapa. Usar wizard único, progressivo e muito claro.

---

## 5.12.3 Tela: Monitoramento de Agentes
### Tipo
Página secundária

### Objetivo
Acompanhar desempenho e falhas.

### Componentes
- execuções por período
- taxa de sucesso
- erros
- custo estimado
- conversas iniciadas
- ações executadas

---

## 5.12.4 Tela: Biblioteca de Agentes
### Tipo
Página secundária

### Objetivo
Oferecer templates prontos.

### Estrutura
- cards por template
- preview do objetivo
- botão usar template

---

# 5.13 INTEGRAÇÕES E CONSUMO

## 5.13.1 Tela: Visão Geral de Integrações
### Tipo
Página principal

### Objetivo
Concentrar integrações e consumo externo.

### Componentes
- cards de integração
- status
- consumo atual
- alertas
- falhas

### Categorias
- IA
- Canais
- Webhooks
- Automações externas
- E-mail
- Logs

---

## 5.13.2 Tela: Configuração de Integração
### Tipo
Drawer ou wizard, dependendo da complexidade

### Regra
- integrações simples: drawer
- integrações complexas: wizard

### Exemplo complexa
Conectar provedor LLM ou n8n

---

## 5.13.3 Tela: Logs de Integração
### Tipo
Página secundária

### Objetivo
Visualizar falhas, execuções, consumo e status.

---

# 5.14 CONFIGURAÇÕES

## 5.14.1 Tela: Configurações Gerais
### Tipo
Página principal com navegação em abas laterais

### Abas internas
- Organização
- Usuários
- Equipes
- Papéis e Permissões
- Pipelines
- Tags e Motivos de Perda
- Canais
- Branding
- Billing (quando aplicável)

### Regra de UX
Tudo dentro de um hub de configurações, evitando uma rota separada para cada microconfiguração, salvo em casos muito complexos.

---

## 5.14.2 Tela: Usuários e Permissões
### Tipo
Subtela dentro de Configurações

### Objetivo
Gerenciar usuários, papéis e vínculos.

### Ações
- convidar usuário
- editar papel
- editar visibilidade
- ativar/inativar
- associar equipe
- gerenciar vínculo multi-contexto

---

# 5.15 ONBOARDING

## 5.15.1 Tela: Onboarding da Imobiliária
### Tipo
Wizard / fluxo guiado

### Etapas
1. Dados da empresa
2. Identidade visual
3. Equipe inicial
4. Pipeline inicial
5. Canais
6. Integrações
7. Resumo final

---

## 5.15.2 Tela: Onboarding do Corretor Autônomo
### Tipo
Wizard / fluxo guiado

### Etapas
1. Dados profissionais
2. Branding pessoal
3. Pipeline pessoal
4. Canais
5. Integrações
6. Primeiro agente opcional
7. Resumo final

---

## 5.15.3 Tela: Seleção de Contexto Inicial
### Tipo
Página leve de entrada

### Objetivo
Se o usuário tiver múltiplos vínculos, permitir escolha do contexto inicial ao entrar.

---

## 6. Fluxos críticos de navegação

# 6.1 Fluxo de operação do corretor
1. entra no Dashboard
2. abre lead prioritário
3. responde na Inbox
4. agenda visita
5. atualiza pipeline
6. registra proposta

# 6.2 Fluxo do gestor
1. entra no Dashboard
2. verifica SLA vencido
3. abre Leads
4. redistribui lead
5. acompanha Pipeline
6. monitora equipe

# 6.3 Fluxo do admin
1. entra no Dashboard
2. acompanha indicadores
3. entra em Configurações
4. ajusta equipe ou automação
5. monitora integrações
6. acompanha relatórios

# 6.4 Fluxo de criação de agente
1. Central de Agentes
2. Criar Agente
3. preencher wizard
4. testar agente
5. publicar
6. monitorar

# 6.5 Fluxo de lead novo
1. lead entra por canal
2. aparece em Inbox ou fila SDR
3. SDR/corretor qualifica
4. lead entra no pipeline
5. corretor opera pela ficha do lead

---

## 7. Regras para evitar duplicidade de páginas

### 7.1 Não duplicar dashboards por perfil
Usar mesma tela-base com widgets condicionais.

### 7.2 Não duplicar ficha de lead
Usar uma ficha-base com tabs e permissões condicionais.

### 7.3 Não duplicar inbox por canal
Usar uma inbox única multicanal com filtros.

### 7.4 Não duplicar pipeline por perfil
Usar um pipeline-base com recorte contextual.

### 7.5 Não duplicar central de agentes por tipo
Usar uma central única com filtros por tipo/contexto.

### 7.6 Não duplicar integrações por provedor
Usar uma central única com conectores específicos.

---

## 8. Estados de tela obrigatórios

Cada tela principal deve prever:
- loading
- vazio sem dados
- vazio com CTA
- erro
- sucesso
- sem permissão
- sem resultados no filtro

Exemplo:
Lista de Leads sem dados deve mostrar:
- mensagem clara
- CTA para criar/importar lead

---

## 9. Busca global

## 9.1 Tela/Comportamento: Busca Global Universal
### Tipo
Componente de topbar com overlay/dropdown expansível

### Objetivo
Permitir busca rápida por:
- leads
- imóveis
- proprietários
- propostas
- tarefas
- usuários
- agentes

### Navegação
Clicar no resultado leva ao drawer ou página correspondente.

---

## 10. Conclusão

Este mapa de telas e navegação foi desenhado para garantir que o ecossistema SaaS imobiliário seja:

- intuitivo
- moderno
- produtivo
- contextual
- escalável
- sem duplicidade de páginas
- coerente entre perfis

A regra central da arquitetura de navegação é:

**reaproveitar estruturas, variar por contexto e abrir o detalhe sem quebrar a rotina operacional.**

Com isso, o Google Stitch ou qualquer ferramenta de IA terá uma direção muito mais precisa para criar o protótipo sem bagunçar o sistema.

