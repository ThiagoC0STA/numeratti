import RevealOnScroll from "./ui/RevealOnScroll";

const steps = [
  {
    letter: "D",
    code: "01",
    title: "Diagnosticar",
    duration: "Dia 1 — 2",
    desc: "Coletamos dados de plataformas, CRM e operação. Mapeamento dos 5 pilares.",
    bullets: ["Acesso aos canais de mídia", "Leitura do CRM e GA4", "Entrevistas com o time"],
    icon: <IconScan />,
  },
  {
    letter: "A",
    code: "02",
    title: "Analisar",
    duration: "Dia 2 — 3",
    desc: "Cruzamos números com contexto. IA processa volume, time interpreta.",
    bullets: ["Análise quantitativa", "Padrões e anomalias", "Validação humana"],
    icon: <IconBrain />,
  },
  {
    letter: "P",
    code: "03",
    title: "Priorizar",
    duration: "Dia 4",
    desc: "Classificamos os achados por impacto × esforço. Foco no que move o ponteiro primeiro.",
    bullets: ["Matriz ICE", "Score por gargalo", "Quick-wins primeiro"],
    icon: <IconTarget />,
  },
  {
    letter: "D",
    code: "04",
    title: "Direcionar",
    duration: "Dia 5",
    desc: "Roadmap acionável de 30 dias com responsáveis e metas claras.",
    bullets: ["Roadmap 4 semanas", "Responsáveis definidos", "Métricas de saída"],
    icon: <IconRoute />,
  },
];

export default function MethodologyFlowchart() {
  return (
    <section
      id="metodologia"
      className="relative bg-premium-dark noise py-28 md:py-36 overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="orb w-[700px] h-[700px] left-1/2 -translate-x-1/2 top-1/3" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,116,12,0.15), transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <span className="tag tag-dark">Metodologia · Framework Proprietário</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="display display-tight text-white text-4xl md:text-6xl lg:text-7xl mt-6 leading-[0.95]">
                Ciclo <span className="kw">D.A.P.D.</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-6 text-white/55 text-lg max-w-xl leading-relaxed">
                Quatro etapas estruturadas. Cada uma com inputs, processo e entregável próprios —
                para clareza total sobre a maturidade digital do seu negócio.
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            {[
              { v: "5", l: "dias úteis" },
              { v: "40+", l: "pontos auditados" },
              { v: "30", l: "dias de roadmap" },
            ].map((k) => (
              <div
                key={k.l}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-4"
              >
                <div className="display text-white text-3xl leading-none">{k.v}</div>
                <div className="text-white/50 text-[11px] uppercase tracking-[0.18em] mt-2 font-semibold">
                  {k.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[7%] right-[7%] top-7 h-px z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-primary via-orange-primary to-orange-primary/0" />
          </div>

          <div className="lg:hidden absolute left-7 top-7 bottom-0 w-px pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-primary via-orange-primary to-orange-primary/0" />
          </div>

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 0.12}>
                <Step step={s} />
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll>
          <div className="mt-20 flex items-center gap-4 justify-center">
            <span className="h-px flex-1 max-w-[120px] bg-white/10" />
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-orange-primary/30 bg-orange-primary/5 text-orange-light/80 text-xs uppercase tracking-[0.22em] font-semibold">
              <CycleIcon /> Ciclo Contínuo · Mensurável
            </div>
            <span className="h-px flex-1 max-w-[120px] bg-white/10" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Step({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="relative pl-20 lg:pl-0">
      <div className="relative lg:flex lg:flex-col lg:items-start">
        <div className="absolute lg:relative left-0 lg:left-auto top-0 lg:top-auto z-10">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full bg-ink-bg border border-orange-primary/40 shadow-[0_0_24px_rgba(232,116,12,0.35)]" />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(232,116,12,0.35), transparent 70%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="display text-white text-2xl">{step.letter}</span>
            </div>
          </div>
        </div>

        <div className="lg:mt-8">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-orange-primary text-[10px] uppercase tracking-[0.22em] font-bold tabular-nums">
              Etapa {step.code}
            </span>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.18em]">
              {step.duration}
            </span>
          </div>

          <h3 className="display display-tight text-white text-2xl mb-2 leading-tight">
            {step.title}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed mb-5">{step.desc}</p>

          <ul className="space-y-2 border-t border-white/[0.06] pt-4">
            {step.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-white/70 text-[13px] leading-snug"
              >
                <span className="mt-[6px] w-1 h-1 rounded-full bg-orange-primary shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function IconScan() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 12h10" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a4 4 0 00-4 4v1a3 3 0 00-3 3v2a3 3 0 001.5 2.6A3 3 0 008 18a4 4 0 008 0 3 3 0 001.5-3.4A3 3 0 0019 12v-2a3 3 0 00-3-3V6a4 4 0 00-4-4z" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}
function IconRoute() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h7a4 4 0 000-8H9a4 4 0 010-8h7" />
    </svg>
  );
}
function CycleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 11-3-6.7L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}
