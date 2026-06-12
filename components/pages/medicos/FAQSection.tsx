"use client";
import { useState } from "react";
import RevealOnScroll from "./ui/RevealOnScroll";

const faqs = [
  {
    q: "Tráfego pago para médico é permitido pelo CFM?",
    a: "Sim. A publicidade médica é regulamentada, não proibida. A Resolução CFM nº 2.336/2023, em vigor desde 2024, permite anúncios para captar pacientes em canais próprios. O que ela veda é promessa de resultado, sensacionalismo e autopromoção excessiva. Toda campanha que veiculamos opera dentro dessa fronteira.",
  },
  {
    q: "Quem escreve os anúncios?",
    a: "Nós construímos o roteiro de cada anúncio com base no que os pacientes da sua especialidade mais pesquisam, já na linguagem que a norma de publicidade médica permite. Você valida tudo antes de qualquer campanha ir ao ar.",
  },
  {
    q: "Quanto custa?",
    a: "A oferta é personalizada. Montamos a proposta em um briefing, de acordo com a sua especialidade, a sua cidade e a sua meta de pacientes. O primeiro passo é o diagnóstico gratuito, sem compromisso.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "Não. O relatório mensal de consultas geradas é o único motivo de permanência que defendemos.",
  },
  {
    q: "Funciona para a minha especialidade na minha cidade?",
    a: "O diagnóstico responde isso com dados: volume de busca da sua especialidade na sua região, concorrência ativa e custo estimado por consulta. Se os números não fecharem, falamos com a mesma franqueza.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Campanhas de busca no Google começam a gerar contatos já nas primeiras semanas. No diagnóstico você recebe uma estimativa realista para o seu caso. Prometer prazo igual para todos seria o tipo de promessa que não fazemos.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border transition-colors duration-200"
      style={{
        borderColor: open ? "rgba(232,116,12,0.4)" : "rgba(255,255,255,0.08)",
        background: open ? "rgba(255,255,255,0.03)" : "transparent",
      }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-medium text-sm md:text-base">{q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: open ? "linear-gradient(135deg,#e8740c,#d4680a)" : "rgba(255,255,255,0.06)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-white/60">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-premium-dark noise py-24 md:py-32 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-12">
          <span className="mono text-orange-primary text-[11px] uppercase tracking-[0.28em]">
            / dúvidas
          </span>
          <h2 className="display display-tight text-white text-3xl md:text-5xl mt-5 leading-[1.05]">
            Perguntas diretas. <span className="kw">Respostas diretas.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
