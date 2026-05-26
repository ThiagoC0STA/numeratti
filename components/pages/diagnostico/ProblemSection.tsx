import RevealOnScroll from "./ui/RevealOnScroll";

const cards = [
  {
    title: "CPL baixo, vendas não acontecem",
    desc: "Leads baratos, mas o time comercial reclama da qualidade. O funil atrai curiosos ao invés de compradores.",
    icon: <IconFunnel />,
  },
  {
    title: "Investimento sobe, resultado estagna",
    desc: "Você dobra a verba, mas o CPA sobe junto. A estrutura não acompanha o volume gerado.",
    icon: <IconChart />,
  },
  {
    title: "Sem visibilidade dos resultados",
    desc: "Não sabe se a venda veio do Google ou Instagram. Sem tracking confiável, escalar é arriscado.",
    icon: <IconEye />,
  },
];

export default function ProblemSection() {
  return (
    <section id="problema" className="relative bg-premium-dark noise py-28 md:py-36 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div
        className="orb w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.18), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-4xl">
          <RevealOnScroll>
            <span className="tag tag-dark">O Problema</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="display text-white text-4xl md:text-6xl lg:text-7xl mt-6 leading-[0.98]">
              Por que 7 em cada 10 empresas <span className="kw">desperdiçam</span> dinheiro em tráfego pago?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-8 text-white/55 text-lg max-w-2xl leading-relaxed">
              A maioria não falha por causa do anúncio. Falha por tudo que vem antes e depois dele. O tráfego pago apenas amplifica problemas que já existem.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <div className="glass p-8 group relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-orange-primary/10 border border-orange-primary/20 grid place-items-center text-orange-primary mb-6 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="display text-white text-2xl leading-tight mb-3">{c.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
                <div
                  className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(232,116,12,0.18), transparent 70%)",
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconFunnel() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h18l-7 9v6l-4 2v-8L3 4z" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 5-7" />
      <circle cx="20" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeOpacity="0.4" />
    </svg>
  );
}
