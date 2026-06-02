# Documento de Prototipação e UX — Ecossistema SaaS Imobiliário

## 1. Objetivo do documento

Este documento define a **direção completa de prototipação, UX, arquitetura de interface, comportamento das telas, hierarquia visual, densidade de informação, padrões de interação e regras de experiência** do Ecossistema SaaS Imobiliário.

Ele deve orientar ferramentas de IA, designers e times de produto a construir o sistema com alto nível de qualidade, evitando:

- telas duplicadas ou fragmentadas sem necessidade
- interfaces genéricas de CRM
- dashboards confusos
- navegação quebrada
- excesso de cliques
- hierarquia visual fraca
- fluxos cansativos
- inconsistência entre perfis e contextos

Este documento complementa:

- **Ecossistema SaaS Imobiliário — Jornadas e Funcionalidades por Usuário**
- **Matriz de Permissões e Visibilidade — Ecossistema SaaS Imobiliário**
- **Mapa de Telas e Navegação — Ecossistema SaaS Imobiliário**

O foco aqui não é listar módulos, e sim definir **como o sistema deve ser percebido, usado e vivido**.

---

## 2. Visão de experiência do produto

### 2.1 O que este produto precisa parecer
O sistema deve parecer:

- um SaaS premium B2B
- moderno e confiável
- operacional e inteligente
- robusto sem ser pesado
- profissional sem parecer burocrático
- específico para o mercado imobiliário
- forte o suficiente para empresas
- simples o suficiente para corretores usarem todos os dias

### 2.2 O que este produto não pode parecer
O sistema não pode parecer:

- ERP antigo
- CRM genérico adaptado para imobiliária
- painel administrativo frio e técnico demais
- software bagunçado com muitas páginas parecidas
- ferramenta inchada e difícil de usar
- produto bonito, porém improdutivo

### 2.3 Sensação desejada ao usar
Ao entrar no sistema, o usuário deve sentir:

- clareza
- controle
- velocidade
- organização
- confiança
- inteligência
- prioridade bem definida

O sistema deve transmitir a sensação de:

**“eu sei exatamente o que preciso fazer aqui.”**

---

## 3. Objetivos centrais de UX

### 3.1 Reduzir fricção operacional
O sistema deve minimizar:
- troca desnecessária de tela
- formulários gigantes
- menus excessivos
- rotas quebradas
- dificuldade de achar informação

### 3.2 Aumentar velocidade de execução
A UX precisa favorecer:
- resposta rápida a leads
- atualização rápida de status
- agendamento rápido de visita
- acompanhamento rápido de propostas
- leitura rápida de dashboards
- tomada de decisão rápida

### 3.3 Preservar contexto
O usuário não deve perder o fio da meada quando abrir um detalhe.
Por isso, sempre que possível, usar:
- drawer lateral
- modal contextual
- preview rápido
- tabs internas

### 3.4 Priorizar ação e não só visual bonito
A estética importa, mas a prioridade é produtividade.
Cada tela deve facilitar trabalho real.

### 3.5 Diferenciar contexto sem criar bagunça
O sistema deve mudar conforme contexto e perfil, mas mantendo a mesma base estrutural.

---

## 4. Princípios avançados de UX do ecossistema

### 4.1 Um sistema único, múltiplos contextos
O mesmo produto deve servir:
- imobiliárias
- gestores
- corretores vinculados
- corretores autônomos
- usuários multi-vínculo

A experiência deve mudar por contexto e permissão, não por duplicação de produto.

### 4.2 Contexto ativo sempre explícito
O usuário precisa saber o tempo todo:
- em qual contexto está operando
- qual papel está exercendo naquele contexto
- que dados pertencem àquele contexto

### 4.3 A mesma entidade precisa ter comportamento consistente
Exemplo:
- lead é sempre lead
- imóvel é sempre imóvel
- proposta é sempre proposta

O que muda é:
- a permissão
- a profundidade dos dados
- as ações disponíveis

### 4.4 Preferir profundidade contextual à navegação excessiva
Melhor abrir um drawer rico do que jogar o usuário em 4 páginas diferentes.

