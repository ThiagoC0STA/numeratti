"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  SOLUCOES,
  SERVICES,
  PLATFORMS,
  COLORS,
  WHATSAPP_URL,
} from "@/lib/constants";
import {
  BarChart3,
  Search,
  Target,
  Zap,
  Lightbulb,
} from "lucide-react";

const ICONS = [BarChart3, Target, Zap, Lightbulb] as const;

export default function SolucoesContent() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-lg text-gray-600">
            {SOLUCOES.intro}
          </p>
        </ScrollReveal>

        <div className="mt-20 space-y-16">
          {SOLUCOES.sections.map((section, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <ScrollReveal key={section.title} delay={i * 0.1}>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="flex items-start gap-6">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${COLORS.primary}20` }}
                    >
                      <Icon size={28} style={{ color: COLORS.primary }} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-black">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-gray-600">{section.text}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-24">
            <h3 className="text-center text-2xl font-bold text-black">
              Como <span style={{ color: COLORS.primary }}>fazemos</span>
            </h3>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <span
                    className="text-sm font-mono font-semibold"
                    style={{ color: COLORS.primary }}
                  >
                    {service.id}
                  </span>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                    <Search size={24} style={{ color: COLORS.primary }} />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-black">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-24">
            <h3 className="text-center text-2xl font-bold text-black">
              Criamos e otimizamos campanhas em diversas plataformas
            </h3>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {PLATFORMS.map((platform) => (
                <span
                  key={platform}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="mt-24 rounded-2xl bg-black p-12 text-center text-white">
            <h3 className="text-2xl font-bold">Vamos fazer negócio?</h3>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              Deixe seu contato e mensagens abaixo que responderemos em breve.
              Faça parte do nosso time de clientes!
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="mt-8 inline-flex rounded-full px-8 py-4 font-semibold text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
              Falar com um especialista
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
