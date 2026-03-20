"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CASES, CLIENT_LOGOS, COLORS, ABOUT_STATS } from "@/lib/constants";
import { MessageCircle, Newspaper, Users, Briefcase, TrendingUp } from "lucide-react";
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

const ease = [0.22, 1, 0.36, 1] as const;

const BAR_HEIGHTS = [45, 72, 58, 88, 65, 92, 78];

function HeroSolucoesCharts() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="relative rounded-2xl border border-stone-200/90 bg-white p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Performance · mídia paga</p>
        <p className="mt-1 text-lg font-bold text-stone-900">Resultados semanais</p>
        <div className="mt-4 flex h-[7.5rem] items-end justify-between gap-1.5 px-1">
          {BAR_HEIGHTS.map((h, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { height: 0 }}
              animate={{ height: `${Math.round((h / 100) * 118)}px` }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.06 + i * 0.05, ease }}
              className="w-full max-w-[2.25rem] rounded-t-md bg-gradient-to-t from-[#ff6600] to-[#f27405]"
            />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase text-stone-500">Tendência</p>
            <p className="text-sm font-bold text-[#ff6600]">+127% conversões</p>
          </div>
          <svg viewBox="0 0 120 40" className="h-10 w-[7.5rem] text-[#ff6600]" fill="none">
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
            <motion.path
              d="M0,32 L20,28 L40,18 L55,22 L70,8 L85,12 L100,4 L120,6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
            />
          </svg>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease }}
        className="absolute -bottom-3 -left-2 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-semibold shadow-lg sm:-left-4"
      >
        <span style={{ color: COLORS.primary }}>ROAS</span>
        <span className="ml-1.5 text-stone-800">17x</span>
      </motion.div>
    </div>
  );
}

function HeroClientesLogos() {
  const slice = CLIENT_LOGOS.slice(0, 6);
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 bg-white/95 p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2">
          <Users size={18} className="text-[#ff6600]" style={{ color: COLORS.primary }} />
          <p className="text-sm font-bold text-stone-900">Marcas que confiam na Numeratti</p>
        </div>
        <p className="mt-1 text-xs text-stone-500">Amostra do portfólio — mais de 200 empresas atendidas</p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {slice.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i, duration: 0.45, ease }}
              className="flex aspect-[5/3] items-center justify-center rounded-xl border border-stone-100 bg-stone-50/80 px-2 py-2"
            >
              <Image
                src={client.url}
                alt={client.name}
                width={120}
                height={48}
                className="h-9 w-auto max-w-full object-contain"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroCasesStack() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)] ring-1 ring-stone-100/90">
        <div className="flex items-center gap-3 border-b border-stone-100 bg-gradient-to-r from-[#fff8f3] to-white px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6600]/18 to-[#f27405]/10">
            <TrendingUp size={20} style={{ color: COLORS.primary }} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">Cases reais</p>
            <p className="text-sm font-bold leading-snug text-stone-900">Resultados com marca e contexto</p>
          </div>
        </div>

        <ul className="divide-y divide-stone-100">
          {CASES.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.07 + i * 0.06, duration: 0.45, ease }}
              className={`flex items-center gap-4 px-4 py-3.5 sm:px-5 ${
                i === 0 ? "bg-[#fffaf7]/80" : ""
              }`}
            >
              <div className="grid min-w-0 flex-1 grid-cols-[auto_1fr] items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-stone-100 text-[11px] font-bold text-stone-500">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-stone-900">{item.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-stone-500">{item.excerpt}</p>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-lg font-bold leading-none tabular-nums text-[#ff6600]" style={{ color: COLORS.primary }}>
                  {item.metric}
                </p>
                <p className="mt-1 max-w-[6.5rem] text-[9px] font-medium uppercase leading-tight tracking-wide text-stone-400 sm:max-w-[7.5rem]">
                  {item.metricLabel}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="border-t border-stone-100 bg-stone-50/60 px-4 py-2.5 text-center text-[10px] font-medium text-stone-500">
          Histórias completas na página de cases abaixo
        </div>
      </div>
    </div>
  );
}

function HeroContatoMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <MessageCircle className="text-[#25d366]" size={22} />
          <div>
            <p className="text-sm font-bold text-stone-900">Fale com a Numeratti</p>
            <p className="text-xs text-stone-500">WhatsApp + formulário</p>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg rounded-tl-sm bg-stone-100 px-3 py-2.5 text-xs text-stone-700">
            Olá! Quero entender como vocês podem ajudar nossa operação de mídia.
          </div>
          <div className="ml-6 rounded-lg rounded-tr-sm border border-[#ff6600]/20 bg-[#fff7f0] px-3 py-2.5 text-xs text-stone-800">
            Vamos alinhar objetivos e próximos passos — resposta em horário comercial.
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-2.5 w-full rounded bg-stone-100" />
            <div className="h-2.5 w-[80%] rounded bg-stone-100" />
            <div className="h-8 w-full rounded-lg border border-dashed border-stone-200 bg-stone-50/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroBlogMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2">
          <Newspaper size={18} className="text-[#ff6600]" style={{ color: COLORS.primary }} />
          <p className="text-sm font-bold text-stone-900">Conteúdo em performance</p>
        </div>
        <div className="mt-4 space-y-3">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * n, duration: 0.45, ease }}
              className="rounded-xl border border-stone-100 bg-stone-50/60 p-3"
            >
              <div className="flex gap-2">
                <div className="h-12 w-16 shrink-0 rounded-lg bg-stone-200/80" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-2 w-[90%] rounded bg-stone-200/90" />
                  <div className="h-2 w-[60%] rounded bg-stone-100" />
                  <div className="flex gap-1.5">
                    <span className="rounded-full bg-[#ff6600]/10 px-2 py-0.5 text-[9px] font-semibold text-[#ff6600]">
                      Mídia paga
                    </span>
                    <span className="rounded-full bg-stone-200/60 px-2 py-0.5 text-[9px] font-medium text-stone-600">
                      SEO
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatAboutStatLine(s: (typeof ABOUT_STATS)[number]) {
  if (s.value === 1.9) return "1,9+";
  if (s.value >= 1000) return `${s.value.toLocaleString("pt-BR")}+`;
  return `${s.value}${s.suffix}`;
}

function HeroQuemSomosStats() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 bg-gradient-to-br from-white to-stone-50/90 p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Quem somos em números</p>
        <div className="mt-4 grid gap-3">
          {ABOUT_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.45, ease }}
              className="flex items-center justify-between gap-3 rounded-xl border border-stone-100 bg-white px-4 py-3"
            >
              <span className="min-w-0 text-xs font-medium leading-snug text-stone-600">{s.label}</span>
              <span
                className="shrink-0 text-base font-bold tabular-nums sm:text-lg"
                style={{ color: COLORS.primary }}
              >
                {formatAboutStatLine(s)}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-stone-400">Valores agregados do time — veja a página completa para contexto.</p>
      </div>
    </div>
  );
}

function HeroCarreirasMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2">
          <Briefcase size={18} className="text-[#ff6600]" style={{ color: COLORS.primary }} />
          <p className="text-sm font-bold text-stone-900">Faça parte do time</p>
        </div>
        <p className="mt-1 text-xs text-stone-500">Mídia paga · dados · growth · estratégia</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Meta Ads", "Google Ads", "Analytics", "Testes A/B", "BI"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i, duration: 0.35, ease }}
              className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-[11px] font-semibold text-stone-700"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-dashed border-[#ff6600]/30 bg-[#fff7f0]/40 px-4 py-3 text-center text-xs font-medium text-stone-700">
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
