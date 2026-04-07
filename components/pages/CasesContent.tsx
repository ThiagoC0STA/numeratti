"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqSection from "@/components/pages/shared/FaqSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { CASES, COLORS, WHATSAPP_URL, ABOUT_STATS } from "@/lib/constants";
import { CASES_PAGE_INTRO, FAQ_CASES } from "@/lib/internal-page-content";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { ArrowRight, CheckCircle2, TrendingUp, ExternalLink } from "lucide-react";

export default function CasesContent() {
  const simplified = useSimplifiedMotion();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8f3] to-white py-16 lg:py-22">
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-[#ff6600]/10 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              Portfólio
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              {CASES_PAGE_INTRO.title}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-stone-600">
              {CASES_PAGE_INTRO.lead}
            </p>
          </ScrollReveal>
          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {CASES_PAGE_INTRO.bullets.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.05}>
                <li className="flex gap-3 text-stone-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6600]" style={{ color: COLORS.primary }} />
                  <span>{b}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-stone-100 bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-semibold text-stone-500">Panorama agregado do time</p>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ABOUT_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div className="rounded-xl border border-stone-100 bg-stone-50/80 px-4 py-5 text-center">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value === 1.9 ? 1 : 0}
                    className="text-2xl font-bold text-stone-900 md:text-3xl"
                  />
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8f3] to-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-widest text-stone-500">Histórias</p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
              Marcas que elevaram performance com a Numeratti — leia o case completo no site.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {CASES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={simplified ? undefined : { y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] transition-shadow hover:border-[#ff6600]/25 hover:shadow-[0_28px_70px_-28px_rgba(255,102,0,0.15)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-[#ff6600]/10 to-transparent transition-all duration-500 group-hover:scale-125" />

                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-110">
                    <TrendingUp size={26} style={{ color: COLORS.primary }} />
                  </div>

                  <h3 className="relative text-xl font-bold text-stone-900">{item.title}</h3>
                  <p className="relative mt-3 flex-1 leading-relaxed text-stone-600">{item.excerpt}</p>

                  <div className="relative mt-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                      {item.metric}
                    </span>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">{item.metricLabel}</p>
                  </div>

                  <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#ff6600] transition-transform group-hover:translate-x-1">
                    Saiba mais
                    <ExternalLink size={16} />
                  </span>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <p className="mt-14 text-center text-stone-600">
              Quer aprofundar em tendências e táticas?{" "}
              <Link href="/blog" className="font-bold text-[#ff6600] underline-offset-2 hover:underline">
                Acesse o blog
              </Link>
              .
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 text-center">
              <p className="mb-6 text-stone-600">
                Quer fazer parte do grupo de empresas que estão acelerando os seus resultados com a Numeratti?
              </p>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={simplified ? undefined : { scale: 1.03 }}
                whileTap={simplified ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
                style={{ backgroundColor: COLORS.primary }}
              >
                Fazer parte dos nossos cases
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        title="Sobre os cases e expectativas"
        items={FAQ_CASES.map((x) => ({ q: x.q, a: x.a }))}
      />
    </>
  );
}
