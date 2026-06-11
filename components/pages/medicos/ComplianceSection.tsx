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
  "Sensacionalismo e “técnica milagrosa/revolucionária”",
  "Autopromoção que desqualifique colegas",
  "Publicidade de medicamentos e selos a produtos",
  "Peças sem nome, CRM, título “médico” e RQE",
];

export default function ComplianceSection() {
  return (
    <section
      id="etica"
      className="relative py-28 md:py-36 overflow-hidden"
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
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.1em]"
              style={{
                background: "rgba(13,148,136,0.1)",
                color: "#0d9488",
                border: "1px solid rgba(13,148,136,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#0d9488" }} />
              Ética em primeiro lugar
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] mt-6 leading-[1.02]"
              style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 700, letterSpacing: "-0.045em" }}
            >
              As regras da publicidade médica{" "}
              <span style={{ color: "#e8740c" }}>mudaram em 2024.</span> Quem entendeu, saiu na
              frente.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-7 text-lg leading-relaxed" style={{ color: "rgba(17,17,17,0.7)" }}>
              A Resolução CFM nº 2.336/2023, em vigor desde março de 2024, <strong>liberou</strong>{" "}
              práticas que muitos médicos ainda acham proibidas — e manteve vedações que muitas
              agências genéricas ignoram. Conhecer essa fronteira é a diferença entre crescer com
              segurança e responder a um processo ético.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <RevealOnScroll>
            <div
              className="h-full rounded-[22px] p-7 md:p-8"
              style={{ background: "#ffffff", border: "1px solid rgba(13,148,136,0.25)", boxShadow: "0 20px 50px -30px rgba(13,148,136,0.4)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="text-[11px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(13,148,136,0.1)", color: "#0d9488" }}
                >
                  Hoje você pode
                </span>
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
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="text-[11px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(232,116,12,0.1)", color: "#d4680a" }}
                >
                  Continua vedado
                </span>
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
            className="mt-10 rounded-[22px] p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-5"
            style={{ background: "#0f0a05", color: "#fff" }}
          >
            <div className="shrink-0 w-12 h-12 rounded-2xl grid place-items-center" style={{ background: "rgba(45,212,191,0.12)", color: "#2dd4bf" }}>
              <ShieldIcon />
            </div>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Cada campanha, anúncio e vídeo que produzimos passa por checagem de conformidade antes
              da veiculação. <strong className="text-white">Seu crescimento nunca deve custar seu registro.</strong>
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-6 text-[12px] leading-relaxed max-w-3xl" style={{ color: "rgba(17,17,17,0.5)" }}>
            A responsabilidade final pelo conteúdo publicado é do médico, conforme a Resolução.
            Atuamos como executores tecnicamente alinhados à norma — não como consultoria jurídica.
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
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
