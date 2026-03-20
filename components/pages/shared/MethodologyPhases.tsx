"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { COLORS } from "@/lib/constants";

type Phase = { phase: string; title: string; text: string };

export default function MethodologyPhases({
  eyebrow,
  title,
  subtitle,
  phases,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  phases: readonly Phase[];
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#ff6600]/5 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">{subtitle}</p>
          ) : null}
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {phases.map((p, i) => (
            <ScrollReveal key={p.phase} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white to-stone-50/80 p-8 shadow-sm transition-shadow hover:border-[#ff6600]/20 hover:shadow-md">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {p.phase}
                </span>
                <h3 className="mt-5 text-xl font-bold text-stone-900">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
