"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLIENT_LOGOS, COLORS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

type ClientsSectionVariant = "home" | "page";

/** Same sizing rules used by the /clientes grid,  keeps brand presentation consistent. */
const LARGER_IDXS = new Set([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 16, 17, 18, 19, 23, 31, 32, 33, 34,
  36, 37, 38, 39,
]);
const COVER_IDXS = new Set([16, 18, 33]);

function LogoMarquee({ direction = "left" }: { direction?: "left" | "right" }) {
  const indexed = CLIENT_LOGOS.map((c, idx) => ({ ...c, idx }));
  const ordered = direction === "left" ? indexed : [...indexed].reverse();
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
          const isLarger = LARGER_IDXS.has(client.idx);
          const isCover = COVER_IDXS.has(client.idx);
          return (
            <div
              key={`${client.name}-${i}`}
              className={`flex h-24 w-[10rem] shrink-0 items-center justify-center rounded-2xl border border-stone-200/60 bg-white shadow-[0_8px_28px_-14px_rgba(15,15,15,0.12)] ring-1 ring-stone-100/50 md:h-28 md:w-[14rem] ${
                isLarger ? "p-2" : "p-5 md:p-6"
              }`}
            >
              <div
                className={`relative ${isLarger ? "h-full w-full" : "h-[75%] w-[90%]"}`}
              >
                <Image
                  src={client.url}
                  alt={client.name}
                  fill
                  className={isCover ? "object-cover" : "object-contain"}
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
            {CLIENT_LOGOS.map((client, idx) => {
              const isLarger = LARGER_IDXS.has(idx);
              const isCover = COVER_IDXS.has(idx);
              return (
                <div
                  key={client.name}
                  className={`flex h-28 items-center justify-center rounded-2xl border border-stone-200/60 bg-white shadow-[0_8px_28px_-14px_rgba(15,15,15,0.12)] ring-1 ring-stone-100/50 ${isLarger ? "p-2" : "p-5"}`}
                >
                  <div
                    className={`relative ${isLarger ? "h-full w-full" : "h-[75%] w-[90%]"}`}
                  >
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
