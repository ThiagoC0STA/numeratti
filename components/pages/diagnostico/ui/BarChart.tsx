type Bar = { label: string; value: number };

const bars: Bar[] = [
  { label: "Oferta e Posicionamento", value: 62 },
  { label: "Funil e Jornada", value: 45 },
  { label: "Ativos e Comunicação", value: 78 },
  { label: "Canais e Dados", value: 38 },
  { label: "Operação e Escala", value: 55 },
];

function tone(v: number) {
  if (v >= 70) return "from-emerald-400 to-emerald-500";
  if (v >= 50) return "from-[#FFB060] to-[#E8740C]";
  return "from-[#F59E0B] to-[#EF4444]";
}

export default function BarChart() {
  return (
    <div className="space-y-4">
      {bars.map((b) => (
        <div key={b.label}>
          <div className="flex justify-between text-xs text-white/70 mb-1.5 font-medium">
            <span>{b.label}</span>
            <span className="text-white/90 font-semibold tabular-nums">{b.value}</span>
          </div>
          <div className="relative h-2.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${tone(b.value)}`}
              style={{
                width: `${b.value}%`,
                boxShadow: "0 0 18px rgba(232,116,12,0.45)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
