"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL, COLORS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const BULLETS = [
  "Diagnóstico rápido do que já roda em mídia paga",
  "Sugestões práticas antes mesmo do contrato",
  "Transparência total em métricas e relatórios",
] as const;

const STAGGER_MS = 90;

function staggerStyle(index: number, visible: boolean, extra?: CSSProperties): CSSProperties {
  return {
    transitionDelay: visible ? `${50 + index * STAGGER_MS}ms` : "0ms",
    ...extra,
  };
}

const staggerCls = (visible: boolean) =>
  `transition-all duration-500 ease-out motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:transition-none ${
    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
  }`;

export default function ContactPageAside() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="lg:col-span-5">
      <p
        style={staggerStyle(0, visible, { color: COLORS.primary })}
        className={`text-sm font-semibold uppercase tracking-widest ${staggerCls(visible)}`}
      >
        Fale conosco
      </p>
      <h2
        style={staggerStyle(1, visible)}
        className={`mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl ${staggerCls(visible)}`}
      >
        Resultados mensuráveis começam com uma boa conversa
      </h2>
      <p
        style={staggerStyle(2, visible)}
        className={`mt-4 text-lg text-stone-600 dark:text-stone-400 ${staggerCls(visible)}`}
      >
        Conte em que fase está o seu marketing digital. Avaliamos fit, próximos passos e como a Numeratti pode
        acelerar seus números.
      </p>
      <ul
        style={staggerStyle(3, visible)}
        className={`mt-8 space-y-4 text-stone-700 dark:text-stone-300 ${staggerCls(visible)}`}
      >
        {BULLETS.map((text) => (
          <li key={text} className="flex gap-3">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: COLORS.primary }}
            />
            {text}
          </li>
        ))}
      </ul>
      <div style={staggerStyle(4, visible)} className={staggerCls(visible)}>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-neutral-950 px-5 py-4 text-sm font-semibold text-stone-800 dark:text-stone-200 shadow-sm transition hover:border-[#ff6600]/30 hover:shadow-md"
        >
          <MessageCircle className="text-[#25d366]" size={22} />
          Abrir WhatsApp
        </Link>
      </div>
    </div>
  );
}
