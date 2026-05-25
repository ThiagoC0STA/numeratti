"use client";

const BARS = [40, 65, 45, 85, 70, 90, 60, 78] as const;
const SMALL_BARS = [30, 50, 40, 70] as const;

export default function HeroChartDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]">
      {/* Bar chart silhouette - bottom left */}
      <div
        style={{ animationDelay: "300ms" }}
        className="absolute bottom-1/4 left-[8%] flex items-end gap-1 animate-slide-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
      >
        {BARS.map((h, i) => (
          <div
            key={i}
            style={{
              height: `${h}%`,
              minHeight: 4,
              animation: `heroBarRise 600ms ${500 + i * 50}ms cubic-bezier(0.22,1,0.36,1) backwards`,
              transformOrigin: "bottom",
            }}
            className="w-2 rounded-sm bg-[#ff6600] motion-reduce:animate-none"
          />
        ))}
      </div>
      {/* Line chart fragment - top right */}
      <svg
        className="absolute right-[12%] top-1/4 h-24 w-32"
        viewBox="0 0 100 80"
        fill="none"
      >
        <path
          d="M0 60 L20 50 L40 55 L60 30 L80 25 L100 20"
          stroke="url(#heroLineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
          style={{
            animation: "heroPathDraw 1200ms 500ms cubic-bezier(0.22,1,0.36,1) forwards",
          }}
          className="motion-reduce:[stroke-dashoffset:0] motion-reduce:animate-none"
        />
        <defs>
          <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#ff6600" stopOpacity={0.8} />
            <stop offset="1" stopColor="#f27405" stopOpacity={0.3} />
          </linearGradient>
        </defs>
      </svg>
      {/* Small bars - top left */}
      <div
        style={{ animationDelay: "800ms" }}
        className="absolute left-[15%] top-1/3 flex items-end gap-0.5 animate-fade-in opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
      >
        {SMALL_BARS.map((h, i) => (
          <div
            key={i}
            style={{
              height: h,
              animation: `heroBarRise 500ms ${1000 + i * 80}ms cubic-bezier(0.22,1,0.36,1) backwards`,
              transformOrigin: "bottom",
            }}
            className="w-1 rounded-full bg-white/40 motion-reduce:animate-none"
          />
        ))}
      </div>
    </div>
  );
}
