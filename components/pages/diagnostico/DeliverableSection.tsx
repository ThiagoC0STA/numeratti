import RevealOnScroll from "./ui/RevealOnScroll";
import DonutChart from "./ui/DonutChart";
import RadarChart from "./ui/RadarChart";
import BarChart from "./ui/BarChart";

const roadmap = [
  {
    prio: "Crítico",
    color: "bg-red-500/15 text-red-300 border-red-500/30",
    title: "Implementar Conversões API + CAPI",
    desc: "Recuperar tracking server-side para Meta e Google. Sem isso, qualquer otimização vira chute.",
    owner: "Tech / Mídia",
    week: "Semana 1",
  },
  {
    prio: "Alto",
    color: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    title: "Refazer copy da landing principal",
    desc: "Reescrita orientada por dor — não por features. A&B test em 7 dias com tráfego baixo.",
    owner: "Copy / Design",
    week: "Semana 2",
  },
  {
    prio: "Médio",
    color: "bg-orange-primary/15 text-orange-light border-orange-primary/30",
    title: "Estruturar SLA do time comercial",
    desc: "Tempo máximo de resposta + script de qualificação. Lead bom morre em fila de espera.",
    owner: "Comercial",
    week: "Semana 3",
  },
  {
    prio: "Estratégico",
    color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    title: "Definir oferta âncora para captação",
    desc: "Uma proposta clara, com prova e urgência. Base para campanhas de aquisição em escala.",
    owner: "Marketing",
    week: "Semana 4",
  },
];

export default function DeliverableSection() {
  return (
    <section id="entregavel" className="relative bg-premium-dark noise py-28 md:py-36 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div
        className="orb w-[600px] h-[600px] -top-20 -right-40"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,116,12,0.22), transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-4xl">
          <RevealOnScroll>
            <span className="tag tag-dark">Entregável</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="display text-white text-4xl md:text-6xl lg:text-7xl mt-6 leading-[0.98]">
              Score de <span className="kw">Prontidão</span> + Roadmap Estratégico
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-8 text-white/55 text-lg max-w-2xl leading-relaxed">
              Um relatório visual, objetivo e acionável. Você abre, entende onde está e sabe o que fazer nos próximos 30 dias.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Score */}
          <RevealOnScroll className="flex">
          <div className="glass p-8 md:p-10 relative overflow-hidden flex flex-col w-full">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold">
                  Diagnóstico • Empresa Exemplo
                </div>
                <div className="text-white/40 text-xs mt-1">
                Gerado em {new Date().toLocaleDateString("pt-BR")}
              </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Ajustes Necessários
              </div>
            </div>

            <DonutChart value={57} />

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-red-300 font-bold flex items-center gap-2">
                  <span>⚠</span> Principal gargalo
                </div>
                <div className="text-white text-base font-semibold mt-2 leading-snug">
                  Infraestrutura de dados quebrada
                </div>
                <div className="text-white/55 text-xs mt-2 leading-relaxed">
                  iOS 17+ derrubou 38% das conversões rastreadas. Sem CAPI, otimização cega.
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold flex items-center gap-2">
                  <span>★</span> Oportunidade de ouro
                </div>
                <div className="text-white text-base font-semibold mt-2 leading-snug">
                  Lista de leads + criativos fortes
                </div>
                <div className="text-white/55 text-xs mt-2 leading-relaxed">
                  Base de 12k contatos pouco trabalhada. ROI esperado de campanha de reativação: 8x.
                </div>
              </div>
            </div>

            {/* Indicadores-chave para preencher e equilibrar com o card direito */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex-1 flex flex-col">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-4">
                Indicadores-chave
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  { label: "Pontos auditados", value: "42 / 42" },
                  { label: "Plataformas analisadas", value: "8" },
                  { label: "Estimativa de retorno (90d)", value: "+3.2x" },
                  { label: "Risco de escala atual", value: "Alto" },
                ].map((kpi, i) => (
                  <li
                    key={kpi.label}
                    className="flex items-center justify-between gap-3 py-2 border-b border-white/[0.04] last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-white/30 text-[10px] tabular-nums font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/70 text-sm">{kpi.label}</span>
                    </div>
                    <span className="text-white font-semibold text-sm tabular-nums">
                      {kpi.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </RevealOnScroll>

          {/* Right: Radar + Bars */}
          <RevealOnScroll delay={0.15} className="flex">
          <div className="glass p-8 md:p-10 flex flex-col w-full">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-2">
              Visão por Pilar
            </div>
            <h3 className="display text-white text-2xl mb-4">Maturidade dos 5 pilares</h3>

            <RadarChart />

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <BarChart />
            </div>

            {/* Legenda e benchmark para preencher e equilibrar com o card esquerdo */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex-1 flex flex-col">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-4">
                Faixas de classificação
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { range: "0–49", label: "Crítico", color: "bg-red-500", text: "text-red-300" },
                  { range: "50–69", label: "Ajustes", color: "bg-orange-primary", text: "text-orange-light" },
                  { range: "70–100", label: "Saudável", color: "bg-emerald-500", text: "text-emerald-300" },
                ].map((b) => (
                  <div key={b.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className={`text-[10px] uppercase tracking-[0.18em] font-bold ${b.text}`}>
                      {b.label}
                    </div>
                    <div className="text-white tabular-nums text-base font-semibold mt-1">
                      {b.range}
                    </div>
                    <div className={`mt-2 h-1 rounded-full ${b.color}`} />
                  </div>
                ))}
              </div>

            </div>
          </div>
          </RevealOnScroll>
        </div>

        {/* Roadmap */}
        <div className="mt-16">
          <RevealOnScroll>
            <h3 className="display text-white text-3xl md:text-4xl">
              Roadmap dos próximos <span className="kw">30 dias</span>
            </h3>
          </RevealOnScroll>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {roadmap.map((r, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="glass p-6 flex gap-5">
                  <div className="flex flex-col items-center gap-2 min-w-[64px]">
                    <span
                      className={`px-2.5 py-1 rounded-full border ${r.color} text-[10px] font-bold uppercase tracking-wider`}
                    >
                      {r.prio}
                    </span>
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                      {r.week}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg leading-snug">{r.title}</h4>
                    <p className="text-white/55 text-sm mt-2 leading-relaxed">{r.desc}</p>
                    <div className="mt-3 flex items-center gap-2 text-orange-light/80 text-xs">
                      <PersonIcon /> Responsável:{" "}
                      <span className="text-white/80 font-medium">{r.owner}</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function DownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}