### 4.5 A informação deve vir em camadas
Cada tela deve ter camadas de entendimento:
- camada 1: visão rápida
- camada 2: detalhe operacional
- camada 3: análise profunda

### 4.6 O sistema deve ser escaneável
O usuário precisa bater o olho e entender:
- o que é importante
- o que está travado
- o que precisa de ação
- o que é urgente

### 4.7 O sistema deve ser orientado a prioridade
A UX precisa deixar óbvio:
- leads sem resposta
- tarefas vencidas
- visitas de hoje
- propostas sem retorno
- integrações com falha
- agentes com erro

### 4.8 O sistema deve ter memória operacional
Sempre que possível, a interface deve exibir:
- última ação
- próximo passo
- tempo sem movimentação
- histórico resumido
- contexto anterior

---

## 5. Perfis de usuário e foco de experiência

## 5.1 Super Admin da Plataforma
### Foco de UX
- supervisão global
- governança
- auditoria
- clareza de conta e billing
- visão macro

A experiência desse perfil deve ser mais analítica e administrativa.

## 5.2 Admin da Imobiliária
### Foco de UX
- visão da operação
- controle da equipe
- acompanhamento de resultados
- configurações e integração

Esse perfil precisa sentir que tem um centro de comando.

## 5.3 Gestor Comercial
### Foco de UX
- produtividade da equipe
- leads esquecidos
- gargalos
- redistribuição
- monitoramento tático

## 5.4 Corretor Vinculado
### Foco de UX
- rapidez
- clareza
- leads do dia
- tarefas
- agenda
- atendimento
- próximo passo da venda

## 5.5 SDR / Pré-atendimento
### Foco de UX
- triagem rápida
- fila organizada
- perguntas guiadas
- roteamento eficiente

## 5.6 Operacional / Administrativo
### Foco de UX
- checklists
- organização documental
- pendências
- rastreabilidade

## 5.7 Proprietário
### Foco de UX
- simplicidade
- transparência
- leitura fácil
- ambiente limpo e institucional

## 5.8 Corretor Autônomo
### Foco de UX
- autonomia
- organização pessoal
- produtividade
- CRM pessoal poderoso
- controle da própria carteira

## 5.9 Corretor Multi-vínculo
### Foco de UX
- clareza de contexto
- troca simples de ambiente
- isolamento de dados
- agenda consolidada sem confusão

---

## 6. Arquitetura visual da experiência

### 6.1 Estrutura-base de layout
A interface deve seguir a estrutura:

- **Sidebar fixa e colapsável**
- **Topbar contextual**
- **Área principal de conteúdo**
- **Drawers laterais para detalhe**
- **Modais para ações curtas**
- **Tabs para organização interna de entidades complexas**

### 6.2 Sidebar
Deve ser:
- estável
- clara
- colapsável
- orientada aos módulos principais
- consistente entre contextos

### 6.3 Topbar
Deve conter:
- título da tela
- subtítulo contextual
- seletor de contexto
- busca global
- ações rápidas
- notificações
- usuário atual

### 6.4 Área principal
Deve priorizar:
- leitura rápida
- foco na tarefa principal
- hierarquia clara
- boa densidade visual

### 6.5 Painéis laterais
Usar para:
- detalhe de lead
- detalhe de imóvel
- detalhe de proposta
- detalhe de visita
- detalhe de corretor
- detalhe de proprietário

### 6.6 Modais
Usar apenas para:
- confirmações
- criação rápida
- edição curta
- ações simples

### 6.7 Wizards / steppers
Usar para:
- onboarding
- criação de agente
- criação de automação
- integração complexa

---

## 7. Direção visual de última geração

### 7.1 Linguagem visual
A linguagem visual precisa ser:
- clean
- refinada
- corporativa moderna
- tecnológica
- profissional
- modular

### 7.2 Densidade visual ideal
O produto não deve ser minimalista vazio, nem denso demais.

A densidade ideal é:
- média a média-alta
- com forte organização visual
- com respiro suficiente
- com boa escaneabilidade

