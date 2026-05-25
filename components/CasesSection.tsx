"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { COLORS, WHATSAPP_URL, CASES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CasesSection() {
  const simplified = useSimplifiedMotion();
  return (
    <section
      id="cases"
      className="relative overflow-hidden bg-gradient-to-b from-white dark:from-neutral-950 via-[#fff8f3] dark:via-neutral-950 to-white dark:to-neutral-950 py-28 lg:py-36"
    >
      <div className="dark:hidden pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-[#ff6600]/10 blur-[120px]" />
      <div className="dark:hidden pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p
            className="text-center text-sm font-bold uppercase tracking-widest"
            style={{ color: COLORS.primary }}
          >
            Cases
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl lg:text-5xl">
            Cases de{" "}
            <span className="text-shimmer">
              sucesso
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600 dark:text-stone-400">
            Empresas que aceleraram seus resultados com a Numeratti
          </p>
        </ScrollReveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {CASES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <SpotlightCard className="h-full rounded-2xl">
              <Link href={`/cases/${item.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-neutral-950 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#ff6600]/25 hover:shadow-[0_28px_70px_-28px_rgba(255,102,0,0.18)] hover:-translate-y-1.5">
                <div className="dark:hidden pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-[#ff6600]/10 to-transparent transition-all duration-500 group-hover:scale-125" />

                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-105">
                  <TrendingUp size={26} style={{ color: COLORS.primary }} />
                </div>

                <h3 className="relative text-xl font-bold text-stone-900 dark:text-stone-100">{item.title}</h3>
                <p className="relative mt-3 flex-1 leading-relaxed text-stone-600 dark:text-stone-400">{item.excerpt}</p>

                <div className="relative mt-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                    {item.metric}
                  </span>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">
                    {item.metricLabel}
                  </p>
                </div>

                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#ff6600] transition-transform group-hover:translate-x-1">
                  Saiba mais
                  <ArrowRight size={16} />
                </span>
              </Link>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-16 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{ backgroundColor: COLORS.primary }}
            >
              Fazer parte dos nossos cases
              <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
