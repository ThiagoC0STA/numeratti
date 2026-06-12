import RevealOnScroll from "./ui/RevealOnScroll";

const canDo = [
  "Divulgar valores de consulta e formas de pagamento",
  "Mostrar antes/depois com critérios técnicos e texto educativo",
  "Repostar avaliações de pacientes, com sobriedade",
  "Anunciar equipamentos aprovados pela Anvisa",
  "Fazer publicidade para captar pacientes em canais próprios",
];

const cannotDo = [
  "Prometer ou insinuar resultados garantidos",
  "Sensacionalismo e “técnica milagrosa”",
  "Autopromoção que desqualifique colegas",
  "Publicidade de medicamentos e selos a produtos",
  "Peças sem nome, CRM, título “médico” e RQE",
];

export default function ComplianceSection() {
  return (
    <section
      id="etica"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#fdf8f3", color: "#111111" }}
    >
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <RevealOnScroll>
            <span className="mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#0d9488" }}>
              / ética e norma
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2
              className="text-3xl md:text-5xl lg:text-[52px] mt-5 leading-[1.04]"
              style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              As regras da publicidade médica{" "}
              <span style={{ color: "#e8740c" }}>mudaram em 2024.</span> Quem entendeu, saiu na
              frente.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-7 text-lg leading-relaxed" style={{ color: "rgba(17,17,17,0.7)" }}>
              A Resolução CFM nº 2.336/2023, em vigor desde março de 2024,{" "}
              <strong>liberou</strong> práticas que muitos médicos ainda acham proibidas e manteve
              vedações que muitas agências ignoram. Conhecer essa fronteira é o que separa crescer
              com segurança de responder a um processo ético.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <RevealOnScroll>
            <div
              className="h-full rounded-[22px] p-7 md:p-8"
              style={{ background: "#ffffff", border: "1px solid rgba(13,148,136,0.25)", boxShadow: "0 20px 50px -30px rgba(13,148,136,0.4)" }}
            >
              <div className="mono text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 inline-block px-2.5 py-1 rounded-full" style={{ background: "rgba(13,148,136,0.1)", color: "#0d9488" }}>
                hoje você pode
              </div>
              <ul className="space-y-4">
                {canDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug" style={{ color: "rgba(17,17,17,0.85)" }}>
                    <CheckClinical /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div
              className="h-full rounded-[22px] p-7 md:p-8"
              style={{ background: "#ffffff", border: "1px solid rgba(232,116,12,0.25)", boxShadow: "0 20px 50px -30px rgba(232,116,12,0.35)" }}
            >
              <div className="mono text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 inline-block px-2.5 py-1 rounded-full" style={{ background: "rgba(232,116,12,0.1)", color: "#d4680a" }}>
                continua vedado
              </div>
              <ul className="space-y-4">
                {cannotDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug" style={{ color: "rgba(17,17,17,0.85)" }}>
                    <CrossIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1}>
          <div
            className="mt-10 rounded-[22px] p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
            style={{ background: "#0f0a05", color: "#fff" }}
          >
            <p className="flex-1 text-white/85 text-base md:text-lg leading-relaxed">
              Cada campanha que veiculamos passa por checagem de conformidade antes de ir ao ar.{" "}
              <strong className="text-white">Seu crescimento nunca deve custar seu registro.</strong>
            </p>
            {/* Carimbo de conformidade */}
            <div
              className="mono shrink-0 self-start md:self-center -rotate-6 rounded-lg px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-center leading-relaxed"
              style={{ border: "2px solid #2dd4bf", color: "#2dd4bf" }}
              aria-hidden
            >
              verificado
              <br />
              cfm 2.336/2023
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-6 text-[12px] leading-relaxed max-w-3xl" style={{ color: "rgba(17,17,17,0.5)" }}>
            A responsabilidade final pelo conteúdo publicado é do médico, conforme a Resolução.
            Atuamos como gestores de campanha tecnicamente alinhados à norma, não como consultoria
            jurídica.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function CheckClinical() {
  return (
    <svg className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function CrossIcon() {
  return (
    <svg className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4680a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