### 7.3 Superfícies
- cards bem definidos
- separação clara entre blocos
- hierarquia por contraste sutil
- sombras leves
- bordas modernas

### 7.4 Tipografia
A interface deve ter hierarquia tipográfica forte:
- títulos evidentes
- subtítulos claros
- labels discretos
- valores e métricas destacados
- textos auxiliares compactos e úteis

### 7.5 Ícones
Ícones devem:
- reforçar entendimento
- ser consistentes
- ser discretos
- nunca competir com o conteúdo principal

### 7.6 Cor como sistema de sinalização
A cor deve comunicar:
- prioridade
- erro
- sucesso
- alerta
- status
- temperatura do lead
- estado de integração

A cor não deve ser usada como enfeite aleatório.

---

## 8. Regras de experiência por tipo de tela

## 8.1 Dashboards
### Objetivo de UX
Mostrar rapidamente o estado da operação.

### Regras
- blocos KPI no topo
- alertas acionáveis em destaque
- gráficos limpos
- listas de atenção prática
- ranking quando útil
- nunca virar um festival de gráfico decorativo

### O usuário deve entender em segundos
- onde está o problema
- o que precisa agir agora
- o que está indo bem

---

## 8.2 Listagens (Leads, Imóveis, Propostas, Corretores)
### Objetivo de UX
Permitir controle operacional rápido.

### Regras
- filtros sempre visíveis ou acessíveis rapidamente
- busca forte
- colunas realmente úteis
- ações rápidas por linha/card
- detalhe em drawer sempre que possível
- opção de mudar entre visualização de tabela e cards quando fizer sentido

### Não fazer
- tabela pesada demais
- excesso de coluna irrelevante
- necessidade de abrir nova página para tudo

---

## 8.3 Fichas detalhadas
### Objetivo de UX
Ser a central operacional da entidade.

### Regras
- abrir em drawer na maioria dos casos
- organizar por tabs
- mostrar resumo no topo
- exibir ações principais de forma evidente
- preservar contexto da listagem de origem

### Ficha do Lead deve priorizar
- comunicação
- próxima ação
- histórico
- etapa atual
- imóveis sugeridos
- tarefas
- visitas
- propostas

### Ficha do Imóvel deve priorizar
- status
- galeria
- características
- leads vinculados
- visitas
- propostas
- desempenho do imóvel

### Ficha da Proposta deve priorizar
- status negocial
- histórico
- valores
- contrapropostas
- pendências

---

## 8.4 Inbox / Atendimento
### Objetivo de UX
Ser a tela mais operacional do produto.

### Regras
- central de conversa sempre com contexto visível
- lista de conversas à esquerda
- conversa ao centro
- contexto do lead à direita
- tempo sem resposta muito visível
- templates e IA acessíveis sem atrapalhar a digitação

### A tela deve permitir sem troca de página
- responder
- abrir lead
- criar tarefa
- agendar visita
- ver resumo do lead
- mudar responsável, se permitido

---

## 8.5 Pipeline
### Objetivo de UX
Visualizar o funil e agir sem atrito.

### Regras
- kanban fluido
- cards escaneáveis
- informações mínimas mas suficientes
- drag and drop com feedback claro
- detalhe em drawer
- indicadores por etapa

### O pipeline deve mostrar
- travamento
- valor acumulado
- leads quentes
- tempo na etapa

---

## 8.6 Agenda / Visitas / Tarefas
### Objetivo de UX
Transformar a rotina em algo controlável.

### Regras
- visão calendário + lista
- tarefas críticas em destaque
- visitas do dia evidentes
- ações rápidas para confirmar, reagendar e concluir
- integração natural com lead e imóvel

### O usuário deve conseguir
- abrir o dia e saber exatamente o que fazer

---

## 8.7 Agentes Inteligentes
### Objetivo de UX
Fazer algo complexo parecer claro.

### Regras
- central de agentes simples e bem explicada
- criação em wizard
- linguagem acessível
- separar bem configuração, gatilho, ação e teste
- monitoramento visual claro

