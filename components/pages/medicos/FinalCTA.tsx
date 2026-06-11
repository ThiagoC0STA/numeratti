import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";
import RevealOnScroll from "./ui/RevealOnScroll";
import EcgLine from "./ui/EcgLine";

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

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <RevealOnScroll>
          <div className="max-w-md mx-auto mb-8 opacity-80">
            <EcgLine color="#e8740c" speed="3.5s" height={44} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="display display-tight text-white text-3xl md:text-5xl lg:text-6xl leading-[1.04]">
            Comece com um raio-X completo da sua captação — <span className="kw">grátis.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-7 text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Diagnóstico gratuito do potencial de tráfego pago da sua especialidade: quanto custa um
            paciente, quanta busca existe na sua cidade e o que está travando sua agenda hoje.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-11 flex justify-center">
            <GlowButton size="lg">
              Quero meu diagnóstico gratuito
              <span className="ml-1">→</span>
            </GlowButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/55">
            {["Sem contrato de fidelidade", "Resposta em horário comercial"].map((s) => (
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8740C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
