"use client";
import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";
import { currentYear } from "@/lib/lp-year";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-premium-dark noise pt-28 md:pt-36 pb-32">
      <div className="orb w-[640px] h-[640px] -top-40 -right-40" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,116,12,0.45), transparent 60%)",
          }}
        />
      </div>
      <div className="orb w-[520px] h-[520px] bottom-[-200px] left-[-160px]" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,116,12,0.28), transparent 60%)",
          }}
        />
      </div>

      <div className="grid-bg absolute inset-0 opacity-60" />
      <Particles count={22} />

      <div
        aria-hidden
        className="deco-num absolute -right-10 md:right-10 top-24 text-[260px] md:text-[420px] text-white/[0.03] select-none"
      >
        {currentYear()}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div
              className="lp-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-primary/30 bg-orange-primary/10 text-orange-light text-xs font-semibold tracking-[0.18em] uppercase mb-8"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-primary animate-pulse" />
              Decisões de mídia baseadas em dados
            </div>

            <h1
              className="lp-fade-up display text-white text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-tight max-w-5xl"
              style={{ animationDelay: "0.27s" }}
            >
              Antes de investir em tráfego pago,
              <br />
              descubra se sua empresa está{" "}
              <span className="relative inline-block">
                <span className="kw">pronta para escalar</span>
                <span
                  className="absolute left-0 right-0 -bottom-2 h-[3px] bg-orange-primary origin-left lp-underline-grow"
                  aria-hidden
                />
              </span>
            </h1>

            <p
              className="lp-fade-up mt-8 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ animationDelay: "0.39s" }}
            >
              Em {currentYear()}, o custo de mídia subiu{" "}
              <span className="text-white font-semibold">12%</span>. A margem de erro é quase zero.
              O <span className="text-white font-semibold">Diagnóstico de Escala Digital</span>{" "}
              audita os 5 pilares críticos do seu negócio e entrega um Score de Prontidão + Roadmap
              de 30 dias.
            </p>

            <div
              className="lp-fade-up mt-10 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "0.51s" }}
            >
              <GlowButton size="lg">
                Solicitar Meu Diagnóstico
                <span className="ml-1">→</span>
              </GlowButton>
              <a
                href="#metodologia"
                className="text-white/70 hover:text-white text-sm font-medium underline-offset-4 hover:underline transition"
              >
                Como funciona →
              </a>
            </div>

            <ul
              className="lp-fade-up mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55"
              style={{ animationDelay: "0.63s" }}
            >
              {[
                "Entrega em até 5 dias úteis",
                "Mais de 40 pontos auditados",
                "Roadmap com responsáveis",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <CheckIcon /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="lp-fade-up lg:col-span-4 relative"
            style={{ animationDelay: "0.75s" }}
          >
            <FloatingScoreCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E8740C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function FloatingScoreCard() {
  return (
    <div className="glass p-6 max-w-sm mx-auto relative lp-float-y">
      <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-orange-primary text-white text-[10px] uppercase tracking-[0.15em] font-bold shadow-lg">
        Preview
      </div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">
        Score de Prontidão
      </div>
      <div className="display text-white text-6xl mt-2">
        57<span className="text-white/30 text-3xl">/100</span>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        Ajustes Necessários
      </div>

      <div className="mt-6 space-y-3">
        {[
          { l: "Oferta", v: 62 },
          { l: "Funil", v: 45 },
          { l: "Dados", v: 38 },
        ].map((b) => (
          <div key={b.l}>
            <div className="flex justify-between text-[11px] text-white/60 mb-1">
              <span>{b.l}</span>
              <span>{b.v}</span>
            </div>
            <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FFB060] to-[#E8740C]"
                style={{
                  width: `${b.v}%`,
                  boxShadow: "0 0 12px rgba(232,116,12,0.6)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
