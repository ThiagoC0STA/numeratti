# PLAN — Implementação da LP `/medicos`

> **Plano de execução para a IA implementadora.** O conteúdo, copy e decisões de design estão em [SPEC.md](./SPEC.md) — este documento define COMO construir: arquivos, componentes, ordem, contratos e critérios de aceite.
> Leia o SPEC.md inteiro antes de escrever qualquer código.

---

## 0. Pré-requisitos obrigatórios (antes de codar)

1. **Next.js 16 ≠ seu conhecimento de treino.** O `AGENTS.md` do projeto exige: leia os guias relevantes em `node_modules/next/dist/docs/` (metadata, app router, fonts, images) antes de escrever código. Stack real: Next 16.2.0 · React 19.2.4 · Tailwind CSS v4 (via `@tailwindcss/postcss`) · TypeScript 5.
2. **Estude os 3 arquivos-modelo** — a LP nova é uma irmã estrutural deles:
   - `app/diagnostico/layout.tsx` (fonts + metadata + wrapper de escopo)
   - `app/diagnostico/page.tsx` (composição de seções)
   - `app/globals.css` linhas ~619+ (escopo `.lp-diagnostico` — o `.lp-medicos` segue esse formato)
3. **Fontes de verdade:**
   - WhatsApp: `WHATSAPP_URL` em `lib/constants.ts` (`5585988776405`) — NÃO copiar o número hardcoded do GlowButton de `/diagnostico` (`558581486404`, divergente).
   - Métricas institucionais: `lib/constants.ts` (`METRICS`, `ABOUT_STATS`) — nunca digitar números de cabeça.
   - SEO: helper `pageMetadata()` em `lib/seo.ts`.

---

## 1. Árvore de arquivos a criar/alterar

```
CRIAR:
app/medicos/
├── layout.tsx                                  (F1)
└── page.tsx                                    (F2)

components/pages/medicos/
├── Navbar.tsx                                  (F4)
├── Hero.tsx                                    (F5)
├── MarketStatsBar.tsx                          (F6)
├── ProblemSection.tsx                          (F7)
├── ReframeBand.tsx                             (F8)
├── MethodSection.tsx                           (F9)
├── AIVideosSection.tsx                         (F10)
├── ComplianceSection.tsx                       (F11)
├── ResultsSection.tsx                          (F12)
├── HowToStartSection.tsx                       (F13)
├── ExclusivitySection.tsx                      (F14)
├── AboutSection.tsx                            (F15)
├── FAQSection.tsx                              (F16)
├── FinalCTA.tsx                                (F17)
├── Footer.tsx                                  (F18)
├── WhatsAppButton.tsx                          (F19)
└── ui/
    ├── GlowButton.tsx                          (F20)
    ├── RevealOnScroll.tsx                      (cópia de diagnostico/ui)
    ├── Particles.tsx                           (cópia de diagnostico/ui)
    ├── AnimatedCounter.tsx                     (cópia de diagnostico/ui)
    └── AgendaDashboardMock.tsx                 (F21 — visual do hero)

ALTERAR:
app/globals.css                                 (F3 — escopo .lp-medicos)
app/sitemap.ts                                  (F22 — rota nova)
```

**Decisão de duplicação:** seguir o padrão existente do repo — cada LP tem sua própria pasta `ui/` (videos-ia e diagnostico já duplicam GlowButton/RevealOnScroll/Particles). NÃO refatorar para compartilhado neste trabalho; consistência > DRY aqui.

---

## 2. Fases de execução

### FASE 1 — Fundação (F1–F3)

**F1 · `app/medicos/layout.tsx`** — espelhar `app/diagnostico/layout.tsx`:
- Fontes idênticas às de `/diagnostico`: `Bricolage_Grotesque` (500–800, `--font-display`), `Inter_Tight` (300–700, `--font-body`), `Instrument_Serif` (400 normal+italic, `--font-accent`), todas `display: "swap"`, `subsets: ["latin"]`.
- Metadata via `pageMetadata()` de `lib/seo.ts` com title/description/canonical do SPEC §6. Acrescentar `keywords` por spread:
  ```ts
  export const metadata: Metadata = {
    ...pageMetadata({ title: "...", description: "...", path: "/medicos" }),
    keywords: [...],
  };
  ```
- Wrapper: `<div className={`${display.variable} ${body.variable} ${accent.variable} lp-medicos antialiased`}>{children}</div>`

**F2 · `app/medicos/page.tsx`** — Server Component puro, só composição (zero lógica), na ordem exata do SPEC §5:
```tsx
<Navbar /> <Hero /> <MarketStatsBar /> <ProblemSection /> <ReframeBand />
<MethodSection /> <AIVideosSection /> <ComplianceSection /> <ResultsSection />
<HowToStartSection /> <ExclusivitySection /> <AboutSection /> <FAQSection />
<FinalCTA /> <Footer /> <WhatsAppButton />
```

