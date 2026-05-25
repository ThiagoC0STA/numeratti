"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CASES, CLIENT_LOGOS, COLORS, ABOUT_STATS } from "@/lib/constants";
import {
  MessageCircle,
  Newspaper,
  Users,
  Briefcase,
  TrendingUp,
  Sparkles,
  Wallet,
} from "lucide-react";
import InnerHeroArtwork from "@/components/page-hero/InnerHeroArtwork";

export type PageHeroVisualKind =
  | "default"
  | "solucoes"
  | "clientes"
  | "cases"
  | "contato"
  | "blog"
  | "quem-somos"
  | "carreiras";

const BAR_HEIGHTS = [45, 72, 58, 88, 65, 92, 78];

function HeroSolucoesCharts() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="relative rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-neutral-950 p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
          Performance · mídia paga
        </p>
        <p className="mt-1 text-lg font-bold text-stone-900 dark:text-stone-100">
          Resultados semanais
        </p>
        <div className="mt-4 flex h-[7.5rem] items-end justify-between gap-1.5 px-1">
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              style={{
                height: `${Math.round((h / 100) * 118)}px`,
                animation: `heroBarRise 700ms ${60 + i * 50}ms cubic-bezier(0.22,1,0.36,1) backwards`,
                transformOrigin: "bottom",
              }}
              className="w-full max-w-[2.25rem] rounded-t-md bg-gradient-to-t from-[#ff6600] to-[#f27405] motion-reduce:animate-none"
            />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 dark:border-stone-800 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase text-stone-500">
              Tendência
            </p>
            <p className="text-sm font-bold text-[#ff6600]">+127% conversões</p>
          </div>
          <svg
            viewBox="0 0 120 40"
            className="h-10 w-[7.5rem] text-[#ff6600]"
            fill="none"
          >
            <defs>
              <linearGradient id="heroLineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6600" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ff6600" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,32 L20,28 L40,18 L55,22 L70,8 L85,12 L100,4 L120,6 L120,40 L0,40 Z"
              fill="url(#heroLineGrad)"
            />
            <path
              d="M0,32 L20,28 L40,18 L55,22 L70,8 L85,12 L100,4 L120,6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
              style={{
                animation:
                  "heroPathDraw 1200ms 300ms cubic-bezier(0.22,1,0.36,1) forwards",
              }}
              className="motion-reduce:[stroke-dashoffset:0] motion-reduce:animate-none"
            />
          </svg>
        </div>
      </div>
      <div
        style={{
          animation:
            "heroSlideUp 500ms 450ms cubic-bezier(0.22,1,0.36,1) backwards",
        }}
        className="absolute -bottom-3 -left-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-neutral-950 px-3 py-2 text-xs font-semibold shadow-lg sm:-left-4 motion-reduce:animate-none"
      >
        <span style={{ color: COLORS.primary }}>ROAS</span>
        <span className="ml-1.5 text-stone-800 dark:text-stone-200">17x</span>
      </div>
    </div>
  );
}

