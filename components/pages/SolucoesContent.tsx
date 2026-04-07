"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PlatformStrip from "@/components/pages/shared/PlatformStrip";
import MethodologyPhases from "@/components/pages/shared/MethodologyPhases";
import MetricsTeaserGrid from "@/components/pages/shared/MetricsTeaserGrid";
import FaqSection from "@/components/pages/shared/FaqSection";
import { METHODOLOGY_PHASES, FAQ_SOLUCOES } from "@/lib/internal-page-content";
import { SOLUCOES, SERVICES, COLORS, WHATSAPP_URL } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { fadeUpWhileInView } from "@/lib/motion/simplifiedScroll";
import {
  BarChart3,
  Search,
  Target,
  Zap,
  Lightbulb,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const SECTION_ICONS = [BarChart3, Target, Zap, Lightbulb] as const;
const SERVICE_ICONS = [BarChart3, Search, Facebook, Instagram, Youtube, Linkedin] as const;

export default function SolucoesContent() {
  const simplified = useSimplifiedMotion();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50/50 to-white py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-[#ff6600]/8 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span
                className="inline-flex rounded-full border border-[#ff6600]/20 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm"
                style={{ color: COLORS.primary }}
              >
                Visão geral
              </span>
              <p className="mt-8 text-lg leading-relaxed text-stone-600 md:text-xl">{SOLUCOES.intro}</p>
            </div>
          </ScrollReveal>

          <div className="mt-20 space-y-24">
            {SOLUCOES.sections.map((section, i) => {
              const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
              const reverse = i % 2 === 1;
              return (
                <ScrollReveal key={section.title} delay={i * 0.06}>
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 shadow-sm">
                        <Icon size={30} style={{ color: COLORS.primary }} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">{section.title}</h2>
                        <p className="mt-4 text-lg leading-relaxed text-stone-600">{section.text}</p>
                      </div>
                    </div>
                    <motion.div
                      {...(simplified
                        ? fadeUpWhileInView(true, {
                            hiddenY: 12,
                            duration: 0.5,
                            viewportAmount: 0.3,
                          })
                        : {
                            initial: { opacity: 0, scale: 0.98 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: true, amount: 0.3 },
                            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                          })}
                      className="relative min-h-[200px] overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-gradient-to-br from-white to-stone-100/80 p-10 shadow-inner"
                    >
                      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#ff6600]/12 blur-2xl" />
                      <div className="pointer-events-none absolute bottom-6 left-6 right-6 h-2 rounded-full bg-gradient-to-r from-[#ff6600]/25 via-[#f27405]/15 to-transparent" />
                      <p className="relative text-sm font-semibold uppercase tracking-widest text-stone-400">
                        Foco em performance
                      </p>
                      <p className="relative mt-4 text-2xl font-bold text-stone-900">Mensuração · Otimização · Escala</p>
                    </motion.div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <MethodologyPhases
        eyebrow="Metodologia"
        title="Como conduzimos projetos do kickoff à otimização"
        subtitle="O mesmo esqueleto que usamos em consultoria pura ou em operação completa — com profundidade ajustada ao seu momento."
        phases={METHODOLOGY_PHASES}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#ff6600]/6 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              Como entregamos
            </p>
            <h3 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
              Como{" "}
              <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                fazemos
              </span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
              Consultoria e operação em diversas plataformas de mídia paga
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i] ?? MessageCircle;
              return (
                <ScrollReveal key={service.id} delay={i * 0.05}>
                  <motion.div
                    whileHover={simplified ? undefined : { y: -8 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-8 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.08)] transition-shadow hover:border-[#ff6600]/20 hover:shadow-[0_24px_60px_-24px_rgba(255,102,0,0.12)]"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-[#ff6600]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="font-mono text-sm font-bold text-[#ff6600]/80">{service.id}</span>
                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={26} style={{ color: COLORS.primary }} />
                    </div>
                    <h4 className="mt-5 text-xl font-bold text-stone-900">{service.title}</h4>
                    <p className="mt-3 leading-relaxed text-stone-600">{service.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <MetricsTeaserGrid />

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <PlatformStrip
            title={
              <>
                Criamos e otimizamos campanhas em diversas{" "}
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                  plataformas
                </span>
              </>
            }
          />
        </div>
      </section>

      <section className="relative pb-24 pt-4 lg:pb-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 px-8 py-14 text-center shadow-[0_28px_80px_-32px_rgba(0,0,0,0.45)] md:px-14 md:py-16">
              <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#ff6600]/25 blur-[90px]" />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-violet-500/20 blur-[80px]" />
              <h3 className="relative text-2xl font-bold text-white md:text-3xl">Vamos fazer negócio?</h3>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-stone-300">
                Converse com um especialista e veja como estruturamos performance para o seu cenário.
              </p>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={simplified ? undefined : { scale: 1.03 }}
                whileTap={simplified ? undefined : { scale: 0.98 }}
                className="relative mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30"
                style={{ backgroundColor: COLORS.primary }}
              >
                Falar com um especialista
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        title="Dúvidas sobre serviços e formato de trabalho"
        subtitle="Se a sua pergunta for mais específica, mande no WhatsApp — respondemos com contexto do seu caso."
        items={FAQ_SOLUCOES.map((x) => ({ q: x.q, a: x.a }))}
      />
    </>
  );
}
