"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqSection from "@/components/pages/shared/FaqSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ABOUT_STATS, COLORS, WHATSAPP_URL } from "@/lib/constants";
import { CLIENT_SEGMENTS, FAQ_CLIENTES } from "@/lib/internal-page-content";
import { ArrowRight, Building2 } from "lucide-react";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

export default function ClientesPageExtras() {
  const simplified = useSimplifiedMotion();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50/60 to-white py-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              Em números
            </p>
            <h2 className="mt-4 text-center text-2xl font-bold text-stone-900 md:text-3xl">
              Tração que sustenta parcerias de longo prazo
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ABOUT_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-stone-200/80 bg-white p-8 text-center shadow-sm">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value === 1.9 ? 1 : 0}
                    className="text-3xl font-bold bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent md:text-4xl"
                  />
                  <p className="mt-2 text-sm font-medium text-stone-600">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ff6600]/6 blur-[90px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              Segmentos
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Onde a Numeratti mais acelera resultados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
              Cada vertical tem dinâmica de funil, criativo e mensuração diferente — adaptamos stack e rituais ao seu
              modelo.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CLIENT_SEGMENTS.map((seg, i) => (
              <ScrollReveal key={seg.title} delay={i * 0.07}>
                <motion.div
                  whileHover={simplified ? undefined : { y: -4 }}
                  className="h-full rounded-2xl border border-stone-200/80 bg-stone-50/50 p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-stone-200/80">
                    <Building2 size={22} style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-stone-900">{seg.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{seg.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-dashed border-[#ff6600]/30 bg-[#fff7f0]/50 p-8 text-center">
              <p className="text-stone-700">
                Quer ver como outras marcas evoluíram com a gente? Explore os{" "}
                <Link href="/cases" className="font-bold text-[#ff6600] underline-offset-2 hover:underline">
                  cases de sucesso
                </Link>{" "}
                e leia análises no{" "}
                <Link href="/blog" className="font-bold text-[#ff6600] underline-offset-2 hover:underline">
                  blog
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        title="Perguntas de quem já quer ser cliente"
        subtitle="Transparência antes de fechar — combinamos expectativas e indicadores na primeira conversa."
        items={FAQ_CLIENTES.map((x) => ({ q: x.q, a: x.a }))}
      />

      <section className="relative pb-20 lg:pb-28">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-[1.75rem] border border-stone-200/80 bg-gradient-to-br from-stone-900 to-stone-800 px-8 py-12 text-center md:px-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">Pronto para entrar para a lista?</h2>
              <p className="mx-auto mt-4 max-w-lg text-stone-300">
                Conte seu cenário no WhatsApp — alinhamos próximos passos e como podemos somar ao seu time.
              </p>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={simplified ? undefined : { scale: 1.03 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                Falar com um especialista
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
