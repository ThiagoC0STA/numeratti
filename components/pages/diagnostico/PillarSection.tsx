import RevealOnScroll from "./ui/RevealOnScroll";

const pillars = [
  {
    n: "01",
    title: "Oferta e Posicionamento",
    desc: "Avaliamos clareza de proposta de valor, diferenciação real e fit com a dor do cliente. Antes de promover, é preciso ter algo promovível.",
    keyword: "Oferta",
    points: ["Proposta de valor", "Diferenciação", "Fit com a dor"],
  },
  {
    n: "02",
    title: "Funil e Jornada de Conversão",
    desc: "Mapeamos cada ponto de contato — da primeira impressão à venda. Identificamos onde o lead trava, hesita ou desiste.",
    keyword: "Funil",
    points: ["Pontos de contato", "Bloqueios", "Taxa de conversão"],
  },
  {
    n: "03",
    title: "Ativos e Comunicação",
    desc: "Análise de criativos, copy, landing pages e materiais de venda. Avaliamos o que comunica autoridade e o que afasta o cliente certo.",
    keyword: "Ativos",
    points: ["Criativos", "Copy & páginas", "Materiais de venda"],
  },
  {
    n: "04",
    title: "Canais e Infraestrutura de Dados",
    desc: "Pixel, conversões offline, CRM, GA4, atribuição. Sem dados confiáveis, decisões viram chute. Auditamos o que você consegue medir de verdade.",
    keyword: "Dados",
    points: ["Tracking & CAPI", "CRM e atribuição", "GA4 e dashboards"],
  },
  {
    n: "05",
    title: "Operação e Capacidade de Escala",
    desc: "Time comercial, atendimento, processos. Mais leads sem operação preparada vira gargalo. Verificamos se o motor aguenta o tráfego.",
    keyword: "Operação",
    points: ["Time comercial", "SLA de atendimento", "Capacidade de entrega"],
  },
];

export default function PillarSection() {
  return (
    <section id="solucao" className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <div className="grid-bg-dark absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <RevealOnScroll>
            <span className="tag tag-light">A Solução</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="display display-tight text-ink text-3xl md:text-5xl lg:text-[56px] mt-3 leading-[1]">
              Auditamos os 5 pilares que determinam o{" "}
              <span className="kw">sucesso</span> da sua mídia
            </h2>
          </RevealOnScroll>
        </div>

        <div className="space-y-8">
          {pillars.map((pillar, i) => (
            <RevealOnScroll key={pillar.n} delay={0.05}>
              <PillarPanel
                pillar={pillar}
                next={pillars[i + 1]}
                isLast={i === pillars.length - 1}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarPanel({
  pillar,
  next,
  isLast,
}: {
  pillar: (typeof pillars)[number];
  next?: (typeof pillars)[number];
  isLast: boolean;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      <div className="lg:col-span-5">
        <div className="text-orange-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
          Pilar {pillar.n} de 05
        </div>
        <div className="display display-tight text-[100px] md:text-[160px] lg:text-[180px] leading-[0.8] text-ink tabular-nums">
          {pillar.n}
        </div>
        <div className="display text-orange-primary text-2xl md:text-3xl mt-1">
          / {pillar.keyword}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="cream-card p-6 md:p-8">
          <h3 className="display display-tight text-ink text-2xl md:text-3xl leading-[1.05] mb-3">
            {pillar.title}
          </h3>
          <p className="text-ink/65 text-sm md:text-base leading-relaxed">{pillar.desc}</p>

          <ul className="mt-5 grid sm:grid-cols-3 gap-2.5">
            {pillar.points.map((pt) => (
              <li
                key={pt}
                className="flex items-center gap-2 text-xs md:text-sm text-ink/70 bg-cream-dark/60 rounded-xl px-3 py-2 border border-orange-primary/15"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-primary shrink-0" />
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between gap-3 text-xs">
            <span className="uppercase tracking-[0.2em] text-ink/45 font-semibold">
              {String(parseInt(pillar.n))} de {pillars.length} pilares
            </span>
            {!isLast && next ? (
              <span className="inline-flex items-center gap-2 text-orange-primary font-semibold uppercase tracking-[0.18em]">
                Próximo: {next.keyword}
                <ArrowRight />
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold uppercase tracking-[0.18em]">
                Pilar final
                <CheckIcon />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
