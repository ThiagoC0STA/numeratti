"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ABOUT_STATS, COLORS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white dark:from-neutral-950 via-[#fff7f0] dark:via-neutral-950 to-white dark:to-neutral-950 py-28 lg:py-36"
    >
      <div className="dark:hidden pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/25 to-transparent" />
      <div className="dark:hidden pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[#ff6600]/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6600]/20 bg-white/80 dark:bg-neutral-950/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ff6600] shadow-sm backdrop-blur-sm">
            <Zap size={14} />
            Sobre a Numeratti
          </span>
        </ScrollReveal>

        <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl lg:text-5xl">
              Consultoria de Performance Digital{" "}
              <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                orientada por dados
              </span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Transformamos investimento em mídia paga em{" "}
              <strong className="text-stone-900 dark:text-stone-100">
                resultado mensurável
              </strong>
              . Enquanto o mercado faz promessas, nós entregamos dados que você
              pode usar para tomar decisões, e um comprometimento absoluto com o
              que funciona.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Com sede em Fortaleza e atuação em todo o Brasil, somos o parceiro
              estratégico que o seu negócio precisa para{" "}
              <strong className="text-stone-900 dark:text-stone-100">
                crescer com previsibilidade, não com promessa.
              </strong>
            </p>
            <Link
              href="/quem-somos"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#ff6600]/30 bg-white dark:bg-neutral-950 px-7 py-3.5 text-sm font-bold text-[#ff6600] shadow-md shadow-orange-500/10 transition-all hover:bg-[#ff6600] hover:text-white"
            >
              Saiba mais
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </ScrollReveal>

          <div className="space-y-5">
            <ScrollReveal delay={0.08}>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                Nossos{" "}
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                  números
                </span>
              </h3>
            </ScrollReveal>

            {ABOUT_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.12 + i * 0.06}>
                <div className="group flex items-center justify-between rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white/90 dark:bg-neutral-950/90 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#ff6600]/25 hover:translate-x-1.5 hover:shadow-[0_20px_50px_-20px_rgba(255,102,0,0.2)]">
                  <div>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl font-bold text-stone-900 dark:text-stone-100 md:text-4xl"
                      decimals={stat.value === 5.6 ? 1 : 0}
                    />
                    <p className="mt-1 text-sm font-medium text-stone-500">
                      {stat.label}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-110">
                    <span
                      className="text-lg font-bold"
                      style={{ color: COLORS.primary }}
                    >
                      {stat.suffix}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
