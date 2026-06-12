"use client";
import AnimatedCounter from "./ui/AnimatedCounter";
import RevealOnScroll from "./ui/RevealOnScroll";

/*
 * Estatísticas de mercado apresentadas como um LAUDO DE EXAME: papel claro
 * sobre fundo escuro, cabeçalho de laboratório, linhas com leaders pontilhados
 * e fonte mono nos resultados. Motivo visual exclusivo desta LP.
 */
const rows = [
  {
    exam: "Pacientes que pesquisam online antes de agendar",
    value: 77,
    suffix: "%",
    source: "Think with Google",
  },
  {
    exam: "Buscas sobre saúde no Google, por minuto",
    value: 70,
    suffix: " mil",
    source: "Google",
  },
  {
    exam: "Brasileiros que pesquisam saúde na internet",
    value: 94,
    suffix: "%",
    source: "Medicina S/A",
  },
  {
    exam: "Médicos no Brasil até o fim de 2025",
    value: 654,
    suffix: " mil",
    source: "Demografia Médica 2025",
  },
];

export default function MarketStatsBar() {
  return (
    <section id="dados" className="relative bg-premium-dark noise py-20 md:py-28 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-10">
          <RevealOnScroll>
            <span className="mono text-orange-primary text-[11px] uppercase tracking-[0.28em]">
              / leitura de mercado
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="display display-tight text-white text-3xl md:text-5xl mt-5 leading-[1.05]">
              Seu próximo paciente está pesquisando agora.{" "}
              <span className="kw">A pergunta é se ele vai te encontrar.</span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* O laudo */}
        <RevealOnScroll delay={0.15}>
          <div
            className="rounded-[22px] overflow-hidden"
            style={{ background: "#fdf8f3", color: "#111111", boxShadow: "0 40px 80px -40px rgba(232,116,12,0.35)" }}
          >
            {/* Cabeçalho do laudo */}
            <div
              className="mono flex flex-wrap items-center justify-between gap-3 px-6 md:px-8 py-4 text-[10px] uppercase tracking-[0.2em]"
              style={{ borderBottom: "2px solid #111111", color: "rgba(17,17,17,0.7)" }}
            >
              <span className="font-semibold" style={{ color: "#111111" }}>
                Laudo · mercado da saúde digital
              </span>
              <span>Paciente: seu consultório</span>
            </div>

            {/* Linhas do exame */}
            <div className="px-6 md:px-8 py-2">
              {rows.map((r, i) => (
                <div
                  key={r.exam}
                  className="flex items-baseline gap-4 py-4 md:py-5"
                  style={{ borderBottom: i < rows.length - 1 ? "1px dashed rgba(17,17,17,0.18)" : "none" }}
                >
                  <span className="text-sm md:text-base font-medium" style={{ color: "rgba(17,17,17,0.85)" }}>
                    {r.exam}
                  </span>
                  <span
                    className="flex-1 min-w-8 hidden sm:block translate-y-[-3px]"
                    style={{ borderBottom: "1px dotted rgba(17,17,17,0.3)" }}
                    aria-hidden
                  />
                  <span className="mono display-tight text-xl md:text-3xl font-semibold tabular-nums w-24 md:w-36 text-right shrink-0" style={{ color: "#d4680a" }}>
                    <AnimatedCounter to={r.value} suffix={r.suffix} duration={1.6} />
                  </span>
                  <span className="mono hidden md:block text-[10px] uppercase tracking-[0.12em] w-40 text-left shrink-0" style={{ color: "rgba(17,17,17,0.45)" }}>
                    {r.source}
                  </span>
                </div>
              ))}
            </div>

            {/* Interpretação */}
            <div
              className="px-6 md:px-8 py-4 flex flex-wrap items-center justify-between gap-3"
              style={{ background: "#fcebd8" }}
            >
              <p className="text-sm md:text-base font-semibold" style={{ color: "#111111" }}>
                Interpretação: quem aparece primeiro, agenda primeiro.
              </p>
              <span className="mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(17,17,17,0.5)" }}>
                fontes nominais ao lado de cada item
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
