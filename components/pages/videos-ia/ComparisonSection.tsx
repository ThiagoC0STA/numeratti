"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const rows = [
  { label: "Tempo de entrega",   before: "7 a 30 dias",              after: "" },
  { label: "Custo médio",        before: "R$ 2.000–R$ 8.000",        after: "" },
  { label: "Equipe necessária",  before: "Diretor, câmera, ator",    after: "Só você e um briefing" },
  { label: "Revisões",           before: "Cara e demorada",           after: "Inclusa no plano" },
  { label: "Escala",             before: "1 vídeo por vez",           after: "Múltiplos em paralelo" },
];

export default function ComparisonSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Antes × Depois</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4 max-w-2xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Produção tradicional vs.{" "}
            <span className="grad-text">Numeratti com IA.</span>
          </h2>
          <p className="mt-5 text-base" style={{ color: "var(--text-muted)" }}>
            Mesma qualidade profissional. Sem o custo, sem a espera, sem a dor de cabeça.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {/* Header */}
            <div
              className="grid grid-cols-3 text-xs font-bold uppercase tracking-[0.12em] px-6 py-4"
              style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)", color: "var(--text-dim)" }}
            >
              <div>Critério</div>
              <div
                className="text-center px-3 py-1 rounded-lg"
                style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)" }}
              >
                Produção tradicional
              </div>
              <div
                className="text-center px-3 py-1 rounded-lg"
                style={{ color: "var(--accent-2)", background: "rgba(129,140,248,0.08)" }}
              >
                Numeratti IA ✨
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-3 items-center px-6 py-4 text-sm transition-colors duration-200 hover:bg-white/[0.02]"
                style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <div className="font-medium" style={{ color: "var(--text)" }}>
                  {row.label}
                </div>

                <div className="text-center flex items-center justify-center gap-2" style={{ color: "#EF4444" }}>
                  <XIcon />
                  <span>{row.before}</span>
                </div>

                <div className="text-center flex items-center justify-center gap-2" style={{ color: "var(--accent-2)" }}>
                  {row.after ? (
                    <>
                      <CheckIcon />
                      <span className="font-semibold">{row.after}</span>
                    </>
                  ) : (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(129,140,248,0.12)",
                        color: "var(--accent)",
                        border: "1px solid rgba(129,140,248,0.25)",
                      }}
                    >
                      Consulte
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--accent-2)", flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "#EF4444", flexShrink: 0 }}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
