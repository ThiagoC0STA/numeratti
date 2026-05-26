"use client";
import { useRef, useState } from "react";
import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-28 md:pt-36 pb-24"
      style={{ background: "radial-gradient(ellipse at 70% 0%, #0D0B1A 0%, #040406 60%)" }}
    >
      <div className="dot-grid absolute inset-0" aria-hidden />

      <div
        className="orb w-[700px] h-[700px] -top-60 -right-60"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.22), transparent 60%)" }}
        aria-hidden
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[-200px] -left-40"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.12), transparent 60%)" }}
        aria-hidden
      />

      <Particles count={18} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="lp-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="tag mb-8 inline-flex">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--accent-2)" }}
                />
                Vídeos com IA · Entrega em prazo ágil
              </span>
            </div>

            <h1
              className="lp-fade-up display text-white text-[40px] sm:text-5xl lg:text-[54px] xl:text-[62px]"
              style={{
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                animationDelay: "0.22s",
              }}
            >
              Produção de Vídeos com{" "}
              <span style={{ color: "var(--accent)" }}>Inteligência Artificial</span>
              <br />
              para Anúncios que vendem.
            </h1>

            <p
              className="lp-fade-up mt-7 text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--text-muted)", animationDelay: "0.34s" }}
            >
              Envie seu briefing, a Numeratti produz um{" "}
              <span className="text-white font-semibold">vídeo profissional com IA</span> e entrega
              pronto para anúncios, redes sociais e landing pages.
            </p>

            <div
              className="lp-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.46s" }}
            >
              <GlowButton size="lg">Quero meu vídeo →</GlowButton>
              <a href="#como-funciona" className="ghost-btn px-6 py-4 text-sm">
                Como funciona
              </a>
            </div>

            <ul
              className="lp-fade-up mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm"
              style={{ color: "var(--text-muted)", animationDelay: "0.58s" }}
            >
              {["Roteiro + vídeo inclusos", "Legenda e narração IA"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <CheckIcon />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="lp-fade-up lg:col-span-6 relative"
            style={{ animationDelay: "0.7s" }}
          >
            <VideoFrame />
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(129,140,248,0.4), rgba(129,140,248,0.25))",
          zIndex: 0,
        }}
        aria-hidden
      />

      <div
        className="absolute -inset-[3px] rounded-[20px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(129,140,248,0.7), rgba(129,140,248,0.5))",
          animation: "lp-ia-video-ring-pulse 3s ease-in-out infinite",
          zIndex: 0,
        }}
        aria-hidden
      />

      <div
        className="relative rounded-[18px] overflow-hidden"
        style={{ background: "#000", zIndex: 1 }}
      >
        <video
          ref={videoRef}
          src="/lp/videos-ia/hero-video.mp4?v=2"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-label="Vídeo demo Numeratti IA"
          className="block w-full h-auto cursor-pointer"
          style={{ aspectRatio: "16 / 9" }}
          onClick={toggleSound}
        />

        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Ativar som" : "Desativar som"}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            zIndex: 2,
          }}
        >
          {muted ? <MutedIcon /> : <SoundIcon />}
        </button>
      </div>

      <div
        className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-xl z-10 lp-float-y"
        style={{
          background: "var(--surface-2)",
          border: "1px solid rgba(129,140,248,0.35)",
          color: "var(--text)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span className="text-base">⚡</span>
        Entrega ágil
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ stroke: "var(--accent-2)", flexShrink: 0 }}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
      <path d="M15.54 8.46a5 5 0 010 7.07" />
      <path d="M19.07 4.93a10 10 0 010 14.14" />
    </svg>
  );
}
