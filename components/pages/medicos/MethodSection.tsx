import RevealOnScroll from "./ui/RevealOnScroll";
import GlowButton from "./ui/GlowButton";

const steps = [
  {
    code: "01",
    label: "diagnóstico",
    title: "Diagnóstico gratuito",
    desc: "Mapeamos o potencial de busca da sua especialidade na sua cidade e a concorrência ativa nos anúncios.",
    offset: "lg:mt-24",
  },
  {
    code: "02",
    label: "busca",
    title: "Google Ads",
    desc: "Campanhas para quem pesquisa sua especialidade na sua cidade. A demanda mais quente que existe.",
    offset: "lg:mt-16",
  },
  {
    code: "03",
    label: "alcance",
    title: "Meta Ads",
    desc: "Campanhas para ampliar alcance e reativar quem já demonstrou interesse no seu consultório.",
    offset: "lg:mt-8",
  },
  {
    code: "04",
    label: "resultado",
    title: "Mensuração por consulta",
    desc: "Acompanhamos cada lead até virar agendamento e relatamos quanto custou cada consulta.",
    offset: "lg:mt-0",
  },
];

export default function MethodSection() {
  return (
    <section id="metodo" className="relative bg-premium-dark noise py-24 md:py-32 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="orb w-[640px] h-[640px] right-[-160px] top-1/4" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,116,12,0.14), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <RevealOnScroll>
            <span className="mono text-orange-primary text-[11px] uppercase tracking-[0.28em]">
              / como funciona
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="display display-tight text-white text-3xl md:text-5xl lg:text-6xl mt-5 leading-[1.02]">
              Tráfego pago que vira <span className="kw">consulta agendada.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 text-white/55 text-lg max-w-2xl leading-relaxed">
              Cuidamos das campanhas de ponta a ponta. Quatro passos que sobem a sua agenda mês após
              mês, medidos pelo que importa.
            </p>
          </RevealOnScroll>
        </div>

        {/* Escada ascendente: a agenda sobe da esquerda para a direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.code} delay={i * 0.1} className={s.offset}>
              <div className="relative h-full cream-card p-6 md:p-7 overflow-hidden">
                <div className="ghost-num text-6xl md:text-7xl mb-5">{s.code}</div>
                <span className="mono text-[color:var(--med-clinical)] text-[10px] uppercase tracking-[0.2em]">
                  / {s.label}
                </span>
                <h3 className="display text-white text-xl md:text-2xl mt-2 mb-2.5 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Destaque: o que mais entregamos além da gestão */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-5 rounded-[22px] border border-orange-primary/25 bg-orange-primary/[0.06] p-6 md:p-7">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-orange-primary/15 grid place-items-center text-orange-primary">
              <IconScript />
            </div>
            <p className="text-white/75 text-base md:text-lg leading-relaxed">
              <span className="text-white font-semibold">Roteiro por nossa conta.</span>{" "}
              Sugerimos o roteiro de cada anúncio com base no que seus pacientes mais pesquisam, para
              a campanha falar a língua de quem você quer atender.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12 flex justify-center">
            <GlowButton size="lg">
              Quero esse sistema no meu consultório
              <span className="ml-1">→</span>
            </GlowButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function IconScript() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 3h10l4 4v14a0 0 0 010 0H5a0 0 0 010 0V3z" />
      <path d="M14 3v4h4M8 12h8M8 16h6" />
    </svg>
  );
}
