"use client";
import AnimatedCounter from "./ui/AnimatedCounter";
import { currentYear } from "@/lib/lp-year";

const stats = [
  { value: 12, suffix: "%", unit: "", label: `aumento no custo Meta Ads em ${currentYear()}` },
  { value: 40, suffix: "%", unit: "", label: "do orçamento de mídia desperdiçado" },
  { value: 200, suffix: "+", unit: "", label: "empresas confiam na Numeratti" },
  { value: 5, suffix: "", unit: "pilares", label: "auditados em cada diagnóstico" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-cream py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="tag tag-light">O Cenário</span>
            <h2 className="display display-tight text-3xl md:text-5xl mt-4 max-w-2xl text-ink">
              Em {currentYear()}, errar é mais caro <span className="kw">do que nunca.</span>
            </h2>
          </div>
          <p className="text-ink/60 max-w-xs text-sm leading-relaxed">
            Os dados mostram um mercado mais competitivo, mais caro e menos perdoador.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-7 md:p-10 relative group hover:bg-cream-dark transition-colors lp-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-2 text-orange-primary mb-3">
                <ArrowUp />
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold">Em alta</span>
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <div className="display display-tight text-5xl md:text-6xl text-ink leading-none tabular-nums">
                  <AnimatedCounter to={s.value} suffix={s.suffix} duration={1.6} />
                </div>
                {s.unit && (
                  <div className="text-ink/45 text-sm uppercase tracking-[0.2em] font-semibold">
                    {s.unit}
                  </div>
                )}
              </div>
              <div className="mt-4 text-ink/60 text-sm leading-relaxed max-w-[220px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowUp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}