**F3 · `app/globals.css`** — adicionar bloco `.lp-medicos` APÓS o bloco `.lp-diagnostico`, seguindo o mesmo formato de comentário-cabeçalho:
- Copiar do escopo `.lp-diagnostico` as regras utilizadas: base (`background`, `color`, `font-family`), `::selection`, `.glass`, `.cream-card`, `.tag-dark`, `.tag-light`, `.deco-num`, `.kw`, `.bg-cream`/`.text-ink` e variantes de opacidade, `.grid-bg`.
- Adicionar tokens novos do SPEC §4.2 (`--med-clinical: #2dd4bf`, `--med-clinical-dim`) e classes semânticas: `.lp-medicos .tag-clinical` (badge verde), `.lp-medicos .check-clinical` (cor de checkmark compliance).
- Manter o reset de `backdrop-filter` no media query mobile existente, estendendo o seletor para `.lp-medicos`.
- NÃO criar novas keyframes; reutilizar as globais.

✅ **Gate da fase:** `npm run build` passa; `/medicos` renderiza página vazia com fundo dark e fontes corretas.

### FASE 2 — UI primitives (F20, F21 + cópias)

**Cópias literais** de `components/pages/diagnostico/ui/`: `RevealOnScroll.tsx`, `Particles.tsx`, `AnimatedCounter.tsx` (mesmos contratos de props — ver SPEC do repo: `RevealOnScroll {children, delay?, y?, className?, once?}` etc.).

**F20 · `ui/GlowButton.tsx`** — copiar de `diagnostico/ui/GlowButton.tsx` com duas mudanças:
```tsx
import { WHATSAPP_URL } from "@/lib/constants";
const WHATSAPP = `${WHATSAPP_URL}&text=${encodeURIComponent(
  "Olá! Sou médico(a) e quero o Diagnóstico de Captação de Pacientes gratuito da Numeratti."
)}`;
```
Manter props `{ children, href?, className?, size? }` e o estilo glow laranja. Todo CTA da página usa este componente (href default = WhatsApp da vertical).

**F21 · `ui/AgendaDashboardMock.tsx`** — visual do hero, "use client", 100% HTML/CSS (sem imagem):
- Card glass com header "Agenda do mês — consultas agendadas".
- 4–6 barras CSS com `heroBarRise`/delays escalonados (keyframes globais já existem).
- Card flutuante (animação `drift`) com `AnimatedCounter`: "32 consultas · CPA R$ 47".
- **Obrigatório:** legenda xs "simulação ilustrativa" (SPEC §7.2).

### FASE 3 — Seções (F4–F19)

Regras gerais para TODAS as seções:
- `"use client"` somente onde há estado/efeito (Navbar, Hero, FAQ accordion, WhatsAppButton, counters); seções estáticas ficam Server Components com `RevealOnScroll` envolvendo blocos.
- Toda copy vem LITERALMENTE do SPEC §5 — não parafrasear, não "melhorar". Palavras em negrito da copy = `<span className="kw">` (laranja) ou `<strong>`; itálicos = `font-accent` (Instrument Serif).
- IDs de âncora exatamente como no SPEC (`#problema`, `#metodo`, `#videos-ia`, `#etica`, `#resultados`, `#como-funciona`, `#exclusividade`, `#sobre`, `#faq`, `#cta`).
- Alternância dark/cream do SPEC §4.4: Compliance (F11) e HowToStart (F13) são cream; resto dark.
- Imagens: `next/image` sempre; assets de logo em `/public/logo-numeratti.png`.

Mapeamento de referência (copiar estrutura/JSX-pattern, trocar conteúdo):

