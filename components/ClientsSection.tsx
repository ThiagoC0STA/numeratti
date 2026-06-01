"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLIENT_LOGOS, COLORS, type LogoFit } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

type ClientsSectionVariant = "home" | "page";

/** Per-logo framing, derived from each logo's `fit` hint (default "fill"). */
function logoFrame(fit: LogoFit = "fill") {
  if (fit === "contain") {
    return { pad: "p-5 md:p-6", box: "h-[75%] w-[90%]", object: "object-contain" };
  }
  if (fit === "cover") {
    return { pad: "p-2", box: "h-full w-full", object: "object-cover" };
  }
  return { pad: "p-2", box: "h-full w-full", object: "object-contain" };
}

function LogoMarquee({ direction = "left" }: { direction?: "left" | "right" }) {
  const ordered =
    direction === "left" ? CLIENT_LOGOS : [...CLIENT_LOGOS].reverse();
  const loop = [...ordered, ...ordered];

  return (
    <div className="relative overflow-hidden py-1">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 110s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 110s linear infinite;
        }
      `}</style>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#fafaf9] dark:from-neutral-950 to-transparent md:w-16" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#fafaf9] dark:from-neutral-950 to-transparent md:w-16" />

      <div
        className={`flex w-max gap-4 md:gap-8 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {loop.map((client, i) => {
          const frame = logoFrame(client.fit);
          return (
            <div
              key={`${client.name}-${i}`}
              className={`flex h-24 w-[10rem] shrink-0 items-center justify-center rounded-2xl border border-stone-200/60 bg-white shadow-[0_8px_28px_-14px_rgba(15,15,15,0.12)] ring-1 ring-stone-100/50 md:h-28 md:w-[14rem] ${frame.pad}`}
            >
              <div className={`relative ${frame.box}`}>
                <Image
                  src={client.url}
                  alt={client.name}
                  fill
                  className={frame.object}
                  style={
                    client.invert ? { filter: "brightness(0)" } : undefined
                  }
                  sizes="(max-width: 768px) 10rem, 14rem"
                  quality={75}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ClientsSection({
  variant = "home",
}: {
  variant?: ClientsSectionVariant;
}) {
  const isPage = variant === "page";
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#fafaf9] dark:bg-neutral-950 py-14 lg:py-20"
    >
      <div className="dark:hidden pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#ff6600]/8 blur-[120px]" />
      <div className="dark:hidden pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p
            className="text-center text-sm font-bold uppercase tracking-widest"
            style={{ color: COLORS.primary }}
          >
            {isPage ? "Portfólio" : "Nossos clientes"}
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl lg:text-5xl">
            Mais de{" "}
            <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
              200 empresas
            </span>{" "}
            {isPage ? "já passaram pela Numeratti" : "escolheram a Numeratti"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600 dark:text-stone-400">
            {isPage
              ? "Uma amostra das marcas com as quais geramos performance e consistência"
              : "Marcas que confiam no nosso trabalho para resultados reais"}
          </p>
        </ScrollReveal>

        {isPage ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-12 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {CLIENT_LOGOS.map((client) => {
              const frame = logoFrame(client.fit);
              return (
                <div
                  key={client.name}
                  className={`flex h-28 items-center justify-center rounded-2xl border border-stone-200/60 bg-white shadow-[0_8px_28px_-14px_rgba(15,15,15,0.12)] ring-1 ring-stone-100/50 ${frame.pad}`}
                >
                  <div className={`relative ${frame.box}`}>
                    <Image
                      src={client.url}
                      alt={client.name}
                      fill
                      className={frame.object}
                      style={
                        client.invert ? { filter: "brightness(0)" } : undefined
                      }
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
                className="group inline-flex items-center gap-2 rounded-full border border-[#ff6600]/35 bg-white dark:bg-neutral-950 px-8 py-3.5 text-sm font-bold text-[#ff6600] shadow-md transition-all hover:bg-[#ff6600] hover:text-white"
              >
                Veja quem mais confia em nosso trabalho
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
