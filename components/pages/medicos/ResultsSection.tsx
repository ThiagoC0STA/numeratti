import RevealOnScroll from "./ui/RevealOnScroll";
import GlowButton from "./ui/GlowButton";
import AnimatedCounter from "./ui/AnimatedCounter";

/** Métricas reais da casa (fonte: lib/constants.ts → METRICS / ABOUT_STATS). */
const houseStats = [
  { to: 1.5, suffix: " bi", decimals: 1, label: "impressões entregues em campanhas ativas" },
  { to: 153, suffix: " mil", decimals: 0, label: "leads gerados em contas com rastreamento" },
  { to: 110, suffix: "+", decimals: 0, label: "clientes atendidos pela Numeratti" },
  { to: 17, suffix: "×", decimals: 0, label: "melhor ROAS registrado em campanha" },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="relative bg-premium-dark noise py-24 md:py-32 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="orb w-[560px] h-[560px] -left-40 top-1/3" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,116,12,0.16), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <RevealOnScroll>
            <span className="tag tag-dark">Quem vai gerir sua verba</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="display display-tight text-white text-3xl md:text-5xl lg:text-6xl mt-6 leading-[1.02]">
              Uma consultoria de performance que <span className="kw">mede o que entrega.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 text-white/55 text-lg max-w-2xl leading-relaxed">
              A Numeratti gerencia mídia paga em 17+ plataformas, de Fortaleza para o Brasil inteiro.
              Trazemos essa engenharia de tráfego para o consultório — com a camada de ética médica
              que o seu CRM exige.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.08]">
          {houseStats.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <div className="bg-[#0f0a05] p-7 md:p-9 h-full">
                <div className="display display-tight text-4xl md:text-5xl text-white leading-none tabular-nums">
                  <AnimatedCounter to={s.to} suffix={s.suffix} decimals={s.decimals} duration={1.8} />
                </div>
                <div className="mt-4 text-white/55 text-sm leading-relaxed max-w-[220px]">
                  {s.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Case real do setor de saúde/estética — sem inventar caso de médico PF */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-center glass p-8 md:p-10">
            <div className="lg:col-span-4">
              <div className="text-orange-primary text-[10px] uppercase tracking-[0.24em] font-bold mb-3">
                Case · Saúde &amp; Estética
              </div>
              <div className="display display-tight text-white text-5xl md:text-6xl leading-none">
                <span className="kw">16.250%</span>
              </div>
              <div className="mt-3 text-white/55 text-sm leading-relaxed">
                de crescimento na geração de leads entre 2023 e 2025.
              </div>
            </div>
            <div className="lg:col-span-8 lg:border-l border-white/10 lg:pl-10">
              <h3 className="display text-white text-2xl md:text-3xl leading-tight mb-3">
                OROlaser — complexo de estética com 20+ unidades no Nordeste
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                Performance multicanal que une visibilidade em massa com conversão de fundo de funil
                — a mesma estrutura de tráfego que aplicamos a consultórios e clínicas, agora medida
                em custo por consulta agendada.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 text-xs font-semibold uppercase tracking-[0.14em]">
                Google Partner
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 text-xs font-semibold uppercase tracking-[0.14em]">
                RD Station Partner
              </span>
            </div>
            <GlowButton size="lg">
              Quero resultados medidos assim
              <span className="ml-1">→</span>
            </GlowButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
