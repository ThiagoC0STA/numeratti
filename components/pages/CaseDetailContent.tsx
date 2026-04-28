"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COLORS, WHATSAPP_URL } from "@/lib/constants";
import type { CaseDetail } from "@/lib/constants";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Quote, TrendingUp, BarChart3, Zap } from "lucide-react";

interface Props {
  detail: CaseDetail;
}

const STEP_ICONS = [Zap, BarChart3, TrendingUp, CheckCircle2, BarChart3];

export default function CaseDetailContent({ detail }: Props) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#050505] pb-24 pt-32 lg:pb-32 lg:pt-40">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#ff6600]/18 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#f27405]/12 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,102,0,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            {/* Breadcrumb */}
            <Link
              href="/cases"
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/60 backdrop-blur-sm transition hover:border-white/20 hover:text-white"
            >
              <ArrowLeft size={14} />
              Todos os cases
            </Link>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#ff6600]/40 bg-[#ff6600]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#ff6600]">
                {detail.sector}
              </span>
              {detail.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[3.25rem]">
              {detail.headline}
            </h1>

            {/* Lead */}
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">
              {detail.lead}
            </p>

            {/* Quote callout */}
            <div className="mt-10 flex gap-4 rounded-2xl border border-[#ff6600]/20 bg-[#ff6600]/8 p-6">
              <Quote className="mt-1 h-6 w-6 shrink-0 text-[#ff6600]" />
              <p className="text-base font-medium italic leading-relaxed text-white/80">
                {detail.quote}
              </p>
            </div>
          </motion.div>

          {/* Metric strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid gap-4 sm:grid-cols-3"
          >
            {detail.results.map((r, i) => (
              <div
                key={r.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-[#ff6600]/30 hover:bg-white/[0.07]"
              >
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-4xl font-black text-transparent">
                  {r.metric}
                </span>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/40">{r.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── O Desafio ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f5] to-white py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/15 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              O Desafio
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl lg:text-4xl">
              O cenário antes da Numeratti
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">{detail.challenge}</p>
          </ScrollReveal>

          {/* Pain points */}
          <div className="mt-10 space-y-3">
            {detail.painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="flex gap-3 rounded-xl border border-red-100 bg-red-50/60 px-5 py-4">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span className="text-sm leading-relaxed text-stone-700">{point}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── A Estratégia ── */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ff6600]/6 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              A Estratégia
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl lg:text-4xl">
              Como a Numeratti estruturou a solução
            </h2>
            <p className="mt-4 text-lg text-stone-500">
              Cada etapa foi planejada com intenção — nada foi deixado para o acaso.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {detail.strategy.map((step, i) => {
              const StepIcon = STEP_ICONS[i % STEP_ICONS.length];
              return (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="group flex gap-5 rounded-2xl border border-stone-100 bg-stone-50/60 p-6 transition-all hover:border-[#ff6600]/20 hover:bg-[#fff8f3]/80 hover:shadow-sm">
                    {/* Step number + icon */}
                    <div className="flex shrink-0 flex-col items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-110">
                        <StepIcon size={20} style={{ color: COLORS.primary }} />
                      </div>
                      <span className="text-xs font-bold tabular-nums text-stone-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="font-bold text-stone-900">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Resultados ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#050505] py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#ff6600]/15 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#f27405]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              Resultados
            </p>
            <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              O que foi conquistado — em números
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/50">
              Números que falam por si — e que mostram o que é possível quando estratégia e execução andam juntas.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {detail.results.map((r, i) => (
              <ScrollReveal key={r.label} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                  <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-5xl font-black leading-none text-transparent">
                    {r.metric}
                  </span>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-white/40">{r.label}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">{r.context}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conclusão + CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8f3] to-white py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[400px] w-[400px] rounded-full bg-[#ff6600]/8 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              O que esse case revela
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl lg:text-4xl">
              A lição que fica
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">{detail.conclusion}</p>
          </ScrollReveal>

          {/* Separator quote */}
          <ScrollReveal delay={0.1}>
            <div className="my-12 border-l-4 border-[#ff6600] pl-6">
              <p className="text-xl font-semibold italic leading-relaxed text-stone-800">
                {detail.quote}
              </p>
            </div>
          </ScrollReveal>

          {/* CTA box */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-[#ff6600]/20 bg-gradient-to-br from-[#fff4ed] to-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
                Pronto para o próximo passo?
              </p>
              <h3 className="mt-3 text-2xl font-bold text-stone-900">
                Sua empresa pode ser o próximo case.
              </h3>
              <p className="mt-3 text-stone-600">
                Fale com um especialista da Numeratti, entenda onde estão as maiores oportunidades de crescimento do seu negócio e descubra como transformar investimento em resultado mensurável.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Falar com um especialista
                  <ArrowRight size={18} />
                </motion.a>
                <Link
                  href="/cases"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-bold text-stone-700 shadow-sm transition hover:border-[#ff6600]/40 hover:text-[#ff6600]"
                >
                  Ver outros cases
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
