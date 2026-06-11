# SPEC — Landing Page `/medicos` · Numeratti MED

> **Documento de especificação completo.** Define O QUE a página é: estratégia, persona, oferta, copy integral seção por seção, design system, compliance e SEO.
> A implementação técnica (arquivos, componentes, ordem de execução) está em [PLAN.md](./PLAN.md).
>
> Marcações `[VERIFICAR]` indicam conteúdo que exige confirmação do cliente (Numeratti) antes de ir ao ar — **nunca publicar placeholder como se fosse fato real**.

---

## 1. Resumo executivo

| Item | Decisão |
|---|---|
| Rota | `https://www.numeratti.com.br/medicos` |
| Objetivo | Gerar conversas qualificadas no WhatsApp com médicos (CRM ativo) interessados em captação de pacientes particulares |
| Conversão primária | Clique no WhatsApp com mensagem pré-preenchida solicitando o **Diagnóstico de Captação de Pacientes (gratuito)** |
| Oferta-isca | Diagnóstico de Captação de Pacientes — auditoria gratuita do ecossistema digital do médico (Google, Instagram, Doctoralia, site, anúncios, compliance CFM) |
| Oferta-núcleo | Gestão de captação contínua: tráfego pago + posicionamento + vídeos com IA + mensuração por consulta agendada |
| Mecanismo nomeado | **Método Numeratti MED** (5 etapas — ver §5.6) |
| Ângulo central | Previsibilidade de agenda + domínio da Resolução CFM 2.336/2023 + vídeos com IA (médico não precisa gravar) |
| Tema visual | Dark warm (família `.lp-diagnostico`), laranja da marca + acento verde-clínico restrito a sinais de compliance |
| Persona | Médico(a) com consultório próprio ou clínica pequena, 30–55 anos, quer reduzir dependência de convênio/indicação |

### Por que esta página vence os benchmarks

Pesquisa em 12+ agências de marketing médico (Doctor One, DNA, WE, WTA3, Shantal, KOP Med, Tebra) mostrou que o nicho converge em: ética CFM como diferencial nº 1, depoimentos de médicos nomeados, cases por especialidade, CTA via WhatsApp, diagnóstico gratuito como isca e exclusividade por especialidade/região. A Numeratti entra com **dois trunfos que nenhum benchmark brasileiro tem**:

1. **Vídeos com IA produtizados** — resolve a objeção nº 1 do médico ("não tenho tempo de gravar conteúdo"). Nenhuma agência médica BR oferece isso com preço e prazo.
2. **DNA de dados** — a marca inteira é "performance medida por números". Médicos são compradores céticos treinados em evidência; respondem a método e métrica, não a promessa. A métrica da página é **custo por consulta agendada**, não clique nem ROAS.

---

## 2. Persona e psicologia de compra

**Quem é:** Dr(a). com CRM ativo, especialista (dermato, orto, cardio, psiquiatria, gineco, oftalmo…), consultório próprio ou sócio de clínica pequena, em capital ou cidade média. Fatura bem mas sente o teto: agenda com buracos, repasse de convênio baixo e atrasado, concorrência crescendo visivelmente.

**Dores (em ordem de intensidade):**
1. Agenda ociosa / imprevisível — não sabe quantos pacientes novos entram no mês que vem.
2. Dependência de convênios (repasse baixo) e de indicação (não escala, não controla).
3. Concorrência recorde: o Brasil chega a ~654 mil médicos em 2025; 448 escolas médicas formam ~32 mil/ano (Demografia Médica 2025 — USP/AMB).
4. Falta de tempo: não consegue produzir conteúdo, responder leads, gerenciar agência.
5. Medo do CFM: receio de autuação ética por publicidade irregular.
6. Trauma com agência genérica que "não entende saúde".

**Como compra:** é cético treinado — avalia evidência antes de decidir e confia em **pares** (outros médicos) mais do que em marcas. Responde a: método claro, números verificáveis, cases da mesma especialidade, redução de risco (sem fidelidade, diagnóstico antes de mensalidade), exclusividade.

