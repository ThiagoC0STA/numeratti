import AnimatedCounter from "./AnimatedCounter";

type Props = { value: number; max?: number };

export default function DonutChart({ value, max = 100 }: Props) {
  const size = 280;
  const stroke = 18;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = value / max;

  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
        <defs>
          <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB060" />
            <stop offset="50%" stopColor="#E8740C" />
            <stop offset="100%" stopColor="#D4680A" />
          </linearGradient>
          <filter id="donutGlow">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#donutGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          filter="url(#donutGlow)"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs uppercase tracking-[0.18em] text-white/50 font-semibold mb-2">
          Score de Prontidão
        </span>
        <span className="display text-7xl text-white">
          <AnimatedCounter to={value} duration={1.8} />
        </span>
        <span className="text-white/40 text-sm mt-1">de {max}</span>
      </div>
    </div>
  );
}
