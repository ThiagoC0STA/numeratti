"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { CLIENT_LOGOS, COLORS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

type ClientsSectionVariant = "home" | "page";

function LogoMarquee({ direction = "left" }: { direction?: "left" | "right" }) {
  const simplified = useSimplifiedMotion();
  const ordered = direction === "left" ? CLIENT_LOGOS : [...CLIENT_LOGOS].reverse();
  const loop = [...ordered, ...ordered];

  if (simplified) {
    return (
      <div className="flex flex-wrap justify-center gap-4 py-2 md:gap-6">
        {ordered.map((client) => (
          <div
            key={`${direction}-${client.name}`}
            className="flex h-28 w-[11.5rem] shrink-0 items-center justify-center rounded-2xl border border-stone-200/90 bg-white px-4 py-3 shadow-sm md:h-32 md:w-[13rem]"
          >
            <Image
              src={client.url}
              alt={client.name}
              width={280}
              height={120}
              className="h-[3.75rem] w-auto max-w-[min(100%,10rem)] object-contain md:h-[5.5rem] md:max-w-[min(100%,12rem)]"
              quality={70}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#fafaf9] to-transparent md:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#fafaf9] to-transparent md:w-28" />

      <motion.div
        className="flex w-max gap-6 md:gap-8"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex h-32 w-[13rem] shrink-0 items-center justify-center rounded-2xl border border-stone-200/90 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[#ff6600]/35 hover:shadow-lg md:h-36 md:w-[15.5rem] md:px-6"
          >
            <Image
              src={client.url}
              alt={client.name}
              width={280}
              height={120}
              className="h-[4.5rem] w-auto max-w-[min(100%,11rem)] object-contain md:h-[6.75rem] md:max-w-[min(100%,13rem)]"
              quality={70}
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ClientsSection({ variant = "home" }: { variant?: ClientsSectionVariant }) {
  const isPage = variant === "page";
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#fafaf9] py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#ff6600]/8 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p
            className="text-center text-sm font-bold uppercase tracking-widest"
            style={{ color: COLORS.primary }}
          >
            {isPage ? "Portfólio" : "Nossos clientes"}
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
            Mais de{" "}
            <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
              200 empresas
            </span>{" "}
            {isPage ? "já passaram pela Numeratti" : "escolheram a Numeratti"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
            {isPage
              ? "Uma amostra das marcas com as quais geramos performance e consistência"
              : "Marcas que confiam no nosso trabalho para resultados reais"}
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-8 md:mt-20 md:space-y-10">
          <LogoMarquee direction="left" />
          <LogoMarquee direction="right" />
        </div>

        {!isPage ? (
          <ScrollReveal delay={0.15}>
            <div className="mt-14 text-center">
              <Link
                href="/clientes"
                className="group inline-flex items-center gap-2 rounded-full border border-[#ff6600]/35 bg-white px-8 py-3.5 text-sm font-bold text-[#ff6600] shadow-md transition-all hover:bg-[#ff6600] hover:text-white"
              >
                Veja quem mais confia em nosso trabalho
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