function HeroClientesLogos() {
  const slice = CLIENT_LOGOS.slice(0, 6);
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white/95 dark:bg-neutral-950/95 p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2">
          <Users
            size={18}
            className="text-[#ff6600]"
            style={{ color: COLORS.primary }}
          />
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            Marcas que confiam na Numeratti
          </p>
        </div>
        <p className="mt-1 text-xs text-stone-500">
          Amostra do portfólio, mais de 200 empresas atendidas
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {slice.map((client, i) => (
            <div
              key={client.name}
              style={{
                animation: `scaleUpFade 450ms ${i * 50}ms cubic-bezier(0.22,1,0.36,1) backwards`,
              }}
              className="flex aspect-[5/3] items-center justify-center rounded-xl border border-stone-100 dark:border-stone-800 bg-stone-50/80 dark:bg-neutral-950/80 px-2 py-2 motion-reduce:animate-none"
            >
              <Image
                src={client.url}
                alt={client.name}
                width={120}
                height={48}
                className="h-9 w-auto max-w-full object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroCasesStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % CASES.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  const current = CASES[index];

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-neutral-950 shadow-[0_18px_44px_-22px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff6600]/18 to-[#f27405]/10">
              <TrendingUp size={14} style={{ color: COLORS.primary }} />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-500">
              Cases reais
            </p>
          </div>
          <span className="font-mono text-[10px] font-bold text-stone-400 tabular-nums">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(CASES.length).padStart(2, "0")}
          </span>
        </div>

        <div
          key={current.title}
          className="relative min-h-[180px] px-5 py-5 motion-safe:animate-fade-in"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
            {current.title}
          </p>
          <p className="mt-2 line-clamp-2 text-sm font-medium leading-snug text-stone-700 dark:text-stone-300">
            {current.excerpt}
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <p
              className="text-3xl font-extrabold tabular-nums leading-none"
              style={{ color: COLORS.primary }}
            >
              {current.metric}
            </p>
            <p className="max-w-[12rem] text-[10px] font-medium uppercase leading-tight tracking-wide text-stone-400">
              {current.metricLabel}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 border-t border-stone-100 dark:border-stone-800 px-4 py-3">
          {CASES.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver case ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  active ? "w-6" : "w-1.5 bg-stone-300 dark:bg-stone-700"
                }`}
                style={active ? { backgroundColor: COLORS.primary } : undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HeroContatoMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-neutral-950 p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
          <MessageCircle className="text-[#25d366]" size={22} />
          <div>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              Fale com a Numeratti
            </p>
            <p className="text-xs text-stone-500">WhatsApp + formulário</p>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg rounded-tl-sm bg-stone-100 px-3 py-2.5 text-xs text-stone-700 dark:text-stone-300">
            Olá! Quero entender como vocês podem ajudar nossa operação de mídia.
          </div>
          <div className="ml-6 rounded-lg rounded-tr-sm border border-[#ff6600]/20 bg-[#fff7f0] dark:bg-neutral-950 px-3 py-2.5 text-xs text-stone-800 dark:text-stone-200">
            Vamos alinhar objetivos e próximos passos, resposta em horário
            comercial.
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-2.5 w-full rounded bg-stone-100" />
            <div className="h-2.5 w-[80%] rounded bg-stone-100" />
            <div className="h-8 w-full rounded-lg border border-dashed border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-neutral-950/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

const BLOG_TOPICS: { label: string; weight: "lg" | "md" | "sm" }[] = [
  { label: "Mídia paga", weight: "lg" },
  { label: "Performance", weight: "lg" },
  { label: "Google Ads", weight: "md" },
  { label: "Meta Ads", weight: "md" },
  { label: "ROAS", weight: "sm" },
  { label: "Funil", weight: "sm" },
  { label: "Conversão", weight: "md" },
  { label: "Analytics", weight: "sm" },
  { label: "SEO técnico", weight: "sm" },
  { label: "E-commerce", weight: "md" },
  { label: "B2B", weight: "sm" },
  { label: "Atribuição", weight: "sm" },
];

const TOPIC_STYLES: Record<"lg" | "md" | "sm", string> = {
  lg: "text-sm font-bold px-3.5 py-1.5 border-[#ff6600]/30 bg-[#ff6600]/10 text-[#ff6600]",
  md: "text-xs font-semibold px-3 py-1.5 border-stone-200 dark:border-stone-700 bg-white dark:bg-neutral-900 text-stone-700 dark:text-stone-200",
  sm: "text-[11px] font-medium px-2.5 py-1 border-stone-200/80 dark:border-stone-800 bg-stone-50 dark:bg-neutral-900/60 text-stone-500 dark:text-stone-400",
};

function HeroBlogMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-neutral-950 shadow-[0_18px_44px_-22px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff6600]/18 to-[#f27405]/10">
              <Newspaper size={14} style={{ color: COLORS.primary }} />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-500">
              Tópicos do blog
            </p>
          </div>
          <span className="font-mono text-[10px] font-bold text-stone-400 tabular-nums">
            {BLOG_TOPICS.length}+
          </span>
        </div>

        <div className="relative px-5 py-6">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {BLOG_TOPICS.map((topic, i) => (
              <span
                key={topic.label}
                style={{
                  animation: `scaleUpFade 400ms ${60 + i * 40}ms cubic-bezier(0.22,1,0.36,1) backwards`,
                }}
                className={`inline-flex items-center rounded-full border motion-reduce:animate-none ${TOPIC_STYLES[topic.weight]}`}
              >
                {topic.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-stone-100 dark:border-stone-800 bg-stone-50/60 dark:bg-neutral-950/60 px-5 py-2.5 text-[10px] font-medium text-stone-500">
          <span>Atualizações semanais</span>
          <span className="text-[#ff6600]">Acessar blog →</span>
        </div>
      </div>
    </div>
  );
}

function formatAboutStatLine(s: (typeof ABOUT_STATS)[number]) {
  if (s.value === 5.6) return "5,6+";
  if (s.value >= 1000) return `${s.value.toLocaleString("pt-BR")}+`;
  return `${s.value}${s.suffix}`;
}

const ABOUT_STAT_ICONS = [Users, Sparkles, Wallet] as const;

function HeroQuemSomosStats() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-[#ff6600]/25 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-[#f27405]/20 to-transparent blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-stone-200/90 dark:border-stone-800/90 bg-gradient-to-br from-white dark:from-neutral-950 to-stone-50/80 dark:to-neutral-900/60 p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.18)] backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6600]/40 to-transparent" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff6600]/20 to-[#f27405]/10">
              <TrendingUp size={14} style={{ color: COLORS.primary }} />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
              Quem somos em números
            </p>
          </div>
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#ff6600]/60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#ff6600]" />
          </span>
        </div>

        <div className="mt-5 grid gap-2.5">
          {ABOUT_STATS.map((s, i) => {
            const Icon = ABOUT_STAT_ICONS[i] ?? Sparkles;
            return (
              <div
                key={s.label}
                style={{
                  animation: `heroSlideUp 500ms ${100 * i}ms cubic-bezier(0.22,1,0.36,1) backwards`,
                }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-stone-100 dark:border-stone-800/80 bg-white/90 dark:bg-neutral-950/60 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-[#ff6600]/30 hover:bg-white dark:hover:bg-neutral-900/80 hover:shadow-[0_10px_30px_-18px_rgba(255,102,0,0.5)] motion-reduce:animate-none"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-bl from-[#ff6600]/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:from-[#ff6600]/15 group-hover:opacity-100" />

                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/8 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} style={{ color: COLORS.primary }} />
                </div>

                <div className="relative flex min-w-0 flex-1 items-center justify-between gap-3">
                  <span className="min-w-0 text-[11px] font-semibold uppercase tracking-wider leading-snug text-stone-500 dark:text-stone-400">
                    {s.label}
                  </span>
                  <span className="shrink-0 bg-gradient-to-br from-[#ff6600] to-[#f27405] bg-clip-text text-xl font-extrabold tabular-nums leading-none text-transparent sm:text-2xl">
                    {formatAboutStatLine(s)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[10px] leading-relaxed text-stone-400 dark:text-stone-500">
          Valores agregados do time, veja a página completa para contexto.
        </p>
      </div>
    </div>
  );
}

function HeroCarreirasMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-neutral-950 p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2">
          <Briefcase
            size={18}
            className="text-[#ff6600]"
            style={{ color: COLORS.primary }}
          />
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            Faça parte do time
          </p>
        </div>
        <p className="mt-1 text-xs text-stone-500">
          Mídia paga · dados · growth · estratégia
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Meta Ads", "Google Ads", "Analytics", "Testes A/B", "BI"].map(
            (tag, i) => (
              <span
                key={tag}
                style={{
                  animation: `scaleUpFade 350ms ${50 * i}ms cubic-bezier(0.22,1,0.36,1) backwards`,
                }}
                className="rounded-full border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-neutral-950 px-3 py-1.5 text-[11px] font-semibold text-stone-700 dark:text-stone-300 motion-reduce:animate-none"
              >
                {tag}
              </span>
            ),
          )}
        </div>
        <div className="mt-5 rounded-xl border border-dashed border-[#ff6600]/30 bg-[#fff7f0]/40 dark:bg-neutral-950/40 px-4 py-3 text-center text-xs font-medium text-stone-700 dark:text-stone-300">
          Envie CV + mensagem no WhatsApp
        </div>
      </div>
    </div>
  );
}

export default function PageHeroVisual({ kind }: { kind: PageHeroVisualKind }) {
  switch (kind) {
    case "solucoes":
      return <HeroSolucoesCharts />;
    case "clientes":
      return <HeroClientesLogos />;
    case "cases":
      return <HeroCasesStack />;
    case "contato":
      return <HeroContatoMock />;
    case "blog":
      return <HeroBlogMock />;
    case "quem-somos":
      return <HeroQuemSomosStats />;
    case "carreiras":
      return <HeroCarreirasMock />;
    default:
      return <InnerHeroArtwork />;
  }
}
