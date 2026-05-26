"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const cases = [
  {
    icon: <CartIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    category: "Anúncio de produto",
    title: "E-commerce de moda",
    desc: "Vídeo de 30s com apresentação de produto, narração e call-to-action. Taxa de clique 2,4× maior que foto estática.",
    badge: "Meta Ads",
  },
  {
    icon: <DumbbellIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    category: "Vídeo institucional",
    title: "Academia local",
    desc: "Apresentação da estrutura, diferenciais e oferta de matrícula. Usado em anúncio de Instagram e na landing page.",
    badge: "Institucional",
  },
  {
    icon: <MonitorIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    category: "Lançamento de infoproduto",
    title: "Curso online",
    desc: "Vídeo de VSL de 60s com avatar IA apresentando o curso, depoimentos e bônus. Converteu 9,3% na landing page.",
    badge: "VSL",
  },
  {
    icon: <UtensilsIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    category: "Promoção de negócio local",
    title: "Restaurante",
    desc: "Reels de 15s com imagens do cardápio, animação e oferta de fim de semana. Atingiu 40 mil views orgânicos.",
    badge: "Reels",
  },
  {
    icon: <BuildingIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    category: "Prestação de serviço",
    title: "Imobiliária",
    desc: "Vídeo de apresentação de imóvel com narração profissional e tour animado. Reduziu custo de produção em 80%.",
    badge: "Captação",
  },
  {
    icon: <LayersIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    category: "Agência de marketing",
    title: "Múltiplos clientes",
    desc: "Agência que usa a Numeratti para produzir vídeos de 6 clientes por mês com custo 5× menor que produtora tradicional.",
    badge: "White-label",
  },
];

export default function ExamplesSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Casos de uso</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4 max-w-2xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Quem está usando e{" "}
            <span className="grad-text">o que está conseguindo.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <RevealOnScroll key={c.title} delay={i * 0.06}>
              <div
                className="glass-card p-6 h-full flex flex-col gap-4"
                style={{ background: "var(--surface-2)" }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.iconBg }}
                  >
                    {c.icon}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(129,140,248,0.1)",
                      color: "var(--accent)",
                      border: "1px solid rgba(129,140,248,0.2)",
                    }}
                  >
                    {c.badge}
                  </span>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold mb-1" style={{ color: "var(--text-dim)" }}>
                    {c.category}
                  </p>
                  <h3 className="text-white font-semibold text-base">{c.title}</h3>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {c.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11M6.5 17.5h11" />
      <path d="M3 9.5V6a1 1 0 011-1h1a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1v-3.5" />
      <path d="M21 9.5V6a1 1 0 00-1-1h-1a1 1 0 00-1 1v12a1 1 0 001 1h1a1 1 0 001-1v-3.5" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polygon points="10 8 15 11 10 14" fill="white" stroke="none" />
    </svg>
  );
}

function UtensilsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
      <line x1="7" y1="2" x2="7" y2="11" />
      <line x1="15" y1="2" x2="15" y2="22" />
      <path d="M15 2c0 0 4 0 4 5v1" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22V12h6v10" />
      <line x1="8" y1="6" x2="10" y2="6" />
      <line x1="14" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="14" y1="10" x2="16" y2="10" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