**O que NUNCA fazer na copy:** promessa de resultado garantido ("agenda lotada garantida"), tom de coach/guru, jargão de mídia sem tradução (ROAS, CPM — sempre traduzir para "consultas agendadas" e "custo por consulta").

---

## 3. Arquitetura de conversão

```
Tráfego (Meta/Google Ads, bio Instagram, indicação)
        │
        ▼
HERO ─ promessa de previsibilidade + selo CFM ─ CTA "Quero meu diagnóstico gratuito"
        │                                            │
        ▼ (scroll)                                   ▼
Prova → Problema → Método → Vídeos IA →        WhatsApp 5585988776405
Compliance → Cases → Como funciona →           texto pré-preenchido:
Exclusividade → Sobre → FAQ → CTA final        "Olá! Sou médico(a) e quero o
        │                                       Diagnóstico de Captação de
        └── Botão WhatsApp flutuante (sempre)   Pacientes gratuito."
```

- **Um único objetivo de conversão** (WhatsApp). Sem formulário, sem newsletter, sem links que vazem para o site institucional no meio do funil (logo da navbar pode linkar para `/`, mas nada mais).
- CTA primário repetido após cada bloco de persuasão (hero, método, vídeos IA, cases, exclusividade, FAQ, final) — ~7 ocorrências.
- CTA secundário no hero: âncora `#metodo` ("Ver como funciona ↓").
- **⚠️ WhatsApp:** `lib/constants.ts` usa `5585988776405` (oficial) e o GlowButton do `/diagnostico` usa `558581486404`. **Esta LP deve usar o de `constants.ts` (`WHATSAPP_URL`)** — `[VERIFICAR]` com a Numeratti se há número dedicado para a vertical médica.

Mensagem pré-preenchida (URL-encode no código):
```
Olá! Sou médico(a) e quero o Diagnóstico de Captação de Pacientes gratuito da Numeratti.
```

---

## 4. Design system da página

### 4.1 Escopo e tema

- Wrapper: classe **`.lp-medicos`** no `layout.tsx` (mesmo padrão de `.lp-diagnostico` / `.lp-videos-ia` em `app/globals.css`).
- Tema **dark warm**, derivado da família `/diagnostico` (oferta consultiva = mesmo universo visual), com identidade própria via acento clínico.

### 4.2 Tokens

Reaproveitar os tokens globais existentes e adicionar os novos ao escopo `.lp-medicos`:

```css
.lp-medicos {
  /* herdados da identidade (já existem em :root) */
  --med-bg: var(--color-ink-bg);            /* #0a0a0a */
  --med-bg-warm: var(--color-ink-warm);     /* #0f0a05 */
  --med-orange: var(--color-orange-primary);/* #e8740c — CTA, destaques, .kw */
  --med-orange-mid: var(--color-orange-mid);/* #d4680a */
  --med-cream: var(--color-cream);          /* #fdf8f3 — seções claras */
  --med-cream-dark: var(--color-cream-dark);/* #fcebd8 */
  --med-ink: var(--color-ink);              /* #111111 — texto em seção clara */

  /* novos — exclusivos desta LP */
  --med-clinical: #2dd4bf;       /* verde-clínico: SOMENTE selos CFM, checks de compliance, badge ético */
  --med-clinical-dim: rgba(45, 212, 191, 0.12);
}
```

**Regra de uso do verde-clínico:** é um sinal semântico de "ética/compliance/segurança", não uma cor decorativa. Aparece apenas em: badge CFM do hero, ícones da seção Compliance, checkmarks de "pode/não pode". Todo o resto (CTAs, hovers, números, keywords) permanece laranja `#e8740c`. Isso mantém a página inconfundivelmente Numeratti e dá ao verde valor de significado.

### 4.3 Tipografia

Idêntica à `/diagnostico` (coerência da família consultiva):

