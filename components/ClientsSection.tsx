"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { CLIENT_LOGOS, COLORS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

type ClientsSectionVariant = "home" | "page";

function LogoMarquee({ direction = "left" }: { direction?: "left" | "right" }) {
  const ordered = direction === "left" ? CLIENT_LOGOS : [...CLIENT_LOGOS].reverse();
  const loop = [...ordered, ...ordered];

  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#fafaf9] to-transparent md:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#fafaf9] to-transparent md:w-24" />

      <motion.div
        className="flex w-max gap-3 md:gap-5"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex h-20 w-[9rem] shrink-0 items-center justify-center rounded-xl border border-stone-200/90 bg-white px-3 py-2 shadow-sm md:h-28 md:w-[13rem] md:px-5 md:py-3"
          >
            <Image
              src={client.url}
              alt={client.name}
              width={240}
              height={100}
              className="h-[2.75rem] w-auto max-w-[min(100%,7rem)] object-contain md:h-[4.5rem] md:max-w-[min(100%,11rem)]"
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
      className="relative overflow-hidden bg-[#fafaf9] py-14 lg:py-20"
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

        {isPage ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-12 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {CLIENT_LOGOS.map((client, idx) => {
              // 1-indexed positions the user marked as "increase"
              const largerIdxs = new Set([0,1,2,3,4,5,6,7,8,9,10,13,15,16,17,18,19,23,31,32,33,34,36,37,38,39]);
              const coverIdxs = new Set([16, 18, 33]);
              const isLarger = largerIdxs.has(idx);
              const isCover = coverIdxs.has(idx);
              return (
              <div
                key={client.name}
                className={`flex h-28 items-center justify-center rounded-xl border border-stone-200/90 bg-white shadow-sm ${isLarger ? "p-2" : "p-5"}`}
              >
                <div className={`relative ${isLarger ? "h-full w-full" : "h-[75%] w-[90%]"}`}>
                  <Image
                    src={client.url}
                    alt={client.name}
                    fill
                    className={isCover ? "object-cover" : "object-contain"}
                    quality={80}
                    loading="lazy"
                  />
                </div>
              </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 space-y-4 md:mt-12 md:space-y-6">
            <LogoMarquee direction="left" />
            <LogoMarquee direction="right" />
          </div>
        )}

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