### Não fazer
- tela técnica demais
- formulário gigante único
- excesso de configurações expostas de uma vez

---

## 8.8 Integrações e Consumo
### Objetivo de UX
Dar transparência de conexão e custo.

### Regras
- cards de integração
- status bem visível
- consumo bem visível
- falhas com linguagem clara
- logs organizados
- alertas de limite fáceis de entender

---

## 9. Regras de navegação contextual

### 9.1 O contexto deve mudar a experiência, não a identidade do sistema
Ao trocar de contexto, a estrutura geral continua igual.
O que muda:
- dados exibidos
- ações permitidas
- módulos habilitados
- widgets do dashboard

### 9.2 O contexto ativo deve estar sempre visível
Nunca deixar o usuário em dúvida se está:
- na Imobiliária X
- na Imobiliária Y
- no workspace próprio

### 9.3 A troca de contexto deve ser rápida
O seletor de contexto deve estar acessível na topbar.

### 9.4 Visão consolidada do corretor multi-vínculo
Só deve consolidar:
- agenda
- tarefas
- lembretes
- próximos follow-ups

Não consolidar automaticamente:
- leads completos de empresas diferentes
- relatórios estratégicos cruzados
- dados sensíveis entre tenants

---

## 10. Passo a passo ideal da experiência por fluxo crítico

# 10.1 Fluxo: Lead novo chegando
1. lead entra no sistema por canal
2. aparece em fila de triagem ou diretamente na inbox
3. usuário vê origem, prioridade e contexto
4. consegue abrir detalhe rápido sem trocar de página
5. qualifica e atribui
6. lead segue para pipeline

### Objetivo de UX
Minimizar tempo entre entrada do lead e primeira ação.

---

# 10.2 Fluxo: Corretor atendendo lead
1. corretor entra no dashboard
2. vê lead prioritário
3. abre inbox ou ficha do lead
4. responde usando contexto e IA
5. agenda visita
6. move etapa
7. cria follow-up

### Objetivo de UX
Permitir que o corretor trabalhe rápido sem se perder.

---

# 10.3 Fluxo: Gestor monitorando equipe
1. entra no dashboard
2. vê SLA vencido e gargalos
3. abre lista de leads
4. redistribui ou cobra ação
5. acompanha pipeline da equipe
6. checa visitas e propostas

### Objetivo de UX
Transformar gestão em ação prática e não só leitura de número.

---

# 10.4 Fluxo: Admin configurando a empresa
1. entra em configurações
2. ajusta equipe
3. ajusta pipeline
4. conecta canais
5. revisa agentes e automações
6. acompanha impacto nos dashboards

### Objetivo de UX
Dar sensação de controle total sem parecer sistema técnico demais.

---

# 10.5 Fluxo: Criação de agente
1. entra na central de agentes
2. clica em criar agente
3. segue wizard em etapas claras
4. testa agente
5. publica
6. acompanha monitoramento

### Objetivo de UX
Reduzir medo e complexidade de configurar IA.

---

## 11. Regras de conteúdo e microcopy

### 11.1 A linguagem da interface deve ser
- clara
- objetiva
- profissional
- amigável
- orientada à ação

### 11.2 Evitar
- jargão técnico demais
- textos longos sem necessidade
- labels confusas
- mensagens frias e robóticas

### 11.3 Preferir
- frases curtas
- orientações úteis
- mensagens contextualizadas
- CTAs claros

### 11.4 Exemplos de abordagem correta
Em vez de:
- “Processamento não concluído”

Preferir:
- “Não foi possível concluir agora. Revise a conexão e tente novamente.”

Em vez de:
- “Nenhum registro”

Preferir:
- “Ainda não há leads aqui. Você pode importar ou criar o primeiro agora.”

---

## 12. Estados obrigatórios de UX

Cada tela principal precisa prever:

### 12.1 Estado carregando
- skeletons elegantes
- sensação de fluidez

### 12.2 Estado vazio
- mensagem clara
- explicação curta
- CTA principal

