"use client";

type Tool = { name: string; logo: React.ReactNode };

const tools: Tool[] = [
  {
    name: "VEO",
    logo: (
      // Google G — official four-color mark
      <svg viewBox="0 0 48 48" width="20" height="20" role="img" aria-label="Criação de vídeo com IA VEO (Google)">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.37-.76-2.84-.76-4.59s.27-3.22.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    logo: (
      // ElevenLabs — black "II" mark (their iconic monogram)
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Geração de voz com IA ElevenLabs">
        <rect x="8"  y="4" width="5" height="24" rx="1" fill="#000"/>
        <rect x="19" y="4" width="5" height="24" rx="1" fill="#000"/>
      </svg>
    ),
  },
  {
    name: "Runway",
    logo: (
      // Runway — black square with stylized R (their app icon)
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Criação de vídeo com IA Runway">
        <rect x="0" y="0" width="32" height="32" rx="7" fill="#000"/>
        <path d="M9 9h9a4.5 4.5 0 010 9h-9z" fill="#fff"/>
        <path d="M9 18h5l5.5 5.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Kling",
    logo: (
      // Kling — bold red K (Kuaishou brand color)
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Criação de vídeo com IA Kling">
        <path d="M7 4v24" stroke="#FF4D4F" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M7 16L21 4" stroke="#FF4D4F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L21 28" stroke="#FF4D4F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Pika",
    logo: (
      // Pika — yellow lightning bolt (their iconic mark)
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Criação de vídeo com IA Pika">
        <path d="M19 2L5 18h12l-5 12L27 13H14L19 2z" fill="#FACC15"/>
      </svg>
    ),
  },
  {
    name: "HeyGen",
    logo: (
      // HeyGen — green H avatar mark
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Criação de avatar de vídeo com IA HeyGen">
        <rect x="0" y="0" width="32" height="32" rx="8" fill="#15CC85"/>
        <path d="M10 9v14M22 9v14M10 16h12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Sora",
    logo: (
      // Sora (OpenAI) — petal/bloom mark in black
      <svg viewBox="0 0 32 32" width="20" height="20" fill="#000" role="img" aria-label="Criação de vídeo com IA Sora (OpenAI)">
        <path d="M16 2c1.6 4.6 5.4 8.4 10 10-4.6 1.6-8.4 5.4-10 10-1.6-4.6-5.4-8.4-10-10 4.6-1.6 8.4-5.4 10-10z"/>
      </svg>
    ),
  },
  {
    name: "Seedance",
    logo: (
      // Seedance (ByteDance) — teal seed + wave
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Criação de vídeo com IA Seedance (ByteDance)">
        <ellipse cx="16" cy="10" rx="6" ry="7" fill="#14B8A6"/>
        <path d="M3 24c3-4 6-4 8 0s5 4 8 0s6-4 8 0" stroke="#14B8A6" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Nano Banana",
    logo: (
      // Nano Banana — yellow banana curve
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Geração de imagem com IA Nano Banana (Google)">
        <path d="M8 26C6 16 9 6 17 5c10-1 13 9 9 16-3 5-10 6-18 5z" fill="#FBBF24"/>
        <path d="M8 26C14 24 20 21 24 16" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Claude",
    logo: (
      // Claude (Anthropic) — orange starburst mark
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Roteiro e criação de conteúdo com IA Claude (Anthropic)">
        <path d="M16 3l2.2 8.4L26 8l-5.6 6.8L29 16l-8.6 1.2L26 24l-7.8-3.4L16 29l-2.2-8.4L6 24l5.6-6.8L3 16l8.6-1.2L6 8l7.8 3.4L16 3z" fill="#D97757"/>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    logo: (
      // ChatGPT (OpenAI) — black knot/hexafoil mark
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" role="img" aria-label="Roteiro e criação de conteúdo com IA ChatGPT (OpenAI)">
        <path d="M27.5 13.1a7.4 7.4 0 00-.6-6.1 7.5 7.5 0 00-8-3.6A7.5 7.5 0 0013.2 1a7.5 7.5 0 00-7.1 5.2 7.5 7.5 0 00-5 3.6 7.5 7.5 0 00.9 8.8 7.4 7.4 0 00.6 6.1 7.5 7.5 0 008 3.6 7.5 7.5 0 005.6 2.5 7.5 7.5 0 007.2-5.2 7.5 7.5 0 005-3.6 7.5 7.5 0 00-.9-8.9zM18.8 28.4a5.6 5.6 0 01-3.6-1.3l.2-.1 6-3.4a1 1 0 00.5-.9v-8.4l2.5 1.5v6.9a5.6 5.6 0 01-5.6 5.7zM6.7 23.3a5.6 5.6 0 01-.7-3.8l.2.1 6 3.5a1 1 0 001 0l7.4-4.2v2.9a.1.1 0 010 .1L14.5 25a5.6 5.6 0 01-7.8-1.7zM5.2 11.1a5.6 5.6 0 012.9-2.5v7a1 1 0 00.5.9l7.3 4.2-2.5 1.5a.1.1 0 01-.1 0l-6.1-3.6a5.6 5.6 0 01-2-7.5zm20.8 4.8L18.6 11.6l2.5-1.4a.1.1 0 01.1 0l6.1 3.5a5.6 5.6 0 01-.9 10.1v-7.1a1 1 0 00-.5-.8zm2.5-3.7l-.2-.1-6-3.5a1 1 0 00-1 0l-7.4 4.2V9.9a.1.1 0 010-.1L19.5 7a5.6 5.6 0 018.4 5.8zM13 18.4l-2.5-1.5V10a5.6 5.6 0 019.2-4.3l-.2.1-6 3.4a1 1 0 00-.5.9zm1.4-3l3.3-1.9 3.3 1.9V19l-3.3 1.9-3.3-1.9z" fill="#000"/>
      </svg>
    ),
  },
];

const row1 = tools;
const row2 = [...tools].reverse();

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <div
      className="flex items-center gap-3 pl-2 pr-5 py-2 rounded-full select-none flex-shrink-0 transition-all duration-200 hover:border-white/15"
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
      }}
    >
      <span
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
        style={{ background: "#ffffff" }}
      >
        {tool.logo}
      </span>
      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "var(--text)" }}>
        {tool.name}
      </span>
    </div>
  );
}

export default function LogosBar() {
  return (
    <section
      className="py-14 md:py-16 border-y overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <p
          className="text-center text-xs uppercase tracking-[0.22em] font-semibold"
          style={{ color: "var(--text-dim)" }}
        >
          As melhores IAs do mundo gerando seus vídeos
        </p>
      </div>

      {/* Row 1 — slides left */}
      <div
        className="overflow-hidden mb-3"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div className="flex gap-3 logos-marquee-left" style={{ width: "max-content" }}>
          {[...row1, ...row1].map((tool, i) => (
            <ToolChip key={i} tool={tool} />
          ))}
        </div>
      </div>

      {/* Row 2 — slides right */}
      <div
        className="overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div className="flex gap-3 logos-marquee-right" style={{ width: "max-content" }}>
          {[...row2, ...row2].map((tool, i) => (
            <ToolChip key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
