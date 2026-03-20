"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COLORS } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

export default function ValuePillarsGrid({
  title,
  subtitle,
  items,
  icons,
}: {
  title: string;
  subtitle?: string;
  items: readonly { title: string; text: string }[];
  icons: readonly LucideIcon[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-[#ff6600]/6 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
            Princípios
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">{subtitle}</p>
          ) : null}
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm transition-shadow hover:border-[#ff6600]/20 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10">
                    <Icon size={22} style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.text}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
