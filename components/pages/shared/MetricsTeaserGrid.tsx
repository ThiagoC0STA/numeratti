"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { METRICS, COLORS } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { BarChart3, Users, TrendingUp } from "lucide-react";

const ICONS = [BarChart3, Users, TrendingUp] as const;

export default function MetricsTeaserGrid() {
  const simplified = useSimplifiedMotion();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7f0] via-white to-stone-50 py-20 lg:py-28">
      <div className="pointer-events-none absolute right-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
            Escala
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Números que mostram o ritmo da operação
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
            Indicadores agregados do nosso trabalho com clientes — sempre com leitura no contexto do seu negócio.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {METRICS.map((metric, i) => {
            const Icon = ICONS[i] ?? BarChart3;
            return (
              <ScrollReveal key={metric.label} delay={i * 0.08}>
                <motion.div
                  whileHover={simplified ? undefined : { y: -6 }}
                  className="h-full rounded-2xl border border-stone-200/80 bg-white p-8 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10">
                    <Icon size={24} style={{ color: COLORS.primary }} />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-stone-500">{metric.label}</p>
                  <div className="mt-2 text-3xl font-bold tabular-nums text-stone-900 md:text-4xl">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      format={metric.label === "Impressões" ? "compact" : "full"}
                      className="text-3xl font-bold md:text-4xl"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-stone-600">{metric.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