| Novo componente | Modelo no repo | Adaptações-chave |
|---|---|---|
| F4 Navbar | `diagnostico/Navbar.tsx` | wordmark "MED" laranja; links do SPEC §5.0 |
| F5 Hero | `diagnostico/Hero.tsx` | badge com ponto pulsante `--med-clinical`; `AgendaDashboardMock` no lugar do visual atual; 3 checkmarks |
| F6 MarketStatsBar | `diagnostico/StatsBar.tsx` | 4 stats + rodapé de fontes¹²³⁴ + linha itálica de fechamento |
| F7 ProblemSection | `diagnostico/ProblemSection.tsx` | 3 cards `.glass` + parágrafo de agitação + link de transição |
| F8 ReframeBand | novo (simples) | faixa `bg` ink-warm, texto display centrado, 2 linhas do SPEC §5.4 |
| F9 MethodSection | `diagnostico/MethodologyFlowchart.tsx` | timeline vertical 5 etapas, números `.deco-num` |
| F10 AIVideosSection | `videos-ia/ExamplesSection.tsx` (VideoFrame) + split layout | reusar `VideoFrame` de videos-ia OU placeholder com poster (SPEC §5.6 `[VERIFICAR]`) |
| F11 ComplianceSection | `diagnostico/PillarSection.tsx` (cards cream) | 2 colunas PODE/VEDADO; checks `--med-clinical`, vedações laranja; nota de rodapé |
| F12 ResultsSection | `diagnostico/StatsBar` + cards de case | stats de `lib/constants.ts`; cases com rótulos honestos; bloco depoimentos **comentado/oculto** até existir material real |
| F13 HowToStartSection | `videos-ia/HowItWorksSection.tsx` | 3 passos, fundo cream, `.deco-num` |
| F14 ExclusivitySection | novo (faixa) | dark warm, H2 + corpo + CTA com mensagem alternativa de WhatsApp (SPEC §5.10) |
| F15 AboutSection | `diagnostico/AboutSection.tsx` | copy §5.11; badges Partner `[VERIFICAR]` |
| F16 FAQSection | `videos-ia/FAQSection.tsx` (accordion) | 8 perguntas §5.12 + **JSON-LD `FAQPage`** via `<script type="application/ld+json">` |
| F17 FinalCTA | `diagnostico/FinalCTA.tsx` | copy §5.13, orbs de fundo |
| F18 Footer | `diagnostico/Footer.tsx` | + links "Conheça também": `/videos-ia`, `/diagnostico`, `/` |
| F19 WhatsAppButton | `videos-ia/WhatsAppButton.tsx` | trocar href para o WhatsApp da vertical (mesmo do F20) |

✅ **Gate da fase:** página completa renderiza; todas as âncoras navegam; nenhum link aponta para o número de WhatsApp errado (`grep -r "81486404" components/pages/medicos/` retorna vazio).

### FASE 4 — SEO e integração (F22)

- **F22 · `app/sitemap.ts`:** inserir após a linha de `/videos-ia`:
  ```ts
  { url: `${SITE_URL}/medicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ```
- Validar JSON-LD do FAQ com o Rich Results Test (estrutura: `@type: "FAQPage"`, `mainEntity` com as 8 `Question`/`Answer`).
- Conferir metadata renderizada: `view-source` deve mostrar canonical `/medicos`, OG completo, title correto.

### FASE 5 — QA (gates de aceite)

| # | Critério | Como verificar |
|---|---|---|
| 1 | `npm run build` sem erros nem warnings novos | terminal |
| 2 | Lint passa | `npm run lint` |
| 3 | Mobile 375px: sem scroll horizontal, CTAs full-width, fontes ≥16px, tap targets ≥48px | DevTools / preview |
| 4 | Hero LCP < 2.5s (sem imagem pesada — mock é CSS) | Lighthouse |
| 5 | Todos os CTAs abrem WhatsApp `5585988776405` com texto pré-preenchido correto (2 variantes: diagnóstico / disponibilidade) | clique manual em cada um |
| 6 | Âncoras da navbar e CTAs internos funcionam com smooth scroll | clique manual |
| 7 | `RevealOnScroll` anima na entrada; sem layout shift (CLS ~0) | Lighthouse |
| 8 | Acessibilidade: h1 único, hierarquia h2/h3, accordion FAQ operável por teclado, contraste AA nos textos sobre dark e cream | Lighthouse a11y ≥ 90 |
| 9 | `/videos-ia` e `/diagnostico` continuam pixel-idênticas (o F3 não pode vazar estilo) | visual diff manual das 2 rotas |
| 10 | Nenhum texto `[VERIFICAR]` do SPEC renderizado em produção — itens pendentes ficam ocultos, não publicados | grep + revisão visual |

---

## 3. O que está FORA do escopo deste plano

- Refatorar `ui/` das LPs antigas para componentes compartilhados.
- Criar OG image (pedir ao design; usar `DEFAULT_OG_IMAGE_URL` até lá).
- Instalar analytics/pixels (não há GTM/GA4/Meta Pixel no projeto hoje — decisão do cliente).
- Resolver a divergência de número de WhatsApp nas LPs antigas (apenas reportar).
- Produzir o vídeo demo da seção AIVideos (placeholder com poster até o cliente entregar).

## 4. Pendências a resolver com o cliente (lista consolidada dos `[VERIFICAR]` do SPEC)

1. Número de WhatsApp dedicado à vertical MED? (default: `5585988776405`)
2. Números exatos dos cases Camed/OROlaser e autorização de uso nesta página.
3. Depoimentos reais de médicos (nome, especialidade, autorização) — bloco fica oculto até existir.
4. Afirmação "nenhum cliente autuado" — pode ser feita?
5. Vídeo demo para a seção Vídeos com IA.
6. Vigência dos selos Google Partner / RD Partner.
7. Âncora de preço pública no FAQ (sim/não e valor).
8. OG image 1200×630 dedicada.
