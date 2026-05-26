"use client";
import { ReactNode } from "react";
import RevealOnScroll from "./ui/RevealOnScroll";

const personas = [
  {
    icon: <ChartIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    title: "Gestores de tráfego",
    desc: "Crie criativos para anúncios no Meta e Google sem depender de equipe de vídeo. Teste mais variações, mais rápido.",
    tags: ["Meta Ads", "Google Ads", "Criativos em escala"],
  },
  {
    icon: <BagIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    title: "Donos de e-commerce",
    desc: "Vídeos de produto, depoimentos e demonstrações que aumentam a conversão — sem sessão de fotos ou estúdio.",
    tags: ["Produto", "Conversão", "Stories"],
  },
  {
    icon: <PlayIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    title: "Infoprodutores",
    desc: "Apresente seu curso ou mentoria com vídeos profissionais que geram autoridade e vendem sem você aparecer.",
    tags: ["Lançamento", "Autoridade", "Funil"],
  },
  {
    icon: <BriefcaseIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    title: "Prestadores de serviços",
    desc: "Mostre o resultado do seu trabalho, explique seus diferenciais e feche mais clientes com vídeo.",
    tags: ["Portfólio", "Depoimentos", "Prospecção"],
  },
  {
    icon: <PinIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    title: "Negócios locais",
    desc: "Restaurantes, clínicas, academias e lojas que precisam de presença digital forte mas sem orçamento de produção.",
    tags: ["Reels", "Local", "Promoção"],
  },
  {
    icon: <RocketIcon />,
    iconBg: "rgba(129,140,248,0.15)",
    title: "Agências de marketing",
    desc: "Escale a produção de vídeo para seus clientes com custo e prazo previsíveis. White-label disponível.",
    tags: ["White-label", "Escala", "Múltiplos clientes"],
  },
];

export default function ForWhomSection() {
  return (
    <section
      id="para-quem"
      className="py-24 md:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Para quem é</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4 max-w-2xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Se você precisa de vídeo para{" "}
            <span className="grad-text">vender mais,</span>{" "}
            é para você.
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 0.06}>
              <div
                className="glass-card p-6 h-full flex flex-col gap-4"
                style={{ background: "var(--surface-2)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: p.iconBg }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {p.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-medium"
                      style={{
                        background: "rgba(129,140,248,0.08)",
                        color: "var(--accent)",
                        border: "1px solid rgba(129,140,248,0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="white" stroke="none" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" />
      <path d="M2 12h20" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-3-3z" />
      <path d="M12 8L7 13.3a4 4 0 000 5.66l.04.04a4 4 0 005.66 0L17.5 14M12 8l2.5-2.5C17 3 20 2 20 2s-1 3-3.5 5.5L12 8z" />
    </svg>
  );
}