| Papel | Fonte | Variable |
|---|---|---|
| Display (h1, h2, números grandes) | Bricolage Grotesque 500–800 | `--font-display` |
| Corpo | Inter Tight 300–700 | `--font-body` |
| Acento editorial (itálicos de ênfase em headlines) | Instrument Serif 400 italic | `--font-accent` |

### 4.4 Ritmo visual e componentes de estilo

- Alternância de seções: dark → dark → **cream** → dark → cream → dark… (como `/diagnostico`). Seções claras: Compliance e Como Funciona (respiro + leitura).
- Reutilizar do escopo `.lp-diagnostico` (duplicando regras para `.lp-medicos` no CSS): `.glass`, `.cream-card`, `.tag-dark`/`.tag-light`, `.deco-num`, `.kw` (keyword laranja).
- Animações: reutilizar keyframes globais (`slideUpFade`, `fadeIn`, `pulseGlow`, `drift`) + `RevealOnScroll` para entrada das seções. Sem novas keyframes salvo necessidade pontual.
- Mobile: manter a regra existente de desligar `backdrop-filter` < 768px (performance).
- Fotografia/ilustração: **nada de estetoscópio em fundo branco genérico**. Direção: consultório moderno, telas com gráficos de agenda crescendo, médico(a) em contexto de gestão. `[VERIFICAR]` se a Numeratti tem banco próprio; senão, a página funciona 100% com visualizações de dados (mock de dashboard de consultas agendadas — força da marca) e zero stock photo.

---

## 5. COPY INTEGRAL — seção por seção

> A ordem abaixo é a ordem do DOM. IDs de âncora indicados em cada seção.

### 5.0 Navbar (sticky)

