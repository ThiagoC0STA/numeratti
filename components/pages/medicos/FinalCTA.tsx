import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";
import RevealOnScroll from "./ui/RevealOnScroll";
import EcgLine from "./ui/EcgLine";

const cardRows = [
  { label: "procedimento", value: "Diagnóstico de captação" },
  { label: "formato", value: "Conversa no WhatsApp" },
  { label: "proposta", value: "Personalizada" },
];

export default function FinalCTA() {
  return (
    <section id="cta" className="relative bg-premium-dark noise py-28 md:py-40 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <Particles count={16} />
      <div className="orb w-[680px] h-[680px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,116,12,0.32), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <span className="mono text-orange-primary text-[11px] uppercase tracking-[0.28em]">
                / próximo passo
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="display display-tight text-white text-3xl md:text-5xl lg:text-6xl mt-5 leading-[1.04]">
                Sua agenda merece o mesmo cuidado que seus{" "}
                <span className="kw">pacientes recebem.</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-7 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Comece pelo diagnóstico gratuito: o potencial de busca da sua especialidade, a
                concorrência ativa na sua cidade e o que está travando sua captação hoje.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
                {["Sem contrato de fidelidade", "Resposta em horário comercial"].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <CheckIcon /> {s}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Cartão de agendamento */}
          <RevealOnScroll delay={0.25} className="lg:col-span-5">
            <div className="glass overflow-hidden">
              <div className="flex items-center justify-between px-6 pt-5 pb-3">
                <span className="mono text-white/50 text-[10px] uppercase tracking-[0.22em]">
                  cartão de agendamento
                </span>
                <span className="w-2 h-2 rounded-full bg-[color:var(--med-clinical)] ecg-pulse" />
              </div>

              <div className="px-3 opacity-70">
                <EcgLine color="#2dd4bf" speed="4s" height={32} />
              </div>

              <div className="px-6 pt-2 pb-5">
                {cardRows.map((r, i) => (
                  <div
                    key={r.label}
                    className="flex items-baseline gap-3 py-3"
                    style={{ borderBottom: i < cardRows.length - 1 ? "1px dashed rgba(255,255,255,0.12)" : "none" }}
                  >
                    <span className="mono text-white/40 text-[10px] uppercase tracking-[0.18em] w-28 shrink-0">
                      {r.label}
                    </span>
                    <span className="text-white text-sm md:text-base font-medium">{r.value}</span>
                  </div>
                ))}

                <div className="mt-6">
                  <GlowButton size="lg" className="w-full justify-center">
                    Agendar diagnóstico gratuito
                    <span className="ml-1">→</span>
                  </GlowButton>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8740C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
