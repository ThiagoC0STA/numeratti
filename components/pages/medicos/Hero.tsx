"use client";
import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";
import AgendaDashboardMock from "./ui/AgendaDashboardMock";
import EcgLine from "./ui/EcgLine";

const features = [
  "Campanhas no Google e Meta Ads geridas de ponta a ponta",
  "Roteiro de cada anúncio construído por nós, você só valida",
  "Anúncios 100% dentro da Resolução CFM nº 2.336/2023",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-premium-dark noise pt-28 md:pt-32 pb-24"
    >
      <div className="orb w-[620px] h-[620px] -top-40 -right-40" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,116,12,0.4), transparent 60%)" }}
        />
      </div>
      <div className="orb w-[480px] h-[480px] bottom-[-180px] left-[-140px]" aria-hidden>
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.16), transparent 60%)" }}
        />
      </div>

      <div className="grid-bg absolute inset-0 opacity-50" />
      <Particles count={18} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div
              className="lp-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full tag-clinical text-xs font-semibold tracking-[0.14em] uppercase mb-7"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--med-clinical)] heartbeat" />
              Tráfego pago para médicos
            </div>

            <h1
              className="lp-fade-up display display-tight text-white text-[40px] sm:text-6xl lg:text-[68px] leading-[1.02]"
              style={{ animationDelay: "0.22s" }}
            >
              Mais pacientes <span className="kw">particulares</span> na sua agenda, todo mês.
            </h1>

            {/* Traçado de ECG sob o título: assinatura visual da saúde */}
            <div className="lp-fade-up mt-6 max-w-md" style={{ animationDelay: "0.32s" }}>
              <EcgLine color="#e8740c" speed="4s" height={40} />
            </div>

            <p
              className="lp-fade-up mt-6 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ animationDelay: "0.4s" }}
            >
              Cuidamos das suas campanhas de tráfego pago no Google e no Meta Ads para colocar seu
              consultório na frente de quem já procura um médico e transformar cliques em consultas
              agendadas.
            </p>

            <div
              className="lp-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <GlowButton size="lg">
                Quero mais pacientes
                <span className="ml-1">→</span>
              </GlowButton>
              <a href="#metodo" className="ghost-btn">
                Como funciona ↓
              </a>
            </div>

            <p
              className="lp-fade-up mt-5 text-white/45 text-xs md:text-sm"
              style={{ animationDelay: "0.58s" }}
            >
              Diagnóstico gratuito · Sem contrato de fidelidade · Resposta em horário comercial
            </p>

            <ul
              className="lp-fade-up mt-8 flex flex-col gap-3 text-sm text-white/65 max-w-xl"
              style={{ animationDelay: "0.66s" }}
            >
              {features.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckIcon /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lp-fade-up lg:col-span-5 relative" style={{ animationDelay: "0.75s" }}>
            <AgendaDashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 shrink-0"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E8740C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
