"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { COLORS, WHATSAPP_URL } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import PageHeroVisual, { type PageHeroVisualKind } from "@/components/page-hero/PageHeroVisual";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  eyebrow?: string;
  backgroundImage?: string;
  /** Right-column artwork: charts, logos, case cards, etc. */
  visual?: PageHeroVisualKind;
}

export default function PageHero({
  title,
  subtitle,
  highlight,
  eyebrow,
  backgroundImage,
  visual = "default",
}: PageHeroProps) {
  const words = useMemo(() => title.split(" ").filter(Boolean), [title]);
  const pathname = usePathname();
  const crumbs =
    pathname && pathname !== "/"
      ? [
          { name: "Início", path: "/" },
          { name: title, path: pathname },
        ]
      : null;

  if (backgroundImage) {
    return (
      <section className="relative min-h-[52vh] overflow-hidden lg:min-h-[56vh]">
        {crumbs ? <BreadcrumbJsonLd items={crumbs} /> : null}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(250,248,245,0.92) 0%, rgba(255,247,240,0.95) 50%, rgba(255,255,255,0.98) 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto flex min-h-[52vh] max-w-7xl flex-col justify-center px-6 py-24 lg:min-h-[56vh] lg:px-8 lg:py-28">
          <div className="max-w-3xl animate-slide-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
            {eyebrow ? (
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: COLORS.primary }}>
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl lg:text-6xl">
              {words.map((word, i) =>
                highlight && word.toLowerCase() === highlight.toLowerCase() ? (
                  <span
                    key={`${word}-${i}`}
                    className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent"
                  >
                    {word}{" "}
                  </span>
                ) : (
                  <span key={`${word}-${i}`}>{word} </span>
                )
              )}
            </h1>
            {subtitle ? (
              <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl">{subtitle}</p>
            ) : null}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none"
              style={{ backgroundColor: COLORS.primary }}
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 dark:from-neutral-950 via-white dark:via-neutral-950 to-[#fff7f0] dark:to-neutral-950 pb-0 pt-6 md:pt-10">
      {crumbs ? <BreadcrumbJsonLd items={crumbs} /> : null}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#ff6600]/[0.07] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-amber-400/[0.08] blur-[90px]"
        aria-hidden
      />
      <div
        className="dark:hidden pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(rgba(120,113,108,0.06) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 pb-16 pt-16 md:pb-20 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-7">
            {eyebrow ? (
              <span
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-200/90 dark:border-stone-800/90 bg-white/80 dark:bg-neutral-950/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600 dark:text-stone-400 shadow-sm backdrop-blur-sm animate-slide-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: COLORS.primary }} />
                {eyebrow}
              </span>
            ) : null}

            <div className="relative">
              <span
                className="pointer-events-none absolute -left-4 top-2 hidden h-[calc(100%-0.5rem)] w-1 rounded-full bg-gradient-to-b from-[#ff6600] to-[#f27405] md:block lg:-left-5"
                aria-hidden
              />

              <h1 className="flex flex-wrap items-baseline gap-x-2 gap-y-1 pl-0 text-4xl font-bold leading-[1.12] tracking-tight md:pl-2 md:text-5xl lg:text-[3.25rem] lg:leading-[1.1] xl:text-[3.5rem]">
                {words.map((word, i) => {
                  const isHi = highlight && word.toLowerCase() === highlight.toLowerCase();
                  return (
                    <span
                      key={`${word}-${i}`}
                      style={{ animationDelay: `${40 + i * 50}ms` }}
                      className={`inline-block animate-slide-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 ${
                        isHi
                          ? "bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent"
                          : "text-stone-900 dark:text-stone-100"
                      }`}
                    >
                      {word}
                    </span>
                  );
                })}
              </h1>
            </div>

            {subtitle ? (
              <p
                style={{ animationDelay: "280ms" }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl animate-slide-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              >
                {subtitle}
              </p>
            ) : null}

            <div
              style={{ animationDelay: "400ms" }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center animate-slide-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-transform duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none"
                style={{ backgroundColor: COLORS.primary }}
              >
                Falar com um especialista
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-stone-300/90 bg-white/90 dark:bg-neutral-950/90 px-8 py-3.5 text-sm font-bold text-stone-800 dark:text-stone-200 shadow-sm transition hover:border-[#ff6600]/35 hover:text-[#ff6600]"
              >
                Formulário de contato
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <PageHeroVisual kind={visual} />
          </div>
        </div>
      </div>

      <div className="relative z-[1] -mb-px leading-none" aria-hidden>
        <svg
          className="block h-[52px] w-full text-[#fff7f0] dark:text-neutral-950 sm:h-[68px] md:h-[80px]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,40 Q180,0 360,28 T720,32 T1080,24 T1440,36 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}
