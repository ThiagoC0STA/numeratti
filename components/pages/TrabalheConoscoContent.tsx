"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqSection from "@/components/pages/shared/FaqSection";
import { CAREER_AREAS, FAQ_CARREIRAS } from "@/lib/internal-page-content";
import { COLORS, WHATSAPP_URL } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { ArrowRight, BarChart3, HeartHandshake, LineChart, Users } from "lucide-react";

const PERKS = [
  {
    title: "Cultura data-driven",
    text: "Decisões guiadas por métricas, experimentos e clareza de impacto.",
    Icon: BarChart3,
  },
  {
    title: "Time experiente",
    text: "Aprendizado contínuo com quem vive mídia paga e performance no dia a dia.",
    Icon: Users,
  },
  {
    title: "Crescimento real",
    text: "Projetos com clientes que exigem excelência e resultado mensurável.",
    Icon: LineChart,
  },
  {
    title: "Parceria próxima",
    text: "Autonomia com suporte — combinamos responsabilidade e colaboração.",
    Icon: HeartHandshake,
  },
] as const;

const STEPS = [
  "Envie seu CV e uma mensagem pelo WhatsApp",
  "Alinhamos fit cultural e experiência",
  "Conversa com o time e próximos passos",
] as const;

export default function TrabalheConoscoContent() {
  const simplified = useSimplifiedMotion();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50/60 to-white py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />
        <div className="pointer-events-none absolute -left-28 top-1/4 h-[360px] w-[360px] rounded-full bg-[#ff6600]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span
                className="inline-flex rounded-full border border-[#ff6600]/20 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm"
                style={{ color: COLORS.primary }}
              >
                Carreiras
              </span>
              <p className="mt-8 text-lg leading-relaxed text-stone-600 md:text-xl">
                Estamos sempre em busca de talentos que queiram fazer a diferença no marketing digital. Se você é
                apaixonado por dados, performance e resultados, queremos você no nosso time.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((perk, i) => {
              const Icon = perk.Icon;
              return (
              <ScrollReveal key={perk.title} delay={i * 0.06}>
                <motion.div
                  whileHover={simplified ? undefined : { y: -6 }}
                  className="h-full rounded-2xl border border-stone-200/80 bg-white p-7 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.08)] transition-shadow hover:border-[#ff6600]/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10">
                    <Icon size={22} style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-stone-900">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{perk.text}</p>
                </motion.div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
              Áreas
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Perfis que costumam dialogar bem com a Numeratti
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
              Não há vaga aberta listada aqui — use o WhatsApp para se apresentar. Estas são frentes onde mais
              conversamos com candidatos.
            </p>
          </ScrollReveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAREER_AREAS.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-stone-200/80 bg-stone-50/40 p-6">
                  <h3 className="text-lg font-bold text-stone-900">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{area.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7f0] via-white to-stone-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-violet-400/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
                Processo
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Como{" "}
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                  candidatar-se
                </span>
              </h2>
              <ol className="mt-10 space-y-6">
                {STEPS.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#ff6600] shadow-md ring-1 ring-stone-200/80">
                      {i + 1}
                    </span>
                    <p className="pt-1.5 text-lg text-stone-700">{step}</p>
                  </li>
                ))}
              </ol>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-900 px-8 py-10 text-white shadow-[0_28px_80px_-32px_rgba(0,0,0,0.4)] md:px-10 md:py-12">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ff6600]/30 blur-3xl" />
                <h3 className="relative text-xl font-bold md:text-2xl">Pronto para o próximo passo?</h3>
                <p className="relative mt-4 text-stone-300">
                  Envie seu currículo pelo WhatsApp com uma breve apresentação. Retornamos o quanto antes.
                </p>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={simplified ? undefined : { scale: 1.03 }}
                  whileTap={simplified ? undefined : { scale: 0.98 }}
                  className="relative mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Enviar currículo pelo WhatsApp
                  <ArrowRight size={18} />
                </motion.a>
                <p className="relative mt-8 text-sm text-stone-400">
                  Quer conhecer a empresa antes?{" "}
                  <Link href="/quem-somos" className="font-semibold text-white underline-offset-4 hover:underline">
                    Quem somos
                  </Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FaqSection
        title="Carreiras na Numeratti"
        subtitle="Envie mensagem no WhatsApp se sua dúvida não estiver aqui."
        items={FAQ_CARREIRAS.map((x) => ({ q: x.q, a: x.a }))}
      />
    </>
  );
}
