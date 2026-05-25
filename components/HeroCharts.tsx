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
    right: { value: "1,5Bi+", label: "impressões" },
    left: { value: "+127%", label: "crescimento" },
  },
  {
    right: { value: "98%", label: "performance" },
    left: { value: "+45%", label: "conversão" },
  },
  {
    right: { value: "17x", label: "ROAS" },
    left: { value: "R$ 5,6Mi", label: "verba gerenciada" },
  },
] as const;

export default function HeroCharts({ slideIndex }: { slideIndex: number }) {
  const simplified = useSimplifiedMotion();
  const nums = SLIDE_NUMBERS[slideIndex];

  return (
    <>
      {/* Right side - main chart with metric badge */}
      <div
        key={`right-${slideIndex}`}
        className={`pointer-events-none absolute bottom-[-2%] right-[-2%] hidden lg:flex flex-col items-end p-5 rounded-2xl bg-white/85 dark:bg-black/60 backdrop-blur-2xl border border-stone-200 dark:border-white/[0.08] shadow-[0_18px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] xl:right-[-6%] xl:bottom-[2%] z-30 group ${simplified ? '' : 'animate-slide-up-fade opacity-0'}`}
        style={{ animationDelay: '400ms' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 mb-3 flex flex-col items-end w-full">
          <div className="mb-2 flex flex-col items-end">
            <span
              className={`text-2xl font-bold tabular-nums xl:text-3xl ${simplified ? '' : 'animate-fade-in opacity-0'}`}
              style={{ color: COLORS.primary, animationDelay: '600ms' }}
            >
              {nums.right.value}
            </span>
            <span
              className={`text-xs font-medium uppercase tracking-wider text-stone-600 dark:text-white/60 ${simplified ? '' : 'animate-fade-in opacity-0'}`}
              style={{ animationDelay: '700ms' }}
            >
              {nums.right.label}
            </span>
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
        </div>
      </div>

      {/* Left side - secondary chart with metric badge */}
      <div
        key={`left-${slideIndex}`}
        className={`pointer-events-none absolute left-[3%] top-[4%] hidden lg:flex flex-col items-start p-4 rounded-2xl bg-white/85 dark:bg-black/60 backdrop-blur-2xl border border-stone-200 dark:border-white/[0.08] shadow-[0_18px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] xl:left-[-1%] xl:top-[8%] z-30 group ${simplified ? '' : 'animate-slide-up-fade opacity-0'}`}
        style={{ animationDelay: '500ms' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f27405]/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 mb-2 flex flex-col w-full">
          <div className="mb-1.5 flex flex-col">
            <span
              className="text-lg font-bold tabular-nums xl:text-xl"
              style={{ color: COLORS.primary }}
            >
              {nums.left.value}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-stone-500 dark:text-white/50 xl:text-xs">
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
        </div>
      </div>
    </>
  );
}
