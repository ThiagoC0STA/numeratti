"use client";
import GlowButton from "./ui/GlowButton";
import RevealOnScroll from "./ui/RevealOnScroll";

const plans = [
  {
    name: "Starter",
    price: "297",
    desc: "Perfeito para testar e criar seu primeiro criativo com IA.",
    highlight: false,
    features: [
      "1 vídeo até 60 segundos",
      "Roteiro escrito por IA",
      "Narração em português",
      "Legenda automática",
      "1 revisão inclusa",
      "Entrega em prazo ágil",
    ],
  },
  {
    name: "Growth",
    price: "697",
    desc: "O favorito de gestores de tráfego e e-commerces que testam criativos.",
    highlight: true,
    badge: "Mais popular",
    features: [
      "3 vídeos até 60 segundos",
      "Roteiro escrito por IA",
      "Narração em português",
      "Legenda automática",
      "2 revisões por vídeo",
      "Entrega em prazo ágil",
      "Prioridade na fila",
    ],
  },
  {
    name: "Scale",
    price: "1.297",
    desc: "Para agências e operações que precisam de volume e velocidade.",
    highlight: false,
    features: [
      "8 vídeos até 60 segundos",
      "Roteiro escrito por IA",
      "Narração em português",
      "Legenda automática",
      "3 revisões por vídeo",
      "Entrega em prazo ágil",
      "Prioridade máxima",
      "Gestor dedicado",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="precos"
      className="py-24 md:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Preços</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Simples, transparente,{" "}
            <span className="grad-text">sem surpresas.</span>
          </h2>
          <p className="mt-5 text-base" style={{ color: "var(--text-muted)" }}>
            Escolha o plano que se encaixa no seu volume. Todos incluem roteiro, narração e legenda.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 0.08}>
              <div
                className="relative rounded-2xl p-8 h-full flex flex-col"
                style={{
                  background: plan.highlight ? "var(--surface-2)" : "var(--bg)",
                  border: plan.highlight
                    ? "1px solid rgba(129,140,248,0.5)"
                    : "1px solid var(--border)",
                  boxShadow: plan.highlight
                    ? "0 0 50px rgba(129,140,248,0.15)"
                    : "none",
                }}
              >
                {plan.highlight && plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider"
                    style={{ background: "var(--grad-accent)" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>R$</span>
                    <span
                      className="display text-5xl text-white"
                      style={{ letterSpacing: "-0.04em", lineHeight: 1 }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs" style={{ color: "var(--text-dim)" }}>por pacote · pagamento único</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                      <CheckIcon highlight={plan.highlight} />
                      {f}
                    </li>
                  ))}
                </ul>

                <GlowButton
                  size="md"
                  variant={plan.highlight ? "primary" : "ghost"}
                  className="w-full justify-center"
                >
                  {plan.highlight ? "Começar agora →" : "Escolher plano"}
                </GlowButton>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3}>
          <p className="text-center mt-10 text-sm" style={{ color: "var(--text-dim)" }}>
            Precisa de volume maior ou white-label?{" "}
            <a
              href="https://api.whatsapp.com/send?phone=558581486404"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              Fale com a gente →
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function CheckIcon({ highlight }: { highlight?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: highlight ? "var(--accent)" : "var(--accent-2)", flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
