"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CASES, COLORS, WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CasesContent() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-black md:text-4xl">
            Cases de <span style={{ color: COLORS.primary }}>sucesso</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Empresas que aceleraram seus resultados com a Numeratti
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ff6600]/40 hover:shadow-xl"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${COLORS.primary}20` }}
                >
                  <TrendingUp size={28} style={{ color: COLORS.primary }} />
                </div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-4 text-gray-600">{item.excerpt}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: COLORS.primary }}
                  >
                    {item.metric}
                  </span>
                  <span className="text-sm text-gray-500">{item.metricLabel}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold">
                  <span style={{ color: COLORS.primary }}>Saiba mais</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: COLORS.primary }}
                  />
                </span>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 text-center">
            <p className="mb-6 text-gray-600">
              Quer fazer parte do grupo de empresas que estão acelerando os seus
              resultados com a Numeratti?
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex rounded-full px-8 py-4 font-semibold text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
              Fazer parte dos nossos cases
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
