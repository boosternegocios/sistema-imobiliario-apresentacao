# Design System — Ecossistema SaaS Imobiliário

## 1. Objetivo do Design System

Este Design System define a base visual, estrutural e comportamental da interface do **Ecossistema SaaS Imobiliário**, garantindo consistência, escalabilidade, clareza operacional e percepção premium em todas as telas do produto.

A direção visual adotada parte da referência enviada, com foco em:
- visual sofisticado e contemporâneo
- interface clara, leve e elegante
- sensação de produto premium e confiável
- navegação intuitiva para operação diária
- contraste entre áreas de foco e áreas utilitárias
- uso inteligente de azul como cor principal estrutural
- acentos suaves para métricas, alertas e categorização

---

## 2. Direção Conceitual da Interface

### 2.1 Personalidade visual da marca-produto
A interface deve transmitir:
- confiança
- tecnologia
- estabilidade
- sofisticação
- clareza
- produtividade
- modernidade sem exagero futurista

### 2.2 Sensação desejada ao navegar
O usuário deve sentir que está dentro de uma plataforma:
- bem organizada
- profissional
- fácil de entender
- rápida para operar
- visualmente agradável mesmo em uso prolongado

### 2.3 Princípios visuais
- Menos ruído visual, mais hierarquia
- Contraste por profundidade, não por excesso de cor
- Cards com respiro amplo
- CTAs com destaque controlado
- Sidebar forte como âncora visual
- Área principal clara para leitura e produtividade
- Indicadores e status com cores suaves, sem poluição visual

---

## 3. Estratégia Visual Baseada na Referência

A referência apresenta uma estrutura visual extremamente eficiente:

### 3.1 Sidebar escura e profunda
A barra lateral cria contraste com o restante da interface e funciona como eixo de navegação principal.

### 3.2 Área principal clara
O conteúdo principal usa superfícies claras e neutras, favorecendo leitura, gráficos, cards e tabelas.

### 3.3 Cards brancos com bordas suaves
Os cards transmitem leveza, organização e modularidade.

### 3.4 Destaques em azul
O azul é a cor principal para ações, estados selecionados, gráficos e indicadores.

### 3.5 Acentos pastéis auxiliares
Peach, lavender, light blue e tons suaves ajudam a categorizar sem pesar a interface.

---

## 4. Paleta de Cores Oficial

## 4.1 Cores primárias

### Primary Navy
Usada na sidebar, áreas estruturais escuras e fundos institucionais.
- **Hex:** `#062B52`

### Primary Deep Blue
Usada em gradientes estruturais, profundidade de navegação e elementos de ênfase.
- **Hex:** `#0A4D86`

### Primary Bright Blue
Usada em botões principais, elementos ativos, gráficos e seleção.
- **Hex:** `#4DA3FF`

### Primary Soft Blue
Usada em hovers, backgrounds leves e preenchimentos secundários.
- **Hex:** `#DCEEFF`

---

## 4.2 Neutros

### Background App
Fundo principal da aplicação.
- **Hex:** `#F5F6F8`

### Surface White
Cards, tabelas, modais e blocos internos.
- **Hex:** `#FFFFFF`

### Surface Soft
Superfícies auxiliares e inputs suaves.
- **Hex:** `#F8F9FB`

### Border Soft
Linhas divisórias e bordas discretas.
- **Hex:** `#E7EBF0`

### Text Primary
Texto principal.
- **Hex:** `#1F2937`

### Text Secondary
Texto de apoio.
- **Hex:** `#6B7280`

### Text Tertiary
Texto auxiliar e descrições menos prioritárias.
- **Hex:** `#9CA3AF`

---

## 4.3 Cores de apoio / status

### Success Soft
- **Hex:** `#DDF5E8`

### Success Text
- **Hex:** `#1F8A4D`

### Warning Soft
- **Hex:** `#FCE8CC`

### Warning Text
- **Hex:** `#C67A12`

### Danger Soft
- **Hex:** `#FDE2E2`

### Danger Text
- **Hex:** `#C73A3A`

### Info Soft
- **Hex:** `#E4EEFF`

### Info Text
- **Hex:** `#3B6EDC`

### Lavender Soft
- **Hex:** `#ECEBFF`

### Peach Soft
- **Hex:** `#F8E1D2`

---

## 4.4 Gradientes oficiais

### Gradient Sidebar
- `linear-gradient(180deg, #062B52 0%, #0A4D86 100%)`

### Gradient Primary CTA
- `linear-gradient(135deg, #4DA3FF 0%, #2E7BEF 100%)`

### Gradient Selected Nav
- `linear-gradient(90deg, #3A8FFF 0%, #67B4FF 100%)`

### Gradient Highlight Soft
- `linear-gradient(180deg, rgba(77,163,255,0.18) 0%, rgba(77,163,255,0.04) 100%)`

---

## 5. Regras de Uso de Cores

### 5.1 Azul
Azul é a cor principal do sistema e deve ser usado para:
- seleção ativa
- CTA primário
- links principais
- gráficos
- foco
- elementos de destaque funcional

