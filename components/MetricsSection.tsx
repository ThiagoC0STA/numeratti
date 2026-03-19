"use client";

import { useRef, useEffect } from "react";
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";
import { BarChart3, Users, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapCounter from "@/components/animations/GsapCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { METRICS, COLORS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const CHART_DATA = [
  { month: "Jan", value: 65 },
  { month: "Fev", value: 72 },
  { month: "Mar", value: 58 },
  { month: "Abr", value: 85 },
  { month: "Mai", value: 92 },
  { month: "Jun", value: 78 },
];

const ICON_MAP: Record<(typeof METRICS)[number]["icon"], typeof BarChart3> = {
  impressoes: BarChart3,
  leads: Users,
  roas: TrendingUp,
};

export default function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.querySelectorAll(".line"),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            ref={headingRef}
            className="text-4xl font-bold text-black md:text-5xl lg:text-6xl"
          >
            <span className="line block">Resultados que</span>
            <span
              className="line block font-bold"
              style={{ color: COLORS.primary }}
            >
              impressionam
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            Números reais gerados para nossos clientes em campanhas de
            performance
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {METRICS.map((metric, i) => {
            const Icon = ICON_MAP[metric.icon] ?? BarChart3;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-10 shadow-lg transition-shadow hover:border-[#ff6600]/40 hover:shadow-2xl"
              >
                <div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.07] transition-opacity group-hover:opacity-15"
                  style={{ backgroundColor: COLORS.primary }}
                />
                <div
                  className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${COLORS.primary}18` }}
                >
                  <Icon size={32} style={{ color: COLORS.primary }} />
                </div>
                <GsapCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  className="block text-5xl font-bold text-black md:text-6xl"
                  duration={2}
                  format="full"
                />
                <h3
                  className="mt-3 text-xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  {metric.label}
                </h3>
                <p className="mt-4 text-gray-600">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 overflow-hidden rounded-3xl border border-gray-200/80 bg-gradient-to-br from-gray-50/80 to-white p-10 shadow-xl backdrop-blur-sm lg:p-14"
        >
          <h3 className="text-2xl font-bold text-black">
            Acompanhamento diário
          </h3>
          <p className="mt-2 text-gray-600">
            Painel com métricas de campanhas atualizadas diariamente
          </p>
          <div className="mt-10 h-72 lg:h-96">
            {isInView && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA}>
                  <defs>
                    <linearGradient
                      id="colorValue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor={COLORS.primary}
                        stopOpacity={0.5}
                      />
                      <stop
                        offset="100%"
                        stopColor={COLORS.primary}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    stroke="#94a3b8"
                    fontSize={13}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={13}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={COLORS.primary}
                    strokeWidth={3}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
