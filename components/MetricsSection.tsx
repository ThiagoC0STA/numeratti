"use client";

import { useRef, useEffect } from "react";
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from "recharts";
import { BarChart3, Users, TrendingUp, Activity } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapCounter from "@/components/animations/GsapCounter";
import ImpressionsShowcaseCard from "@/components/metrics/ImpressionsShowcaseCard";
import { METRICS, COLORS } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

gsap.registerPlugin(ScrollTrigger);

const CHART_DATA = [
  { month: "Jan", value: 65 },
  { month: "Fev", value: 72 },
  { month: "Mar", value: 58 },
  { month: "Abr", value: 85 },
  { month: "Mai", value: 92 },
  { month: "Jun", value: 78 },
  { month: "Jul", value: 88 },
  { month: "Ago", value: 95 },
];

const ICON_MAP: Record<(typeof METRICS)[number]["icon"], typeof BarChart3> = {
  impressoes: BarChart3,
  leads: Users,
  roas: TrendingUp,
};

function MetricCard({
  metric,
  index,
  className = "",
  simplified,
}: {
  metric: (typeof METRICS)[number];
  index: number;
  className?: string;
  simplified: boolean;
}) {
  const Icon = ICON_MAP[metric.icon] ?? BarChart3;

  return (
    <motion.div
      initial={simplified ? false : { opacity: 0, y: 40 }}
      whileInView={simplified ? undefined : { opacity: 1, y: 0 }}
      animate={simplified ? { opacity: 1, y: 0 } : undefined}
      viewport={simplified ? undefined : { once: true, amount: 0.25 }}
      transition={
        simplified
          ? { duration: 0 }
          : { duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }
      }
      whileHover={simplified ? undefined : { y: -6 }}
      className={`group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-8 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.08)] transition-shadow duration-500 hover:border-[#ff6600]/25 hover:shadow-[0_28px_80px_-24px_rgba(255,102,0,0.12)] lg:p-10 ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#ff6600]/10 to-transparent transition-all duration-700 group-hover:scale-110" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6600]/15 to-[#f27405]/10 text-[#ff6600] shadow-inner transition-transform duration-300 group-hover:scale-105">
          <Icon size={28} />
        </div>
        <span className="rounded-full border border-stone-100 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-500">
          {metric.label}
        </span>
      </div>

      <GsapCounter
        value={metric.value}
        suffix={metric.suffix}
        className="mt-6 block text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl"
        duration={2}
        format="full"
      />

      <p className="mt-4 text-sm leading-relaxed text-stone-600 lg:text-base">{metric.description}</p>
    </motion.div>
  );
}

export default function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.2 });
  const simplified = useSimplifiedMotion();

  useEffect(() => {
    if (simplified || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const lines = headingRef.current?.querySelectorAll(".line");
      if (!lines?.length) return;
      gsap.fromTo(
        lines,
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [simplified]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-[#fff9f4] py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-[#ff6600]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-violet-300/20 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,102,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            ref={headingRef}
            className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl"
          >
            <span className="line block">Resultados que</span>
            <span className="line block bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
              impressionam
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
            Números reais gerados para nossos clientes em campanhas de performance
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <ImpressionsShowcaseCard />
          <div className="grid gap-6">
            <MetricCard metric={METRICS[1]} index={1} simplified={simplified} />
            <MetricCard metric={METRICS[2]} index={2} simplified={simplified} />
          </div>
        </div>

        <motion.div
          ref={chartRef}
          initial={simplified ? false : { opacity: 0, y: 48 }}
          whileInView={simplified ? undefined : { opacity: 1, y: 0 }}
          animate={simplified ? { opacity: 1, y: 0 } : undefined}
          viewport={simplified ? undefined : { once: true, amount: 0.15 }}
          transition={
            simplified ? { duration: 0 } : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
          }
          className="mt-12 overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_24px_70px_-30px_rgba(0,0,0,0.1)]"
        >
          <div className="flex flex-col gap-4 border-b border-stone-100 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6600]/10">
                  <Activity size={22} style={{ color: COLORS.primary }} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Acompanhamento diário</h3>
              </div>
              <p className="mt-2 text-stone-600">Painel com métricas de campanhas atualizadas diariamente</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6600]" />
              <span className="text-sm font-medium text-stone-600">Tempo real</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-stone-50/80 to-white p-6 lg:p-10">
            <div className="h-72 lg:h-96">
              {(simplified || isInView) && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CHART_DATA}>
                    <defs>
                      <linearGradient id="colorValueLight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#a8a29e" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#a8a29e" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid rgba(255,102,0,0.25)",
                        borderRadius: "14px",
                        color: "#1c1917",
                        boxShadow: "0 12px 40px -12px rgba(0,0,0,0.15)",
                      }}
                      formatter={(value) => [`${Number(value ?? 0)}%`, "Performance"]}
                      labelStyle={{ color: "#78716c" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={COLORS.primary}
                      strokeWidth={3}
                      fill="url(#colorValueLight)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