- Logo Numeratti (link `/`) + wordmark "MED" ao lado do logo (texto, peso 700, laranja).
- Links âncora: `O problema` (#problema) · `O método` (#metodo) · `Vídeos com IA` (#videos-ia) · `Resultados` (#resultados) · `FAQ` (#faq)
- CTA navbar: **`Diagnóstico gratuito`** (GlowButton sm → WhatsApp).
- Comportamento: transparente no topo; fundo `rgba(10,10,10,.85)` + blur ao rolar (mesmo padrão da Navbar de `/diagnostico`).

### 5.1 HERO (`#hero`, dark, 100vh)

**Badge superior (tag com ponto pulsante verde-clínico):**
> Marketing médico · 100% dentro da Resolução CFM nº 2.336/2023

**H1 (Bricolage, até 3 linhas; itálico = Instrument Serif):**
> Captação **previsível** de pacientes particulares — *sem depender de convênio, indicação ou sorte.*

**Subheadline (18–24 palavras):**
> A Numeratti MED une tráfego pago, posicionamento ético e vídeos com IA para transformar seu consultório em uma agenda que você consegue prever.

**CTAs:**
- Primário (GlowButton lg): `Quero meu diagnóstico gratuito →`
- Secundário (ghost): `Ver como funciona ↓` (âncora #metodo)

**Microcopy sob o CTA (uma linha, 70% opacidade):**
> Diagnóstico sem custo e sem compromisso · Sem contrato de fidelidade · Resposta em horário comercial

**Feature list (3 checkmarks):**
- ✓ Métrica que importa: custo por consulta agendada
- ✓ Você não precisa gravar vídeos — nossa IA produz por você
- ✓ Exclusividade: não atendemos seu concorrente direto

**Visual do hero (direita / abaixo no mobile):** mock de dashboard "Agenda do mês" — gráfico de barras de consultas agendadas crescendo semana a semana, card flutuante "32 consultas agendadas · CPA R$ 47" `[VERIFICAR: números ilustrativos — rotular no design como simulação, ex.: legenda "simulação ilustrativa"]`. Construir com HTML/CSS + `AnimatedCounter` (sem imagem pesada). Partículas e orbs como nas LPs existentes, discretos.

### 5.2 Barra de prova de mercado (`#dados`, faixa dark estreita, 4 stats com `AnimatedCounter`)

> **77%** dos pacientes pesquisam online antes de agendar uma consulta¹
> **70%+** pesquisam o médico no Instagram antes de marcar²
> **654 mil** médicos no Brasil até o fim de 2025 — concorrência recorde³
> **80%** escolhem o especialista com base em avaliações online⁴

Rodapé da faixa (xs, 50% opacidade): `¹ Think with Google · ² McKinsey · ³ Demografia Médica 2025 (USP/AMB) · ⁴ Doctoralia`

**Linha de fechamento da faixa (display, itálico):**
> *O paciente já decidiu pesquisar. A única questão é quem ele vai encontrar.*

### 5.3 Problema (`#problema`, dark, 3 cards + agitação)

**Tag:** `O cenário real`
**H2:** A medicina nunca formou tantos médicos. E a agenda nunca dependeu tanto de **quem aparece primeiro.**

**3 cards (`.glass`):**

1. **Agenda imprevisível**
   Um mês cheio, outro com buracos. Sem um sistema de captação, o consultório vive refém da sazonalidade e da sorte — e é impossível planejar crescimento, equipe ou investimento.

2. **Convênio que não fecha conta**
   Repasse baixo, glosa, atraso. Cada hora de agenda vendida a convênio é uma hora que poderia valer 3 a 5× no particular — se houvesse demanda particular previsível.

3. **Indicação não escala**
   Indicação é excelente — e incontrolável. Ela não cresce porque você quer, não acelera quando a agenda abre e desaparece quando um colega abre consultório no mesmo bairro.

**Parágrafo de agitação (após os cards):**
> Enquanto isso, 448 escolas médicas formam cerca de 32 mil novos médicos por ano. A diferenciação clínica continua essencial — mas ela acontece **dentro** do consultório. A disputa pela primeira consulta acontece **antes**: no Google, no Instagram e na Doctoralia. Quem não é encontrado, não é escolhido.

**CTA de transição (link texto, laranja):** `Existe um jeito de sair desse ciclo →` (âncora #metodo)

### 5.4 Virada / reframe (faixa curta, dark warm)

> O problema do seu consultório **não é falta de pacientes.**
> É falta de um *sistema* que os traga toda semana — de forma ética, mensurável e previsível.

### 5.5 Método (`#metodo`, dark, timeline vertical de 5 etapas — padrão visual do MethodologyFlowchart de `/diagnostico`)

**Tag:** `Método Numeratti MED`
**H2:** Um sistema de captação, **medido por consultas agendadas** — não por curtidas.
**Sub:** Cinco etapas, na ordem certa. Nada de "postar mais" ou "impulsionar": engenharia de demanda para consultório.

**Etapa 01 — Diagnóstico de Captação**
Auditamos seu ecossistema digital completo: Google (busca + Maps), Instagram, Doctoralia, site, anúncios ativos e conformidade com a publicidade médica. Você recebe um raio-X com score e plano de prioridades — antes de pagar qualquer mensalidade.

**Etapa 02 — Posicionamento ético**
Definimos como você aparece: especialidade e RQE em destaque, diferenciais reais, página de agendamento que converte e perfil que passa a confiança que o paciente procura. Tudo revisado contra a Resolução CFM 2.336/2023.

**Etapa 03 — Tráfego qualificado**
Campanhas no Google e Meta segmentadas por intenção: quem busca "sua especialidade + sua cidade" encontra você — não o concorrente. Verba protegida por dados, não por achismo.

**Etapa 04 — Conteúdo sem ocupar sua agenda**
Nossa produção de vídeos com IA cria os anúncios e conteúdos do seu posicionamento. Você aprova o roteiro; a IA produz. Zero hora de gravação na sua semana.

**Etapa 05 — Mensuração por consulta**
Relatório mensal com a única métrica que paga boleto: quantas consultas o investimento gerou e a quanto custou cada uma. Ajuste contínuo de rota baseado em dados.

**CTA da seção:** `Começar pelo diagnóstico gratuito →`

### 5.6 Diferencial Vídeos com IA (`#videos-ia`, dark, layout split: copy esquerda + VideoFrame direita)

**Tag:** `Exclusivo Numeratti`
**H2:** O conteúdo que seu marketing precisa — **sem você gravar uma única vez.**
**Corpo:**
> "Não tenho tempo de gravar" é o motivo nº 1 pelo qual o marketing de médicos morre na praia. Nós removemos esse obstáculo por completo: nossa operação de vídeos com Inteligência Artificial produz anúncios e conteúdos profissionais a partir do seu posicionamento — com roteiro aprovado por você e revisão de conformidade ética em cada peça.

**3 bullets:**
- ✓ Vídeos prontos em dias, não semanas — sem estúdio, sem deslocamento
- ✓ Roteiros baseados nas dúvidas reais que pacientes pesquisam
- ✓ Cada peça revisada contra as normas de publicidade médica antes de ir ao ar

**Visual:** reutilizar o componente `VideoFrame` de `/videos-ia` com um exemplo de vídeo `[VERIFICAR: solicitar à Numeratti 1 vídeo demo adequado ao contexto médico; até lá, placeholder com poster + aviso interno de pendência]`.
**CTA:** `Quero vídeos assim no meu consultório →`

### 5.7 Compliance CFM (`#etica`, **cream** — seção clara, ícones verde-clínico)

**Tag (verde-clínico):** `Ética em primeiro lugar`
**H2 (ink):** As regras da publicidade médica **mudaram em 2024.** Quem entendeu, saiu na frente.
**Lead:**
> A Resolução CFM nº 2.336/2023, em vigor desde março de 2024, **liberou** práticas que muitos médicos ainda acham proibidas — e manteve vedações que muitas agências genéricas ignoram. Conhecer essa fronteira é a diferença entre crescer com segurança e responder a um processo ético.

**Duas colunas (cards `.cream-card`):**

**HOJE VOCÊ PODE ✓** (checks verde-clínico)
- Divulgar valores de consulta e formas de pagamento
- Mostrar antes/depois com critérios técnicos e texto educativo
- Repostar avaliações de pacientes, com sobriedade
- Anunciar equipamentos aprovados pela Anvisa
- Fazer publicidade para captar pacientes em canais próprios

**CONTINUA VEDADO ✗** (marcas âmbar/laranja)
- Prometer ou insinuar resultados garantidos
- Sensacionalismo e "técnica milagrosa/revolucionária"
- Autopromoção que desqualifique colegas
- Publicidade de medicamentos e selos a produtos
- Peças sem nome, CRM, título "médico" e RQE

**Bloco de fechamento:**
> Cada campanha, anúncio e vídeo que produzimos passa por checagem de conformidade antes da veiculação. Seu crescimento nunca deve custar seu registro.
> `[VERIFICAR antes de usar: a Numeratti pode afirmar "nenhum cliente autuado por publicidade irregular"? Se sim, incluir — é o redutor de risco mais forte do nicho. Se não, omitir.]`

**Nota de rodapé da seção (xs):** A responsabilidade final pelo conteúdo publicado é do médico, conforme a Resolução. Atuamos como executores tecnicamente alinhados à norma — não como consultoria jurídica.

### 5.8 Resultados / Cases (`#resultados`, dark)

**Tag:** `Resultados Numeratti`
**H2:** Números de quem **mede o que entrega.**

**Stats da casa (AnimatedCounter, já validados no site):** 1,5 bi de impressões · 153 mil leads gerados · 110+ clientes · ROAS máx. 17×

**Cases em destaque (3 cards):**
> ⚠️ **Regra de honestidade:** a Numeratti ainda não publica cases de médicos pessoa física. NÃO inventar. Usar os cases reais do setor de saúde do portfólio e rotulá-los pelo que são:

1. **Camed (operadora de saúde)** — +48% em geração de leads `[VERIFICAR número exato em lib/constants.ts / site]`
2. **OROlaser (clínica/estética)** — crescimento de 16.250% em leads `[VERIFICAR enquadramento correto do case]`
3. **Card 3:** reservar para o primeiro case médico da vertical. Até lá, usar um case de leads locais de serviço premium com legenda "case de serviço local de alto ticket" — ou exibir apenas 2 cards.

**Depoimentos:** estrutura pronta para 2–3 depoimentos no formato do nicho — *“texto curto e específico” — Dr(a). Nome, Especialidade, CRM/UF* `[VERIFICAR: coletar depoimentos reais de clientes médicos; a seção SÓ entra no ar com depoimentos verdadeiros e autorizados. Caso não existam ainda, ocultar o bloco de depoimentos e manter apenas stats + cases]`.

**CTA:** `Quero resultados medidos assim →`

### 5.9 Como funciona começar (`#como-funciona`, **cream**, 3 passos numerados com `.deco-num`)

**H2 (ink):** Do primeiro contato ao plano de captação em **5 dias úteis.**

1. **Você chama no WhatsApp** — Conta em 2 minutos sua especialidade, cidade e momento do consultório. Sem call de vendas disfarçada.
2. **Nós auditamos tudo** — Google, Instagram, Doctoralia, site, anúncios e conformidade. Você recebe o Diagnóstico de Captação com score e prioridades.
3. **Você decide com dados** — Apresentamos o plano com investimento, metas e a métrica de custo por consulta. Se fizer sentido, começamos. Sem fidelidade.

**Microcopy:** O diagnóstico é seu, decida o que quiser fazer com ele — inclusive nada.
**CTA:** `Começar meu diagnóstico →`

### 5.10 Exclusividade (`#exclusividade`, dark warm, faixa de escassez legítima)

**H2:** Atendemos **um médico por especialidade em cada região.**
**Corpo:**
> Não dá para servir a dois concorrentes ao mesmo tempo — seria anunciar contra nós mesmos com a sua verba. Por isso, trabalhamos com exclusividade de especialidade por área de atuação. Se a sua vaga estiver ocupada, entramos em lista de espera e avisamos quando abrir.

**CTA:** `Verificar disponibilidade para minha especialidade →` (mesma URL de WhatsApp, com mensagem alternativa: `Olá! Quero verificar se há vaga para minha especialidade na Numeratti MED.`)

### 5.11 Sobre a Numeratti (`#sobre`, dark, compacta)

**Tag:** `Quem assina o método`
**H2:** Uma consultoria de performance que fala a língua que você respeita: **a dos dados.**
**Corpo:**
> A Numeratti é uma consultoria de performance digital sediada em Fortaleza com atuação no Brasil inteiro. Gerenciamos mídia em 17+ plataformas, com 1,5 bilhão de impressões entregues e mais de 153 mil leads gerados — sempre guiados por dados, não por achismo. Numeratti MED é nossa vertical dedicada a consultórios e clínicas: mesma engenharia de performance, com a camada de ética médica que o seu CRM exige.

Badges: Google Partner · RD Station Partner `[VERIFICAR vigência das certificações]`.

### 5.12 FAQ (`#faq`, dark, accordion — 8 perguntas)

1. **Marketing médico não é proibido pelo CFM?**
   Não. A publicidade médica é regulamentada — não proibida. A Resolução CFM nº 2.336/2023 (em vigor desde 2024) permite, inclusive, divulgar preços, mostrar resultados com critérios técnicos e fazer anúncios para captar pacientes. O que ela veda é promessa de resultado, sensacionalismo e autopromoção excessiva. Nosso trabalho opera exatamente dentro dessa fronteira.

2. **Já contratei agência e não funcionou. Por que seria diferente?**
   Provavelmente você contratou uma agência generalista medindo curtida e alcance. Nós medimos consultas agendadas e custo por consulta — e começamos por um diagnóstico gratuito que mostra, antes de qualquer mensalidade, exatamente o que está travando sua captação.

3. **Não tenho tempo de gravar vídeos. Como fica o conteúdo?**
   Esse é justamente nosso diferencial: produzimos seus vídeos com Inteligência Artificial. Você aprova o roteiro; a produção é nossa. Zero gravação na sua agenda.

4. **Quanto custa?**
   O diagnóstico é gratuito. O plano de captação é dimensionado por especialidade, cidade e meta — investimento (fee + verba de mídia) apresentado com projeção de custo por consulta antes de você decidir. Sem surpresa e sem fidelidade. `[VERIFICAR: se a Numeratti quiser ancorar faixa de preço pública, ex. "planos a partir de R$ X/mês", inserir aqui]`

5. **Existe contrato de fidelidade?**
   Não. Acreditamos que relatório mensal bom é o único contrato de permanência que funciona.

6. **Funciona para a minha especialidade na minha cidade?**
   O diagnóstico responde isso com dados: volume de busca da sua especialidade na sua região, concorrência ativa e custo estimado por consulta. Se os números não fecharem, falamos isso com a mesma franqueza.

7. **Vocês atendem meu concorrente?**
   Não. Exclusividade por especialidade e região é regra da vertical MED. Por isso as vagas são limitadas.

8. **Em quanto tempo vejo resultado?**
   Campanhas de busca começam a gerar contatos nas primeiras semanas; posicionamento orgânico e reputação compõem ao longo de meses. No diagnóstico você recebe uma linha do tempo realista para o seu caso — prometer prazo igual para todos seria exatamente o tipo de promessa que não fazemos.

### 5.13 CTA Final (`#cta`, dark, centrado, orbs de fundo)

**H2:** Sua próxima semana pode continuar imprevisível. **Ou pode começar com um raio-X completo da sua captação — grátis.**
**Sub:** Diagnóstico de Captação de Pacientes: Google, Instagram, Doctoralia, site, anúncios e compliance, com score e prioridades. Sem custo, sem fidelidade, sem call de vendas disfarçada.
**CTA (GlowButton lg):** `Solicitar meu diagnóstico gratuito →`
**Microcopy:** Resposta em horário comercial · Vagas limitadas por especialidade e região

### 5.14 Footer

Padrão das LPs existentes: logo + "MED", links âncora, WhatsApp, e-mail, cidade (Fortaleza – CE), © ano dinâmico, link para o site institucional e para `/videos-ia` e `/diagnostico` ("Conheça também").

### 5.15 Botão flutuante WhatsApp

Reutilizar o padrão `WhatsAppButton` de `/videos-ia` (aparece após ~100px de scroll), com a mensagem pré-preenchida da LP médica.

---

## 6. SEO

```ts
title: "Marketing Médico com Dados: Captação de Pacientes Particulares | Numeratti MED"
description: "Captação previsível de pacientes particulares para médicos: tráfego pago, posicionamento ético (Resolução CFM 2.336/2023) e vídeos com IA. Diagnóstico gratuito."
keywords: ["marketing médico", "marketing para médicos", "captação de pacientes",
  "agência de marketing médico", "publicidade médica CFM", "tráfego pago para médicos",
  "marketing para consultório", "pacientes particulares"]
canonical: "/medicos"
```

- Usar o helper `pageMetadata()` de `lib/seo.ts` (gera canonical + OG + Twitter completos) — diferente das LPs antigas, que montam metadata na mão; o helper é o padrão mais recente do projeto.
- OG image 1200×630 dedicada `[VERIFICAR: pedir arte ao design; fallback = DEFAULT_OG_IMAGE_URL]`.
- Adicionar a `app/sitemap.ts`: `{ url: \`${SITE_URL}/medicos\`, changeFrequency: "monthly", priority: 0.9 }`.
- H1 único (hero). Headings semânticos h2/h3. FAQ com schema `FAQPage` (JSON-LD) — ganho real de SERP para "marketing médico".

---

## 7. Princípios de honestidade (inegociáveis)

1. Nenhum depoimento ou case fictício. Blocos dependentes de material real ficam ocultos até o material existir.
2. Números ilustrativos em mocks de dashboard sempre rotulados como simulação.
3. A própria LP segue o espírito da norma que vende: zero promessa de resultado garantido — sempre "previsibilidade", "sistema", "medição".
4. Todo `[VERIFICAR]` resolvido com o cliente antes do deploy em produção.
