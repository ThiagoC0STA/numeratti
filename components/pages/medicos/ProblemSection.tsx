import RevealOnScroll from "./ui/RevealOnScroll";

const rows = [
  {
    n: "01",
    title: "Agenda na mão da sorte",
    desc: "Um mês cheio, outro vazio. Sem uma fonte previsível de novos pacientes, não dá para planejar faturamento, equipe ou crescimento.",
  },
  {
    n: "02",
    title: "Refém de indicação e convênio",
    desc: "Indicação não cresce quando você quer e o convênio paga pouco. Falta um canal que você controla para atrair pacientes particulares.",
  },
  {
    n: "03",
    title: "Quem não aparece, não é escolhido",
    desc: "O paciente pesquisa antes de marcar. Sem presença nos anúncios certos, ele encontra o concorrente primeiro.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problema" className="relative bg-premium-dark noise py-24 md:py-32 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="orb w-[520px] h-[520px] -top-40 -left-40" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.16), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Coluna fixa: declaração */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <RevealOnScroll>
                <span className="mono text-orange-primary text-[11px] uppercase tracking-[0.28em]">
                  / diagnóstico
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="display display-tight text-white text-3xl md:text-5xl lg:text-[52px] mt-5 leading-[1.02]">
                  O problema não é falta de pacientes. É falta de um canal que{" "}
                  <span className="kw">você controla.</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="mt-7 text-white/55 text-base md:text-lg leading-relaxed max-w-md">
                  Tráfego pago liga um canal previsível: coloca seu consultório na frente de quem já
                  procura e acelera quando a agenda abre.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Coluna de linhas numeradas (estilo prontuário) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
              {rows.map((r, i) => (
                <RevealOnScroll key={r.n} delay={i * 0.1}>
                  <div className="group flex items-start gap-6 md:gap-8 py-8 md:py-10 transition-colors">
                    <div className="ghost-num text-5xl md:text-7xl shrink-0 w-16 md:w-24 transition-all group-hover:[-webkit-text-stroke:1.5px_rgba(232,116,12,0.9)]">
                      {r.n}
                    </div>
                    <div className="pt-1">
                      <h3 className="display text-white text-xl md:text-2xl leading-tight mb-2">
                        {r.title}
                      </h3>
                      <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-xl">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
