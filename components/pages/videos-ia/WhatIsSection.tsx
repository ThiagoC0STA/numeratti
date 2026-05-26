"use client";
import { useEffect, useState } from "react";
import RevealOnScroll from "./ui/RevealOnScroll";

const terminalLines = [
  { delay: 0, text: "$ recebendo briefing do cliente...", color: "var(--text-muted)" },
  { delay: 900, text: "✓ briefing processado", color: "#22C55E" },
  { delay: 1600, text: "$ gerando roteiro com GPT-4o...", color: "var(--text-muted)" },
  { delay: 2700, text: "✓ roteiro criado (45s de vídeo)", color: "#22C55E" },
  { delay: 3400, text: "$ criando visuais com Runway Gen-3...", color: "var(--text-muted)" },
  { delay: 4600, text: "✓ cenas renderizadas", color: "#22C55E" },
  { delay: 5200, text: "$ adicionando narração — ElevenLabs...", color: "var(--text-muted)" },
  { delay: 6000, text: "✓ voz gerada em pt-BR", color: "#22C55E" },
  { delay: 6700, text: "$ aplicando legendas e finalização...", color: "var(--text-muted)" },
  { delay: 7500, text: "✓ vídeo pronto para entrega ⚡", color: "var(--accent-2)" },
];

function Terminal() {
  const [visible, setVisible] = useState<number>(0);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    terminalLines.forEach((line, i) => {
      timeouts.push(setTimeout(() => setVisible(i + 1), line.delay));
    });
    const loop = setTimeout(() => setVisible(0), 9500);
    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(loop);
    };
  }, [visible === 0 ? visible : -1]);

  useEffect(() => {
    if (visible === 0) {
      const t = setTimeout(() => setVisible(1), 500);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <div
      className="rounded-2xl overflow-hidden font-mono text-sm leading-relaxed shadow-2xl"
      style={{
        background: "#0A0A0E",
        border: "1px solid var(--border)",
        boxShadow: "0 0 60px rgba(129,140,248,0.15)",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}
      >
        {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
          <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-2 text-xs" style={{ color: "var(--text-dim)" }}>
          numeratti-ai · processo de produção
        </span>
      </div>

      <div className="p-5 space-y-2 min-h-[320px]">
        {terminalLines.map((line, i) => {
          const shown = i < visible;
          return (
            <div
              key={i}
              className="transition-[opacity,transform] duration-300"
              style={{
                color: line.color,
                opacity: shown ? 1 : 0,
                transform: shown ? "translateX(0)" : "translateX(-8px)",
              }}
            >
              {line.text}
            </div>
          );
        })}
        {visible > 0 && visible < terminalLines.length && <span className="cursor" />}
      </div>
    </div>
  );
}

const bullets = [
  "Roteiro escrito por IA treinada em copywriting",
  "Visuais gerados com Runway, Pika ou HeyGen",
  "Narração natural em português brasileiro",
  "Legenda automática sincronizada",
  "Entregue em MP4, pronto para subir",
];

export default function WhatIsSection() {
  return (
    <section id="o-que-e" className="py-24 md:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <RevealOnScroll>
              <span className="tag mb-6 inline-flex">O que é</span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h2
                className="display text-white text-3xl md:text-5xl mt-4"
                style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
              >
                Vídeos profissionais{" "}
                <span className="grad-text">no ritmo da sua marca,</span> com a agilidade da IA.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                A Numeratti recebe o seu briefing — pode ser um texto, uma ideia ou um roteiro — e
                entrega um vídeo completo produzido com as melhores ferramentas de IA do mercado.
                Em poucos dias, você tem um criativo profissional pronto para rodar.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <ul className="mt-8 space-y-3">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.1} className="w-full">
            <Terminal />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ stroke: "var(--accent)", flexShrink: 0, marginTop: 2 }}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
