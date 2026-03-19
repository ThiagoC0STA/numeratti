"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES, PLATFORMS, COLORS } from "@/lib/constants";
import {
  Search,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const SERVICE_ICONS = [
  BarChart3,
  Search,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
] as const;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Como <span style={{ color: COLORS.primary }}>fazemos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Consultoria e operação em diversas plataformas de mídia paga
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i] ?? MessageCircle;
            return (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ff6600]/40 hover:shadow-xl"
                >
                  <div
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-5 transition-opacity group-hover:opacity-10"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  <span
                    className="text-sm font-mono font-semibold"
                    style={{ color: COLORS.primary }}
                  >
                    {service.id}
                  </span>
                  <div
                    className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${COLORS.primary}15` }}
                  >
                    <Icon size={24} style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-24">
            <h3 className="text-center text-xl font-bold text-black">
              Criamos e otimizamos campanhas em diversas plataformas
            </h3>
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {PLATFORMS.map((platform, i) => (
                <motion.span
                  key={platform}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#ff6600]/40 hover:text-black"
                >
                  {platform}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
