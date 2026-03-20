"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };

export default function FaqSection({
  eyebrow = "Dúvidas frequentes",
  title,
  subtitle,
  items,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: readonly FaqItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/15 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest text-stone-500">{eyebrow}</p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
          {subtitle ? <p className="mx-auto mt-4 max-w-xl text-center text-lg text-stone-600">{subtitle}</p> : null}
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.q} delay={Math.min(i * 0.05, 0.25)}>
              <details className="group rounded-2xl border border-stone-200/90 bg-stone-50/50 px-5 py-1 transition-colors open:bg-white open:shadow-md open:shadow-stone-200/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-stone-400 transition-transform group-open:rotate-180"
                    style={{ color: undefined }}
                    strokeWidth={2}
                  />
                </summary>
                <p className="border-t border-stone-100 pb-4 pt-1 leading-relaxed text-stone-600">{item.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
