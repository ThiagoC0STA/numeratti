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
    desc: "Campanhas para ampliar alcance e reimpactar quem já demonstrou interesse no seu consultório.",
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

const rxLines = [
  "Construído sobre o que os pacientes da sua especialidade pesquisam",
  "Linguagem dentro da norma de publicidade médica",
  "Validado por você antes de qualquer campanha ir ao ar",
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
              Gestão de campanhas que vira <span className="kw">consulta agendada.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 text-white/55 text-lg max-w-2xl leading-relaxed">
              Cuidamos das suas campanhas de ponta a ponta. Quatro passos que sobem a sua agenda mês
              após mês, medidos pelo que importa.
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

        {/* Receituário: o roteiro do anúncio sai daqui */}
        <RevealOnScroll delay={0.1}>
          <div
            className="relative mt-12 rounded-[22px] p-7 md:p-10 overflow-hidden"
            style={{ background: "#fdf8f3", color: "#111111", boxShadow: "0 40px 80px -40px rgba(232,116,12,0.35)" }}
          >
            <div className="relative grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <span className="mono text-[10px] uppercase tracking-[0.24em]" style={{ color: "#0d9488" }}>
                  receituário do anúncio
                </span>
                <h3
                  className="text-2xl md:text-4xl mt-3 leading-[1.05]"
                  style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 700, letterSpacing: "-0.03em" }}
                >
                  O roteiro de cada anúncio é <span style={{ color: "#d4680a" }}>construído por nós.</span>
                </h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "rgba(17,17,17,0.7)" }}>
                  Você não precisa pensar no que dizer. Entregamos o roteiro pronto para cada campanha
                  e você só valida.
                </p>

                <ul className="mt-6 space-y-0">
                  {rxLines.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 py-3 text-sm md:text-base"
                      style={{ borderBottom: "1px dashed rgba(17,17,17,0.18)", color: "rgba(17,17,17,0.85)" }}
                    >
                      <svg className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4680a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-2">
                <div className="lg:text-right">
                  <div
                    className="display text-xl"
                    style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 700, color: "#111111" }}
                  >
                    Numeratti MED
                  </div>
                  <div
                    className="mono text-[10px] uppercase tracking-[0.2em] pt-2 mt-1"
                    style={{ borderTop: "1px solid rgba(17,17,17,0.4)", color: "rgba(17,17,17,0.5)" }}
                  >
                    responsável pelo roteiro
                  </div>
                </div>
              </div>
            </div>
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
