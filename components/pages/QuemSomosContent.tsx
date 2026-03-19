"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  QUEM_SOMOS,
  ABOUT_STATS,
  PLATFORMS,
  CLIENT_LOGOS,
  COLORS,
  WHATSAPP_URL,
} from "@/lib/constants";

export default function QuemSomosContent() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal className="space-y-8">
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              {QUEM_SOMOS.headline}
            </h2>
            {QUEM_SOMOS.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="text-xl font-bold text-black">
                  Consultoria Numeratti
                </h3>
                <div className="mt-6 flex items-start gap-6">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={QUEM_SOMOS.founder.image}
                      alt={QUEM_SOMOS.founder.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">
                      {QUEM_SOMOS.founder.name}
                    </h4>
                    <p
                      className="text-sm font-medium"
                      style={{ color: COLORS.primary }}
                    >
                      {QUEM_SOMOS.founder.role}
                    </p>
                    <p className="mt-3 text-gray-600">{QUEM_SOMOS.founder.bio}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-black">
                  Premiações e certificações
                </h3>
                <p className="mt-4 text-gray-600">{QUEM_SOMOS.award}</p>
                <motion.a
                  href="https://www.rdstation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-6 inline-flex font-semibold"
                  style={{ color: COLORS.primary }}
                >
                  Quero Impulsionar o meu Negócio com o RD Station →
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-24">
            <h3 className="text-center text-2xl font-bold text-black">
              Nossos <span style={{ color: COLORS.primary }}>números</span>
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
              Acompanhe Nossos Números!
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {ABOUT_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value === 1.9 ? 1 : 0}
                    className="text-4xl font-bold"
                    style={{ color: COLORS.primary }}
                  />
                  <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-24">
            <h3 className="text-center text-2xl font-bold text-black">
              Criamos e Otimizamos campanhas em diversas plataformas de mídia
              paga
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

        <ScrollReveal delay={0.5}>
          <div className="mt-24">
            <h3 className="text-center text-2xl font-bold text-black">
              Mais de 200 clientes atendidos com qualidade
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
              Veja alguns de nossos clientes que escolheram a Numeratti para
              estruturar ou acelerar o crescimento.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {CLIENT_LOGOS.map((client) => (
                <motion.div
                  key={client.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-6"
                >
                  <Image
                    src={client.url}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex rounded-full px-8 py-4 font-semibold text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                Falar com um especialista
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
