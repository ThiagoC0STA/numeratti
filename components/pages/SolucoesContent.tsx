"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import PlatformStrip from "@/components/pages/shared/PlatformStrip";
import MethodologyPhases from "@/components/pages/shared/MethodologyPhases";
import MetricsTeaserGrid from "@/components/pages/shared/MetricsTeaserGrid";
import FaqSection from "@/components/pages/shared/FaqSection";
import { METHODOLOGY_PHASES, FAQ_SOLUCOES } from "@/lib/internal-page-content";
import { SOLUCOES, SERVICES, COLORS, WHATSAPP_URL } from "@/lib/constants";
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
  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-20 lg:py-28">
        <div className="dark:hidden pointer-events-none absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-[#ff6600]/8 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[#ff6600]/25 bg-[#ff6600]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: COLORS.primary }} />
                Visão geral
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl lg:text-5xl">
                Quatro frentes de{" "}
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                  performance
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl">{SOLUCOES.intro}</p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {SOLUCOES.sections.map((section, i) => {
              const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
              return (
                <ScrollReveal key={section.title} delay={i * 0.06}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-neutral-950 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6600]/30 hover:shadow-[0_28px_70px_-28px_rgba(255,102,0,0.18)] md:p-10">
                    <span className="font-mono text-xs font-bold tracking-widest text-stone-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={26} style={{ color: COLORS.primary }} />
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-2xl">
                      {section.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                      {section.text}
                    </p>
                  </article>
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

      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 dark:from-neutral-950 via-white dark:via-neutral-950 to-stone-50 dark:to-neutral-950 py-20 lg:py-28">
        <div className="dark:hidden pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#ff6600]/6 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              Como entregamos
            </p>
            <h3 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl lg:text-5xl">
              Como{" "}
              <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                fazemos
              </span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600 dark:text-stone-400">
              Consultoria e operação em +17 plataformas de mídia paga — com foco em métricas que importam
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i] ?? MessageCircle;
              return (
                <ScrollReveal key={service.id} delay={i * 0.05}>
                  <div
                    className="group relative h-full overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-neutral-950 p-8 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff6600]/20 hover:shadow-[0_24px_60px_-24px_rgba(255,102,0,0.12)] motion-reduce:transform-none"
                  >
                    <div className="dark:hidden pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-[#ff6600]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="font-mono text-sm font-bold text-[#ff6600]/80">{service.id}</span>
                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={26} style={{ color: COLORS.primary }} />
                    </div>
                    <h4 className="mt-5 text-xl font-bold text-stone-900 dark:text-stone-100">{service.title}</h4>
                    <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <MetricsTeaserGrid />

      <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-20 lg:py-28">
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
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 dark:border-stone-800/80 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 px-8 py-14 text-center shadow-[0_28px_80px_-32px_rgba(0,0,0,0.45)] md:px-14 md:py-16">
              <div className="dark:hidden pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#ff6600]/25 blur-[90px]" />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-violet-500/20 blur-[80px]" />
              <h3 className="relative text-2xl font-bold text-white md:text-3xl">Vamos fazer negócio?</h3>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-stone-300">
                Converse com um especialista e veja como estruturamos performance para o seu cenário.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none"
                style={{ backgroundColor: COLORS.primary }}
              >
                Falar com um especialista
              </a>
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
