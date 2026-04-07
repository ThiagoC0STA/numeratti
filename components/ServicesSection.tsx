"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { SERVICES, COLORS } from "@/lib/constants";
import PlatformLogosGrid from "@/components/services/PlatformLogosGrid";
import {
  Search,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const SERVICE_ICONS = [BarChart3, Search, Facebook, Instagram, Youtube, Linkedin] as const;

export default function ServicesSection() {
  const simplified = useSimplifiedMotion();
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50 py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-[#ff6600]/10 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p
            className="text-center text-sm font-bold uppercase tracking-widest text-[#ff6600]"
            style={{ color: COLORS.primary }}
          >
            Nossos serviços
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
            Como{" "}
            <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
              fazemos
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
            Consultoria e operação em diversas plataformas de mídia paga
          </p>
        </ScrollReveal>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i] ?? MessageCircle;
            return (
              <ScrollReveal key={service.id} delay={i * 0.06}>
                <motion.div
                  whileHover={
                    simplified ? undefined : { y: -10, rotate: i % 2 === 0 ? 0.5 : -0.5 }
                  }
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-8 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.08)] transition-shadow hover:border-[#ff6600]/20 hover:shadow-[0_24px_60px_-24px_rgba(255,102,0,0.12)]"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-[#ff6600]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="font-mono text-sm font-bold text-[#ff6600]/70">{service.id}</span>

                  <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} style={{ color: COLORS.primary }} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-stone-900">{service.title}</h3>

                  <p className="mt-3 leading-relaxed text-stone-600">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-28 rounded-[2rem] border border-stone-200/80 bg-gradient-to-b from-white to-stone-50/80 px-4 py-10 shadow-inner sm:px-8 md:py-14">
            <h3 className="mx-auto max-w-4xl text-center text-2xl font-bold leading-tight tracking-tight text-stone-900 md:text-3xl lg:text-4xl">
              <strong>
                Criamos e otimizamos campanhas em diversas plataformas de{" "}
                <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                  mídia paga
                </span>
              </strong>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-stone-500 md:text-base">
              Parcerias e certificações nas principais redes — mesmos ativos do site que você já conhece.
            </p>
            <PlatformLogosGrid />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
