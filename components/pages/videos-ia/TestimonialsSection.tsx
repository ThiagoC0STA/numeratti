"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const testimonials = [
  {
    quote: "Precisava de criativos novos toda semana pro Meta Ads. Com a Numeratti, chegaram em 48h e convertendo. Não volto mais pra produtora.",
    name: "Rafael M.",
    role: "Gestor de Tráfego",
    stars: 5,
  },
  {
    quote: "Meu e-commerce precisava de vídeos de produto mas o orçamento era apertado. O resultado da Numeratti superou minhas expectativas de qualidade.",
    name: "Camila S.",
    role: "Dona de e-commerce de moda",
    stars: 5,
  },
  {
    quote: "Usei no lançamento do meu curso. O vídeo de VSL ficou profissional demais. Minha audiência não acreditou que era IA.",
    name: "Lucas F.",
    role: "Infoprodutor",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Depoimentos</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Quem usou,{" "}
            <span className="grad-text">aprovou.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.08}>
              <div
                className="glass-card p-7 h-full flex flex-col gap-5"
                style={{ background: "var(--surface)" }}
              >
                <Stars count={t.stars} />

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "var(--grad-accent)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-dim)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.25}>
          <p className="text-center mt-10 text-sm italic" style={{ color: "var(--text-dim)" }}>
            ⚠️ Substitua por depoimentos reais de clientes antes de publicar.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
