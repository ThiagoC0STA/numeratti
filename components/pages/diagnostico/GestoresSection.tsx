import RevealOnScroll from "./ui/RevealOnScroll";

const cards = [
  {
    title: "Filtro de Qualificação",
    desc: "Detecte clientes problemáticos antes da primeira campanha. Você decide quem aceita — com dados na mão.",
    icon: <IconShield />,
  },
  {
    title: "Posicionamento Estratégico",
    desc: "Você deixa de vender só execução de mídia. Vira o consultor que olha o negócio inteiro antes de gastar.",
    icon: <IconMedal />,
  },
  {
    title: "Receita Independente",
    desc: "Produto pago, com ticket próprio. Receita que entra antes mesmo de uma campanha ir ao ar.",
    icon: <IconCash />,
  },
];

export default function GestoresSection() {
  return (
    <section className="relative bg-premium-dark noise py-28 md:py-36 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div
        className="orb w-[500px] h-[500px] -bottom-40 -left-20"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,116,12,0.18), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <RevealOnScroll>
              <span className="tag tag-dark">Para Gestores de Tráfego</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="display text-white text-4xl md:text-6xl lg:text-7xl mt-6 leading-[0.98]">
                Transforme o diagnóstico em <span className="kw">autoridade</span> e receita
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.2} className="lg:col-span-4">
            <p className="text-white/55 text-base md:text-lg leading-relaxed">
              Existe cliente que vai dar dor de cabeça antes da primeira campanha rodar. O Diagnóstico resolve isso antes de virar seu problema.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <div className="glass p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-primary/10 border border-orange-primary/25 grid place-items-center text-orange-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {c.icon}
                </div>
                <h3 className="display text-white text-2xl mb-3 leading-tight">{c.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconMedal() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="6" />
      <path d="M12 14l-2-3M12 14l2-3M8 4l4 7 4-7M6 2l3 5M18 2l-3 5" />
      <circle cx="12" cy="14" r="2.5" />
    </svg>
  );
}
function IconCash() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 7H9.5a2.5 2.5 0 000 5h5a2.5 2.5 0 010 5H7" />
    </svg>
  );
}
