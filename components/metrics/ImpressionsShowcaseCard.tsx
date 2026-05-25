"use client";

import { useRef, useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";
import GsapCounter from "@/components/animations/GsapCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COLORS, METRICS } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

const metric = METRICS[0];

const REACH_MIX = [
  { label: "Social", value: 92 },
  { label: "Busca", value: 78 },
  { label: "Display", value: 71 },
  { label: "Vídeo", value: 86 },
  { label: "Shopping", value: 64 },
  { label: "Performance Max", value: 88 },
 ] as const;

export default function ImpressionsShowcaseCard() {
  const simplified = useSimplifiedMotion();
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (simplified) {
      setAnimate(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [simplified]);

  return (
    <ScrollReveal>
      <div
        ref={containerRef}
        className="group relative flex min-h-0 flex-col overflow-hidden rounded-3xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#ff6600]/25 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(255,102,0,0.08)] lg:row-span-2 lg:min-h-[520px]"
      >
        <div className="dark:hidden pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#ff6600]/12 to-transparent transition-all duration-700 group-hover:scale-110" />

        <div className="relative flex flex-1 flex-col p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 text-[#ff6600] shadow-inner transition-transform duration-300 group-hover:scale-105">
              <BarChart3 size={28} />
            </div>
            <span className="rounded-full border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-neutral-950 px-3 py-1 text-xs font-semibold text-stone-500">
              {metric.label}
            </span>
          </div>

          <GsapCounter
            value={metric.value}
            suffix={metric.suffix}
            className="mt-5 block text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl lg:text-6xl"
            duration={2}
            format="compact"
          />

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400 lg:text-base">{metric.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Multi-conta", "Alto volume", "Otimização contínua"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#ff6600]/15 bg-[#ff6600]/5 px-3 py-1 text-xs font-semibold text-[#cc5200]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto border-t border-stone-100 dark:border-stone-800 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Mix de formatos</p>
            <p className="mt-1 text-sm text-stone-500">Ilustração de distribuição típica em campanhas multi-canal</p>

            <ul className="mt-5 space-y-3" aria-hidden>
              {REACH_MIX.map((row, i) => (
                <li key={row.label} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 text-xs font-medium text-stone-600 dark:text-stone-400">{row.label}</span>
                  <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-stone-100">
                    <span
                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        width: animate ? `${row.value}%` : "0%",
                        background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
                        transitionDelay: `${i * 80}ms`
                      }}
                    />
                  </div>
                  <span className="w-9 text-right text-xs tabular-nums text-stone-400">{row.value}%</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "Formatos", v: "12+" },
                { k: "Contas", v: "60+" },
                { k: "Mercados", v: "BR + LATAM" },
              ].map((cell) => (
                <div
                  key={cell.k}
                  className="rounded-xl border border-stone-100 dark:border-stone-800 bg-gradient-to-br from-stone-50 dark:from-neutral-950 to-white dark:to-neutral-950 px-3 py-3 text-center"
                >
                  <p className="text-lg font-bold text-stone-900 dark:text-stone-100">{cell.v}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-400">{cell.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
