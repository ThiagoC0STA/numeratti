import RevealOnScroll from "./ui/RevealOnScroll";

const cards = [
  {
    title: "IA como Ferramenta",
    desc: "Processamento de grandes volumes de dados em minutos. Identificação de padrões e anomalias que humanos levariam dias para encontrar.",
    icon: <IconBulb />,
  },
  {
    title: "Análise Humana",
    desc: "Cada insight gerado pela IA passa pelo crivo de profissionais com anos de operação real em mídia, funis e vendas.",
    icon: <IconPerson />,
  },
  {
    title: "Atuação em +17 Plataformas",
    desc: "Meta, Google, TikTok, LinkedIn, GA4, HubSpot, RD Station, Pipedrive e mais. Auditamos onde sua operação realmente vive.",
    icon: <IconMonitor />,
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <div className="grid-bg-dark absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="deco-num absolute -left-6 bottom-10 text-[180px] md:text-[260px] text-orange-primary/[0.05] select-none leading-none"
      >
        N
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <span className="tag tag-light">Sobre a Numeratti</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="display text-ink text-4xl md:text-6xl mt-6 leading-[0.98]">
                Consultoria de Performance Digital orientada por <span className="kw">dados</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-8 text-ink/65 text-base md:text-lg leading-relaxed">
                Com sede em Fortaleza e atuação em todo o Brasil, a Numeratti nasceu para resolver um problema simples: empresas investem em tráfego pago sem saber se estão prontas para isso. Combinamos <strong className="text-ink">inteligência artificial como ferramenta auxiliadora</strong> com <strong className="text-ink">análise humana criteriosa</strong> — porque dados sem interpretação estratégica são apenas números, e números sem contexto não geram decisão.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <p className="mt-6 text-ink/65 text-base md:text-lg leading-relaxed">
                Nossa equipe utiliza IA para processar grandes volumes de dados, identificar padrões em campanhas e acelerar diagnósticos — mas cada insight passa pelo crivo de profissionais com experiência real em mídia paga, funis de conversão e operação comercial. O resultado é um diagnóstico que não é genérico: é cirúrgico, acionável e feito sob medida para o seu negócio.
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {cards.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 0.1}>
                <div className="cream-card p-6 flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-light grid place-items-center text-orange-primary shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="display text-ink text-xl leading-tight">{c.title}</h3>
                    <p className="text-ink/60 text-sm mt-2 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBulb() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c1 1 1.5 2 1.5 3.3h5c0-1.3.5-2.3 1.5-3.3A7 7 0 0012 2z" />
    </svg>
  );
}
function IconPerson() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0116 0" />
    </svg>
  );
}
function IconMonitor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 8l3 3 3-3 3 3 3-4" stroke="currentColor" strokeOpacity="0.6" />
    </svg>
  );
}
