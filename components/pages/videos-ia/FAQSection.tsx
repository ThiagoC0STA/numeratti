"use client";
import { useState } from "react";
import RevealOnScroll from "./ui/RevealOnScroll";

const faqs = [
  {
    q: "O vídeo parece falso ou gerado por IA?",
    a: "A qualidade evoluiu muito. Usamos as ferramentas mais avançadas do mercado — Runway Gen-3, HeyGen e ElevenLabs — e o resultado é profissional o suficiente para rodar em anúncios pagos. Muitos clientes relatam que a audiência não percebe que é IA.",
  },
  {
    q: "Como envio o briefing?",
    a: "Simples: você preenche um formulário online ou manda uma mensagem no WhatsApp descrevendo o produto, o público, a oferta e o objetivo do vídeo. Pode ser uma ideia inicial ou um roteiro pronto — adaptamos aos dois.",
  },
  {
    q: "O que está incluso no vídeo?",
    a: "Todos os planos incluem: roteiro escrito por IA, visuais gerados e editados, narração em português brasileiro com voz natural, legenda sincronizada e entrega em arquivo MP4 em alta resolução.",
  },
  {
    q: "Posso pedir revisões?",
    a: "Sim. Cada plano inclui revisões conforme descrito (Starter: 1 revisão, Growth: 2, Scale: 3). Se o resultado não estiver dentro do briefing original, revisamos sem custo adicional.",
  },
  {
    q: "Funciona para qualquer tipo de negócio?",
    a: "Para a grande maioria. Atendemos e-commerce, infoprodutores, prestadores de serviço, negócios locais e agências. Vídeos com presença física humana real (entrevista ao vivo, por exemplo) fogem do escopo, mas tudo mais fazemos.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Você paga por pacote antes de iniciar a produção. Aceitamos cartão de crédito, Pix e boleto. Sem assinatura, sem contrato de fidelidade — você compra quando precisar.",
  },
];

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-200"
      style={{
        border: "1px solid var(--border)",
        background: open ? "var(--surface-2)" : "transparent",
      }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-medium text-sm md:text-base">{q}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: open ? "var(--grad-accent)" : "var(--surface-2)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
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
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 md:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-12">
          <span className="tag mb-6 inline-flex">FAQ</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Dúvidas frequentes.{" "}
            <span className="grad-text">Respostas diretas.</span>
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
