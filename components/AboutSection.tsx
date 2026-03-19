"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ABOUT_STATS, COLORS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff6600]/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#ff6600]/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Sobre a <span style={{ color: COLORS.primary }}>Numeratti</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              A Numeratti nasceu com um foco definido: gerar por meio dos
              números,{" "}
              <strong className="text-white">
                resultados reais e mensuráveis
              </strong>{" "}
              para os nossos clientes. Hoje, no mercado de marketing digital,
              vemos várias promessas, mas poucas são cumpridas integralmente.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Quantas vezes você já ficou esperando dados concretos para tomada
              de decisão? É isso que oferecemos:{" "}
              <strong className="text-white">
                dados, análises, números e comprometimento com o resultado.
              </strong>{" "}
              Talvez não seja possível prever o futuro, mas é possível construir
              o sucesso por meio do trabalho correto.
            </p>
            <Link
              href="/quem-somos"
              className="mt-8 inline-flex items-center gap-2 font-semibold transition-transform hover:translate-x-1"
              style={{ color: COLORS.primary }}
            >
              Saiba mais
              <ArrowRight size={20} />
            </Link>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-bold text-white">
                Nossos <span style={{ color: COLORS.primary }}>números</span>
              </h3>
            </ScrollReveal>
            {ABOUT_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.15 + i * 0.08}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-[#ff6600]/30"
                >
                  <div>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl font-bold text-white md:text-4xl"
                      decimals={stat.value === 1.9 ? 1 : 0}
                    />
                    <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                  </div>
                  <div
                    className="h-12 w-12 rounded-full opacity-20"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
