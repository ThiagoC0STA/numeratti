import { COLORS } from "@/lib/constants";

/**
 * Lightweight SVG chart for mobile: no Recharts, avoids layout thrash and ~100KiB JS.
 */
export default function MetricsChartMobileFallback() {
  return (
    <svg
      viewBox="0 0 800 240"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="mcf-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.35} />
          <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        fill="url(#mcf-area)"
        d="M 40 180 L 120 140 L 200 160 L 280 100 L 360 120 L 440 60 L 520 80 L 600 40 L 680 50 L 760 20 L 760 220 L 40 220 Z"
      />
      <path
        fill="none"
        stroke={COLORS.primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 40 180 L 120 140 L 200 160 L 280 100 L 360 120 L 440 60 L 520 80 L 600 40 L 680 50 L 760 20"
      />
    </svg>
  );
}