### 5.2 Tons pastéis
Os tons pastéis devem ser usados como apoio visual para:
- status
- categorias
- widgets
- ícones de cards
- labels leves

### 5.3 Neutros
Os neutros sustentam a maior parte do sistema. O produto deve parecer limpo e refinado, não colorido demais.

### 5.4 Regra de equilíbrio
A maior parte da interface deve ser composta por:
- fundo neutro claro
- cards brancos
- texto cinza escuro
- azul apenas em pontos de atenção

---

## 6. Tipografia

## 6.1 Estilo tipográfico
A tipografia deve ser moderna, limpa, altamente legível e com boa performance em dashboards densos.

### Fonte principal recomendada
**Inter**

### Fonte alternativa
**Poppins** para peças mais institucionais ou landing pages internas, mas não como fonte principal de operação.

---

## 6.2 Escala tipográfica

### Display Large
- 36px
- 700
- uso: títulos principais de páginas especiais

### Heading 1
- 30px
- 700
- uso: títulos de tela

### Heading 2
- 24px
- 600
- uso: seções principais

### Heading 3
- 20px
- 600
- uso: títulos de cards e blocos

### Title
- 18px
- 600
- uso: subtítulos fortes

### Body
- 14px
- 400/500
- uso: texto padrão

### Small
- 12px
- 400/500
- uso: apoio, metadata, rótulos

### Tiny
- 11px
- 500
- uso: tags e microinformações

---

## 7. Grid, Espaçamento e Layout

## 7.1 Grid
- Layout desktop com grid de 12 colunas
- Área principal com respiro horizontal amplo
- Sidebar fixa
- Conteúdo modular em cards

## 7.2 Espaçamento base
Usar escala de espaçamento baseada em múltiplos de 4:
- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48

## 7.3 Regras de respiro
- Cards nunca devem ficar colados
- Blocos com pelo menos 16 a 24px de padding interno
- Tabelas com altura visual confortável
- Inputs e filtros com espaçamento suficiente para toque e clique

---

## 8. Bordas, Raios e Sombras

## 8.1 Border radius
A linguagem visual da referência usa cantos suaves e modernos.

### Tokens sugeridos
- Small: 10px
- Medium: 14px
- Large: 18px
- XL: 24px
- Pill: 999px

## 8.2 Sombras
Sombras devem ser muito suaves.

### Shadow Soft
- `0 6px 20px rgba(15, 23, 42, 0.05)`

### Shadow Card Hover
- `0 10px 28px rgba(15, 23, 42, 0.08)`

### Shadow Floating
- `0 12px 32px rgba(15, 23, 42, 0.10)`

---

## 9. Estrutura de Componentes

## 9.1 Sidebar
### Características
- fundo em gradiente azul escuro
- navegação vertical
- item ativo em pill com gradiente azul claro
- ícones lineares ou minimalistas
- contraste alto, leitura fácil

### Regras
- item ativo precisa ser muito claro visualmente
- não exagerar em divisórias
- seções podem ter agrupamentos por contexto

---

## 9.2 Topbar
### Características
- fundo claro
- busca central ou semi-central
- ações rápidas no topo
- avatar e contexto do usuário no canto direito

### Elementos padrão
- campo de busca
- notificações
- atalhos rápidos
- perfil do usuário
- seletor de contexto/empresa/unidade

---

## 9.3 Cards métricos
### Características
- fundo branco
- raio suave
- ícone com fundo pastel circular ou arredondado
- número principal com alto contraste
- label secundária menor
- indicador de crescimento/queda em badge suave

### Estrutura recomendada
- ícone
- título do KPI
- subtítulo opcional
- valor principal
- badge de variação

---

## 9.4 Cards analíticos
### Características
- área interna espaçosa
- título + subtítulo
- filtros no topo
- gráfico com preenchimento suave
- uso de azul como dado principal

---

## 9.5 Tabelas
### Direção
A tabela deve parecer leve, organizada e premium.

### Regras
- cabeçalho suave
- linhas com separadores discretos
- hover leve
- status em badges coloridas suaves
- boa legibilidade em colunas financeiras e operacionais

---

## 9.6 Badges
### Tipos
- success
- warning
- danger
- info
- neutral

### Estilo
- fundo suave
- texto médio
- borda opcional sutil
- formato pill

---

## 9.7 Botões

### Primário
- gradiente azul
- texto branco
- alto destaque

### Secundário
- fundo branco
- borda suave
- texto escuro

### Ghost
- sem fundo forte
- destaque no hover

### Danger
- fundo vermelho suave ou texto vermelho conforme contexto

---

## 9.8 Inputs e filtros
### Características
- fundo claro
- borda suave
- raio médio
- foco em azul
- altura confortável

### Estados
- default
- hover
- focus
- disabled
- error

---

## 9.9 Modais e drawers
### Direção
- superfícies brancas
- estrutura arejada
- cabeçalho claro
- CTA principal bem visível
- overlay discreto

---

## 10. Ícones e ilustrações

## 10.1 Ícones
- estilo linear ou levemente preenchido
- traço limpo
- consistência total entre módulos
- sem misturar muitos estilos diferentes

