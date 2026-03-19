"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COLORS, WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight, TrendingUp } from "lucide-react";

const CASES = [
  {
    title: "Camed Corretora",
    description:
      "Uma marca com mais de 40 anos de experiência no mercado decidiu expandir sua atuação ao entrar no mundo da mídia paga em parceria com a Numeratti.",
    metrics: [],
    link: "https://numeratti.com.br/cases/aumento-geracao-leads-camed/",
  },
  {
    title: "Diamantes Lingerie",
    description:
      "Elevando resultados e expansão de vendas com estratégias de performance.",
    metrics: [{ value: 48, suffix: "%" }, { value: 45, suffix: "%" }],
    link: "https://numeratti.com.br/cases/diamantes-lingerie-elevando-resultados-e-expansao-de-vendas/",
  },
  {
    title: "Acal",
    description: "Alavancando vendas e conversões com mídia paga estratégica.",
    metrics: [{ value: 45, suffix: "%" }],
    link: "https://numeratti.com.br/cases/alavancando-vendas-e-conversoes-acal-e-numeratti/",
  },
] as const;

export default function CasesSection() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden bg-zinc-100 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Cases de <span style={{ color: COLORS.primary }}>sucesso</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Empresas que aceleraram seus resultados com a Numeratti
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {CASES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ff6600]/40 hover:shadow-xl"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <TrendingUp size={24} style={{ color: COLORS.primary }} />
                </div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
                {item.metrics.length > 0 && (
                  <div className="mt-4 flex gap-4">
                    {item.metrics.map((m, j) => (
                      <span
                        key={j}
                        className="text-2xl font-bold"
                        style={{ color: COLORS.primary }}
                      >
                        {m.value}
                        {m.suffix}
                      </span>
                    ))}
                  </div>
                )}
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

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
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
