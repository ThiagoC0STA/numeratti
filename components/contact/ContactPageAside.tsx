"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL, COLORS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const BULLETS = [
  "Diagnóstico rápido do que já roda em mídia paga",
  "Sugestões práticas antes mesmo do contrato",
  "Transparência total em métricas e relatórios",
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function ContactPageAside() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="lg:col-span-5">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLORS.primary }}>
          Fale conosco
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
          Resultados mensuráveis começam com uma boa conversa
        </h2>
        <p className="mt-4 text-lg text-stone-600">
          Conte em que fase está o seu marketing digital. Avaliamos fit, próximos passos e como a Numeratti pode
          acelerar seus números.
        </p>
        <ul className="mt-8 space-y-4 text-stone-700">
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
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-semibold text-stone-800 shadow-sm transition hover:border-[#ff6600]/30 hover:shadow-md"
        >
          <MessageCircle className="text-[#25d366]" size={22} />
          Abrir WhatsApp
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="lg:col-span-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      variants={container}
    >
      <motion.p
        variants={item}
        className="text-sm font-semibold uppercase tracking-widest"
        style={{ color: COLORS.primary }}
      >
        Fale conosco
      </motion.p>
      <motion.h2
        variants={item}
        className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl"
      >
        Resultados mensuráveis começam com uma boa conversa
      </motion.h2>
      <motion.p variants={item} className="mt-4 text-lg text-stone-600">
        Conte em que fase está o seu marketing digital. Avaliamos fit, próximos passos e como a Numeratti pode
        acelerar seus números.
      </motion.p>
      <motion.ul variants={item} className="mt-8 space-y-4 text-stone-700">
        {BULLETS.map((text) => (
          <li key={text} className="flex gap-3">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: COLORS.primary }}
            />
            {text}
          </li>
        ))}
      </motion.ul>
      <motion.div variants={item}>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-semibold text-stone-800 shadow-sm transition hover:border-[#ff6600]/30 hover:shadow-md"
        >
          <MessageCircle className="text-[#25d366]" size={22} />
          Abrir WhatsApp
        </Link>
      </motion.div>
    </motion.div>
  );
}
