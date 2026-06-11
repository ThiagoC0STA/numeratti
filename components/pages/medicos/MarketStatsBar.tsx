"use client";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { value: 77, suffix: "%", label: "dos pacientes pesquisam online antes de agendar uma consulta", ref: "1" },
  { value: 70, suffix: "%+", label: "pesquisam o médico no Instagram antes de marcar", ref: "2" },
  { value: 80, suffix: "%", label: "escolhem o especialista com base no que encontram online", ref: "3" },
  { value: 654, suffix: " mil", label: "médicos no Brasil em 2025 — quem aparece primeiro, agenda", ref: "4" },
];

export default function MarketStatsBar() {
  return (
    <section id="dados" className="relative bg-cream py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-10">
          <span className="tag tag-dark">Por que tráfego pago</span>
          <h2 className="display display-tight text-white text-2xl md:text-4xl mt-4 leading-[1.1]">
            Seu próximo paciente está pesquisando agora. A pergunta é{" "}
            <span className="kw">se ele vai te encontrar.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-7 md:p-9 relative lp-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-baseline gap-1">
                <div className="display display-tight text-4xl md:text-5xl text-white leading-none tabular-nums">
                  <AnimatedCounter to={s.value} suffix={s.suffix} duration={1.6} />
                </div>
                <sup className="text-orange-primary text-xs font-bold">{s.ref}</sup>
              </div>
              <div className="mt-4 text-white/60 text-sm leading-relaxed max-w-[230px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-white/45 text-[11px] leading-relaxed">
          ¹ Think with Google · ² McKinsey · ³ Doctoralia · ⁴ Demografia Médica 2025 (USP/AMB)
        </p>
      </div>
    </section>
  );
}
