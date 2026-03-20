"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import PlatformStrip from "@/components/pages/shared/PlatformStrip";
import LeadershipCard from "@/components/pages/quem-somos/LeadershipCard";
import {
  QUEM_SOMOS,
  ABOUT_STATS,
  CLIENT_LOGOS,
  COLORS,
  WHATSAPP_URL,
} from "@/lib/constants";
import ValuePillarsGrid from "@/components/pages/shared/ValuePillarsGrid";
import MethodologyPhases from "@/components/pages/shared/MethodologyPhases";
import FaqSection from "@/components/pages/shared/FaqSection";
import {
  PAGE_VALUES,
  METHODOLOGY_PHASES,
  FAQ_QUEM_SOMOS,
  QUEM_SOMOS_MISSION_BLOCK,
} from "@/lib/internal-page-content";
import { ArrowRight, Award, Sparkles, BarChart3, Target, Handshake, TrendingUp } from "lucide-react";

const VALUE_ICONS = [BarChart3, Target, Handshake, TrendingUp] as const;

export default function QuemSomosContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-white py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-[#ff6600]/10 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <ScrollReveal className="space-y-8">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[#ff6600]/20 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm"
                style={{ color: COLORS.primary }}
              >
                <Sparkles size={14} style={{ color: COLORS.primary }} />
                Nossa história
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
                {QUEM_SOMOS.headline}
              </h2>
              {QUEM_SOMOS.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-stone-600">
                  {p}
                </p>
              ))}
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.08}>
                <LeadershipCard />
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-gradient-to-br from-white to-stone-50/90 p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10">
                      <Award size={22} style={{ color: COLORS.primary }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">Premiações e certificações</h3>
                      <p className="mt-3 text-stone-600">{QUEM_SOMOS.award}</p>
                      <motion.a
                        href="https://www.rdstation.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="mt-5 inline-flex items-center gap-1 text-sm font-bold"
                        style={{ color: COLORS.primary }}
                      >
                        Quero Impulsionar o meu Negócio com o RD Station →
                      </motion.a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
                {QUEM_SOMOS_MISSION_BLOCK.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                {QUEM_SOMOS_MISSION_BLOCK.title}
              </h2>
            </ScrollReveal>
            <div className="mt-10 space-y-6 text-left">
              {QUEM_SOMOS_MISSION_BLOCK.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <p className="text-lg leading-relaxed text-stone-600">{p}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ValuePillarsGrid
        title="Como pensamos parceria com cliente"
        subtitle="Valores que guiam consultoria, operação e comunicação no dia a dia."
        items={PAGE_VALUES}
        icons={VALUE_ICONS}
      />

      <MethodologyPhases
        eyebrow="Do diagnóstico à escala"
        title="Como estruturamos projetos com a Numeratti"
        subtitle="Um fluxo claro — ajustado ao seu estágio de maturidade em mídia e negócio."
        phases={METHODOLOGY_PHASES}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fff7f0] to-white py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-[#ff6600]/8 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
                Resultados
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Nossos{" "}
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                  números
                </span>
              </h3>
              <p className="mt-3 text-lg text-stone-600">Acompanhe nossos números!</p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {ABOUT_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.06 + i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="rounded-2xl border border-stone-200/80 bg-white/95 p-8 text-center shadow-[0_16px_50px_-28px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-shadow hover:border-[#ff6600]/25 hover:shadow-[0_24px_60px_-24px_rgba(255,102,0,0.12)]"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value === 1.9 ? 1 : 0}
                    className="text-4xl font-bold bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent"
                  />
                  <p className="mt-2 text-sm font-medium text-stone-600">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <PlatformStrip
            title={
              <>
                Criamos e otimizamos campanhas em diversas plataformas de{" "}
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                  mídia paga
                </span>
              </>
            }
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fafaf9] py-20 lg:py-28">
        <div className="pointer-events-none absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#ff6600]/6 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Mais de 200 clientes atendidos{" "}
              <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                com qualidade
              </span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
              Veja alguns de nossos clientes que escolheram a Numeratti para estruturar ou acelerar o crescimento.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {CLIENT_LOGOS.map((client) => (
              <ScrollReveal key={client.name}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex h-36 items-center justify-center rounded-2xl border border-stone-200/90 bg-white px-4 py-5 shadow-sm transition-shadow hover:border-[#ff6600]/30 hover:shadow-lg"
                >
                  <Image
                    src={client.url}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="h-14 w-auto max-w-full object-contain md:h-24"
                    unoptimized
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.12}>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
                style={{ backgroundColor: COLORS.primary }}
              >
                Falar com um especialista
                <ArrowRight size={18} />
              </motion.a>
              <Link
                href="/clientes"
                className="inline-flex items-center gap-2 rounded-full border border-[#ff6600]/35 bg-white px-8 py-4 text-sm font-bold text-[#ff6600] shadow-md transition hover:bg-[#ff6600] hover:text-white"
              >
                Ver portfólio de clientes
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        title="Perguntas sobre a Numeratti"
        subtitle="Respostas diretas antes de você chamar no WhatsApp."
        items={FAQ_QUEM_SOMOS.map((x) => ({ q: x.q, a: x.a }))}
      />
    </>
  );
}
