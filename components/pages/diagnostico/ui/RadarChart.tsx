type Datum = { label: string; value: number };

const data: Datum[] = [
  { label: "Oferta", value: 0.62 },
  { label: "Funil", value: 0.45 },
  { label: "Ativos", value: 0.78 },
  { label: "Dados", value: 0.38 },
  { label: "Operação", value: 0.55 },
];

export default function RadarChart() {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 120;
  const N = data.length;

  const point = (i: number, r: number) => {
    const angle = (Math.PI * 2 * i) / N - Math.PI / 2;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r] as const;
  };

  const polygonPoints = data
    .map((d, i) => {
      const [x, y] = point(i, radius * d.value);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="relative w-full aspect-square max-w-[380px] mx-auto">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#E8740C" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E8740C" stopOpacity="0.05" />
          </radialGradient>
          <filter id="radarGlow">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric rings */}
        {[0.25, 0.5, 0.75, 1].map((s, i) => (
          <polygon
            key={i}
            points={Array.from({ length: N }, (_, j) => {
              const [x, y] = point(j, radius * s);
              return `${x},${y}`;
            }).join(" ")}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={1}
          />
        ))}

        {/* Spokes */}
        {data.map((_, i) => {
          const [x, y] = point(i, radius);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={1}
            />
          );
        })}

        <polygon
          points={polygonPoints}
          fill="url(#radarFill)"
          stroke="#E8740C"
          strokeWidth={2}
          filter="url(#radarGlow)"
        />

        {data.map((d, i) => {
          const [x, y] = point(i, radius * d.value);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={5}
              fill="#FEF0E3"
              stroke="#E8740C"
              strokeWidth={2}
              style={{ filter: "drop-shadow(0 0 6px rgba(232,116,12,0.9))" }}
            />
          );
        })}

        {/* Labels */}
        {data.map((d, i) => {
          const [x, y] = point(i, radius + 28);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.08em"
              style={{ textTransform: "uppercase" }}
            >
              {d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