### 12.3 Estado sem resultados
- feedback do filtro aplicado
- botão para limpar filtros

### 12.4 Estado de erro
- mensagem compreensível
- ação recomendada
- opção de tentar novamente

### 12.5 Estado sem permissão
- mensagem clara
- sem parecer erro técnico
- orientação de quem pode liberar acesso

### 12.6 Estado de sucesso
- confirmação visual discreta e clara

---

## 13. Comportamentos avançados de produtividade

### 13.1 Ações rápidas
As telas operacionais devem suportar ações rápidas como:
- criar tarefa
- mudar etapa
- agendar visita
- enviar mensagem
- marcar como perdido

### 13.2 Atalhos visuais
Itens urgentes devem ter destaque visual suficiente para serem encontrados sem esforço.

### 13.3 Busca global forte
O sistema precisa permitir busca rápida por:
- lead
- imóvel
- proposta
- corretor
- proprietário
- tarefa
- agente

### 13.4 Persistência de filtros quando útil
A UX pode preservar filtros recentes em módulos como:
- leads
- imóveis
- propostas
- relatórios

### 13.5 Histórico e “última ação”
Sempre que possível, mostrar:
- última movimentação
- última mensagem
- última visita
- última alteração relevante

---

## 14. Regras de responsividade

### 14.1 Desktop é o foco principal
Esse produto é fortemente operacional e deve ser desenhado primeiro para desktop.

### 14.2 Mobile não pode ser desktop espremido
No mobile, priorizar:
- dashboard resumido
- leads
- inbox
- agenda
- tarefas
- visitas

### 14.3 Comportamentos adaptativos
- sidebar vira navegação recolhida
- filtros viram drawer
- tabelas viram listas inteligentes
- drawers podem ocupar tela inteira no mobile

---

## 15. Diretrizes para prototipação em IA

A IA que gerar o protótipo deve obedecer às seguintes regras:

### 15.1 Não duplicar páginas por perfil sem necessidade
Usar a mesma estrutura-base, variando widgets, permissões e dados.

### 15.2 Não quebrar rotina com excesso de rotas
Preferir drawer, modal e tabs.

### 15.3 Não transformar tudo em formulário enorme
Dividir fluxos complexos em etapas.

### 15.4 Não fazer dashboards genéricos
Cada dashboard deve ser contextual e acionável.

### 15.5 Não criar visual frio ou velho
A aparência deve ser de produto SaaS premium.

### 15.6 Não criar sistema com cara de admin template padrão
O sistema precisa ter personalidade de produto real.

---

## 16. Entregável esperado da prototipação

A prototipação deve resultar em um produto que pareça:

- maduro
- coerente
- moderno
- intuitivo
- contextual
- operacional
- escalável

O usuário deve olhar o sistema e sentir:

**“isso organiza minha operação, reduz meu caos e me ajuda a vender mais.”**

---

## 17. Checklist final para validação de UX

Antes de considerar o protótipo aprovado, validar se:

- o contexto ativo está sempre claro
- não há duplicidade desnecessária de páginas
- os dashboards estão acionáveis
- as fichas detalhadas preservam contexto
- a inbox é operacional de verdade
- o pipeline é útil e não só bonito
- o corretor consegue trabalhar rápido
- o gestor consegue supervisionar com clareza
- o admin sente controle da operação
- os agentes parecem configuráveis sem parecer técnicos demais
- integrações e consumo estão claros
- os estados vazios e de erro foram prototipados
- a navegação está consistente entre módulos

---

## 18. Conclusão

Este documento define a camada de experiência do Ecossistema SaaS Imobiliário.

Ele garante que o produto não seja apenas funcional, mas também:
- intuitivo
- elegante
- eficiente
- moderno
- fácil de operar
- forte em contexto
- pronto para escala

A regra central da UX deste sistema é:

**reduzir fricção, preservar contexto, acelerar a operação e dar clareza total ao usuário.**

Se a prototipação seguir este documento em conjunto com o mapa de telas, a matriz de permissões e o documento de jornadas, a chance de a IA gerar um sistema torto cai drasticamente.

