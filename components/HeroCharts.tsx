"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

const BAR_DATA = [
  { x: "1", v: 65 },
  { x: "2", v: 82 },
  { x: "3", v: 58 },
  { x: "4", v: 90 },
  { x: "5", v: 75 },
  { x: "6", v: 95 },
  { x: "7", v: 88 },
];

const AREA_DATA = [
  { x: "1", v: 30 },
  { x: "2", v: 45 },
  { x: "3", v: 55 },
  { x: "4", v: 70 },
  { x: "5", v: 85 },
  { x: "6", v: 92 },
  { x: "7", v: 98 },
];

const LINE_DATA = [
  { x: "1", v: 12 },
  { x: "2", v: 18 },
  { x: "3", v: 14 },
  { x: "4", v: 22 },
  { x: "5", v: 28 },
  { x: "6", v: 35 },
  { x: "7", v: 42 },
];

const SLIDE_NUMBERS = [
  {
    right: { value: "10M+", label: "impressões" },
    left: { value: "+127%", label: "crescimento" },
  },
  {
    right: { value: "98%", label: "performance" },
    left: { value: "+45%", label: "conversão" },
  },
  {
    right: { value: "17x", label: "ROAS" },
    left: { value: "R$ 2,1Mi", label: "faturamento" },
  },
] as const;

export default function HeroCharts({ slideIndex }: { slideIndex: number }) {
  const simplified = useSimplifiedMotion();
  const nums = SLIDE_NUMBERS[slideIndex];

  return (
    <>
      {/* Right side - main chart with metric badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={simplified ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={simplified ? undefined : { opacity: 0, scale: 0.98 }}
          transition={{ duration: simplified ? 0 : 0.4 }}
          className="pointer-events-none absolute bottom-4 right-6 hidden lg:block xl:right-12 xl:bottom-6"
        >
          <div className="mb-2 flex flex-col items-end">
            <motion.span
              initial={simplified ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: simplified ? 0 : 0.2 }}
              className="text-2xl font-bold tabular-nums xl:text-3xl"
              style={{ color: COLORS.primary }}
            >
              {nums.right.value}
            </motion.span>
            <motion.span
              initial={simplified ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: simplified ? 0 : 0.3 }}
              className="text-xs font-medium uppercase tracking-wider text-white/60"
            >
              {nums.right.label}
            </motion.span>
          </div>
          <div className="h-36 w-48 xl:h-44 xl:w-56">
          {slideIndex === 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BAR_DATA} margin={{ top: 8, right: 8, bottom: 4, left: 4 }}>
                <defs>
                  <linearGradient id="heroBarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.9} />
                    <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="x" hide />
                <YAxis hide domain={[0, 100]} />
                <Bar
                  dataKey="v"
                  fill="url(#heroBarGrad)"
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={!simplified}
                  animationDuration={1200}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          )}
          {slideIndex === 1 && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={AREA_DATA} margin={{ top: 8, right: 8, bottom: 4, left: 4 }}>
                <defs>
                  <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="x" hide />
                <YAxis hide domain={[0, 100]} />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={COLORS.primary}
                  strokeWidth={2.5}
                  fill="url(#heroAreaGrad)"
                  isAnimationActive={!simplified}
                  animationDuration={1200}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
          {slideIndex === 2 && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={LINE_DATA} margin={{ top: 8, right: 8, bottom: 4, left: 4 }}>
                <XAxis dataKey="x" hide />
                <YAxis hide domain={[0, 50]} />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke={COLORS.primary}
                  strokeWidth={2.5}
                  dot={{ fill: COLORS.primary, r: 3 }}
                  activeDot={{ r: 5, fill: COLORS.primary }}
                  isAnimationActive={!simplified}
                  animationDuration={1200}
                  animationEasing="ease-out"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left side - secondary chart with metric badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`left-${slideIndex}`}
          initial={simplified ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={simplified ? undefined : { opacity: 0 }}
          transition={{ duration: simplified ? 0 : 0.4, delay: simplified ? 0 : 0.1 }}
          className="pointer-events-none absolute left-6 top-[12%] hidden lg:block xl:left-12 xl:top-[10%]"
        >
          <div className="mb-1.5 flex flex-col">
            <span
              className="text-lg font-bold tabular-nums xl:text-xl"
              style={{ color: COLORS.primary }}
            >
              {nums.left.value}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/50 xl:text-xs">
              {nums.left.label}
            </span>
          </div>
          <div className="h-20 w-28 xl:h-24 xl:w-36">
          {slideIndex === 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={AREA_DATA} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                <defs>
                  <linearGradient id="heroLeftArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="x" hide />
                <YAxis hide domain={[0, 100]} />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={COLORS.primary}
                  strokeWidth={2}
                  fill="url(#heroLeftArea)"
                  isAnimationActive={!simplified}
                  animationDuration={1000}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
          {slideIndex === 1 && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={LINE_DATA} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                <XAxis dataKey="x" hide />
                <YAxis hide domain={[0, 50]} />
                <Bar
                  dataKey="v"
                  fill={COLORS.primary}
                  fillOpacity={0.6}
                  radius={[3, 3, 0, 0]}
                  isAnimationActive={!simplified}
                  animationDuration={1000}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          )}
          {slideIndex === 2 && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={BAR_DATA} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                <XAxis dataKey="x" hide />
                <YAxis hide domain={[0, 100]} />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke={COLORS.primary}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={!simplified}
                  animationDuration={1000}
                  animationEasing="ease-out"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