## 10.2 Uso de ícones
- sidebar
- status de cards
- ações rápidas
- tabelas
- filtros
- empty states

## 10.3 Ilustrações
Devem ser usadas com moderação. O sistema deve parecer profissional, não infantilizado.

---

## 11. Estados Interativos

## 11.1 Hover
Hover deve ser sutil, com leve elevação, mudança suave de fundo ou borda.

## 11.2 Focus
Focus sempre visível com azul funcional acessível.

## 11.3 Active
Estado ativo deve ter contraste claro, especialmente em menus e filtros.

## 11.4 Disabled
Elementos desabilitados devem parecer inativos, mas ainda compreensíveis.

## 11.5 Loading
Loading deve ser elegante, com skeletons suaves em cards, listas e tabelas.

---

## 12. Diretrizes para Dashboard

O dashboard do Ecossistema SaaS Imobiliário deve seguir esta lógica:

### 12.1 Hierarquia principal
1. saudação / contexto
2. KPIs principais
3. gráfico ou visão consolidada
4. blocos operacionais
5. tabelas ou listas recentes

### 12.2 Sensação visual
- leitura rápida
- baixo esforço cognitivo
- boa densidade sem parecer apertado
- aparência executiva e operacional ao mesmo tempo

### 12.3 Aplicação no contexto imobiliário
Os cards podem representar:
- leads captados
- atendimentos em andamento
- imóveis ativos
- propostas enviadas
- visitas agendadas
- contratos fechados
- corretores ativos
- receita gerada

---

## 13. Regras de UX Visual para o Ecossistema Imobiliário

## 13.1 Clareza operacional acima do efeito visual
A plataforma deve ser bonita, mas antes de tudo precisa ser funcional.

## 13.2 Informação importante sempre acima da dobra
KPIs, pendências, alertas e atalhos devem aparecer com facilidade.

## 13.3 Navegação previsível
O usuário precisa saber rapidamente onde está e para onde vai.

## 13.4 Carga cognitiva controlada
Evitar excesso de informações simultâneas, principalmente em telas administrativas.

## 13.5 Consistência por módulo
Mesmo com múltiplos módulos, a experiência precisa parecer unificada.

---

## 14. Tokens recomendados

## 14.1 Color tokens
- `color.primary.900 = #062B52`
- `color.primary.700 = #0A4D86`
- `color.primary.500 = #4DA3FF`
- `color.primary.100 = #DCEEFF`
- `color.background.app = #F5F6F8`
- `color.surface.default = #FFFFFF`
- `color.surface.soft = #F8F9FB`
- `color.border.soft = #E7EBF0`
- `color.text.primary = #1F2937`
- `color.text.secondary = #6B7280`
- `color.status.success.bg = #DDF5E8`
- `color.status.success.text = #1F8A4D`
- `color.status.warning.bg = #FCE8CC`
- `color.status.warning.text = #C67A12`
- `color.status.danger.bg = #FDE2E2`
- `color.status.danger.text = #C73A3A`
- `color.status.info.bg = #E4EEFF`
- `color.status.info.text = #3B6EDC`

## 14.2 Radius tokens
- `radius.sm = 10px`
- `radius.md = 14px`
- `radius.lg = 18px`
- `radius.xl = 24px`
- `radius.pill = 999px`

## 14.3 Shadow tokens
- `shadow.soft = 0 6px 20px rgba(15, 23, 42, 0.05)`
- `shadow.hover = 0 10px 28px rgba(15, 23, 42, 0.08)`
- `shadow.floating = 0 12px 32px rgba(15, 23, 42, 0.10)`

## 14.4 Spacing tokens
- `space.1 = 4px`
- `space.2 = 8px`
- `space.3 = 12px`
- `space.4 = 16px`
- `space.5 = 20px`
- `space.6 = 24px`
- `space.8 = 32px`
- `space.10 = 40px`
- `space.12 = 48px`

---

## 15. O que evitar neste produto

- excesso de transparência
- neon exagerado
- contraste agressivo demais
- excesso de cores concorrendo entre si
- excesso de bordas pesadas
- visual com cara de startup genérica exageradamente futurista
- excesso de elementos decorativos inúteis
- tipografia pequena demais em telas operacionais

---

## 16. Conclusão da Direção Visual

A direção visual oficial do Ecossistema SaaS Imobiliário deve ser:

**premium, clara, moderna, confiável, modular e altamente operacional**.

O design precisa equilibrar:
- sofisticação
- produtividade
- leveza visual
- escalabilidade
- clareza funcional

A referência enviada é excelente como base porque entrega exatamente esse equilíbrio.

---

## 17. Próximos desdobramentos recomendados

Depois deste documento, os próximos artefatos ideais são:

1. **Biblioteca de Componentes do Design System**
2. **Documento de UI por tipo de tela**
3. **Style Guide com exemplos visuais de aplicação**
4. **Prompt mestre para gerar o protótipo no Stitch/Figma/IA**
5. **Versão do Design System com tokens para dev**

