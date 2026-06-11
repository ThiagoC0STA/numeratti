"use client";
import AnimatedCounter from "./AnimatedCounter";
import EcgLine from "./EcgLine";

/**
 * Visual do hero: um "monitor de agenda" no estilo de equipamento médico —
 * traçado de ECG no topo, leitura principal de consultas e barras de
 * crescimento semanal. 100% HTML/CSS/SVG (sem imagem) para LCP rápido.
 * Os números são ILUSTRATIVOS — rotulados como simulação.
 */
const weeks = [
  { label: "Sem 1", value: 38 },
  { label: "Sem 2", value: 55 },
  { label: "Sem 3", value: 72 },
  { label: "Sem 4", value: 100 },
];

export default function AgendaDashboardMock() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div
        className="relative rounded-[26px] border border-white/10 overflow-hidden"
        style={{
          background: "linear-gradient(165deg, rgba(20,16,12,0.95), rgba(10,10,10,0.98))",
          boxShadow: "0 40px 90px -40px rgba(232,116,12,0.45)",
        }}
      >
        {/* Barra superior do "monitor" */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--med-clinical)] ecg-pulse" />
            <span className="mono text-white/50 text-[10px] uppercase tracking-[0.22em]">
              monitor de agenda
            </span>
          </div>
          <span className="mono text-[color:var(--med-clinical)] text-[10px] uppercase tracking-[0.18em]">
            ● ao vivo
          </span>
        </div>

        {/* Traçado de ECG */}
        <div className="px-3">
          <EcgLine color="#2dd4bf" speed="3.5s" height={44} />
        </div>

        {/* Leitura principal */}
        <div className="px-5 pt-2">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="display text-white text-5xl leading-none">
                <AnimatedCounter to={32} duration={1.8} />
              </div>
              <div className="mono text-white/45 text-[10px] uppercase tracking-[0.16em] mt-1">
                consultas / mês
              </div>
            </div>
            <div className="text-right">
              <div className="display text-orange-primary text-3xl leading-none">
                R$ <AnimatedCounter to={47} duration={1.8} />
              </div>
              <div className="mono text-white/45 text-[10px] uppercase tracking-[0.16em] mt-1">
                custo / consulta
              </div>
            </div>
          </div>
        </div>

        {/* Barras semanais */}
        <div className="px-5 pt-6 pb-3">
          <div className="flex items-end justify-between gap-3 h-24">
            {weeks.map((w, i) => (
              <div key={w.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full flex items-end h-full">
                  <div
                    className="med-bar w-full rounded-t-md bg-gradient-to-t from-[#d4680a] to-[#FFB060]"
                    style={{
                      height: `${w.value}%`,
                      animationDelay: `${0.4 + i * 0.15}s`,
                      boxShadow: "0 0 14px rgba(232,116,12,0.4)",
                    }}
                  />
                </div>
                <span className="mono text-white/35 text-[9px] uppercase tracking-[0.1em]">
                  {w.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mono px-5 py-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-white/40 uppercase tracking-[0.12em]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--med-clinical)]" />
            agenda saudável
          </span>
          <span>simulação ilustrativa</span>
        </div>
      </div>
    </div>
  );
}
