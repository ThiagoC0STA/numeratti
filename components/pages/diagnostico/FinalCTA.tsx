import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function FinalCTA() {
  return (
    <section className="relative bg-premium-dark noise py-32 md:py-44 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <Particles count={20} />
      <div className="orb w-[700px] h-[700px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,116,12,0.32), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <RevealOnScroll delay={0.1}>
          <h2 className="display display-tight text-white text-4xl md:text-6xl lg:text-7xl leading-[0.98]">
            Cada dia sem diagnóstico é um dia investindo <span className="kw">no escuro</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-8 text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Com custo de mídia 12% mais caro e concorrência acelerada, a diferença entre crescer e desperdiçar está nos fundamentos.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-12 flex justify-center">
            <GlowButton size="lg">
              Solicitar Meu Diagnóstico
              <span className="ml-1">→</span>
            </GlowButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/55">
            {["Entrega em até 5 dias úteis", "100% confidencial", "Plano de ação claro"].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <CheckIcon /> {s}
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8740C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
