"use client";
import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative py-36 md:py-48 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #0D0B1A 0%, #040406 70%)" }}
    >
      <div className="dot-grid absolute inset-0" aria-hidden />
      <Particles count={16} />

      {/* Central glow */}
      <div
        className="orb w-[800px] h-[800px] left-1/2 top-1/2"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(129,140,248,0.18), rgba(129,140,248,0.08) 50%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <RevealOnScroll delay={0.05}>
          <span className="tag mb-8 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-2)" }} />
            Comece hoje
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2
            className="display text-white text-4xl md:text-6xl lg:text-[72px]"
            style={{ lineHeight: 0.96, letterSpacing: "-0.04em" }}
          >
            Seu concorrente já está{" "}
            <span className="grad-text">usando IA.</span>
            <br />
            E você?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18}>
          <p
            className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Enquanto você ainda paga caro por produção tradicional, quem usa IA já está veiculando mais anúncios, testando mais criativos e convertendo mais.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.26}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton size="lg">
              Quero meu vídeo agora →
            </GlowButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.34}>
          <ul
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            {[
              "Briefing em 5 minutos",
              "Prazo ágil garantido",
              "Satisfação garantida",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <CheckIcon />
                {s}
              </li>
            ))}
          </ul>
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
