"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const steps = [
  {
    num: "01",
    icon: <BriefingIcon />,
    title: "Envie seu briefing",
    desc: "Preencha um formulário simples ou mande uma mensagem no WhatsApp. Pode ser uma ideia, um texto ou um roteiro. Sem reunião, sem complicação.",
    detail: "Resposta em até 2h úteis",
  },
  {
    num: "02",
    icon: <AIIcon />,
    title: "IA produz seu vídeo",
    desc: "Nossa equipe usa as melhores IAs do mercado — VEO, Runway, Seedance, HeyGen e ElevenLabs — para criar um vídeo profissional do zero.",
    detail: "Roteiro + visual + narração + legenda",
  },
  {
    num: "03",
    icon: <RocketIcon />,
    title: "Receba e publique",
    desc: "Você recebe o arquivo final por WhatsApp ou Google Drive em prazo ágil e combinado. Pronto para subir no Meta Ads, Instagram, YouTube ou landing page.",
    detail: "Entrega em MP4 · alta resolução",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Como funciona</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4 max-w-xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Três passos.{" "}
            <span className="grad-text">Prazo ágil.</span>{" "}
            Vídeo no ar.
          </h2>
        </RevealOnScroll>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 10%, var(--border) 20%, var(--border) 80%, transparent 90%)",
            }}
            aria-hidden
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 0.12}>
                <div
                  className="relative rounded-2xl p-8 h-full"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-6"
                    style={{ background: "var(--grad-accent)" }}
                  >
                    {step.num}
                  </div>

                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {step.desc}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(129,140,248,0.08)",
                      color: "var(--accent-2)",
                      border: "1px solid rgba(129,140,248,0.2)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-2)" }} />
                    {step.detail}
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

function BriefingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7H3a7 7 0 017-7h1V5.73A2 2 0 0110 4a2 2 0 012-2z" />
      <path d="M5 14v7M19 14v7M3 21h18" />
      <circle cx="8.5" cy="11.5" r="1" fill="var(--accent-2)" />
      <circle cx="15.5" cy="11.5" r="1" fill="var(--accent-2)" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-3-3z" />
      <path d="M12 8L7 13.3a4 4 0 000 5.66l.04.04a4 4 0 005.66 0L17.5 14M12 8l2.5-2.5C17 3 20 2 20 2s-1 3-3.5 5.5L12 8z" />
    </svg>
  );
}
