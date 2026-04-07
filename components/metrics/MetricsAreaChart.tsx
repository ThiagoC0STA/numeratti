"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "@/lib/constants";

export type MetricsChartPoint = { month: string; value: number };

export default function MetricsAreaChart({ data }: { data: MetricsChartPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValueLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.35} />
            <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" stroke="#a8a29e" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#a8a29e"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => `${v}%`}
        />
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
  );
}
