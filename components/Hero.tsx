"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, HERO_SLIDES, COLORS } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

const HeroCharts = dynamic(() => import("@/components/HeroCharts"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const slide = HERO_SLIDES[slideIndex];
  const simplified = useSimplifiedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => {
      mq.removeEventListener("change", update);
      clearInterval(interval);
    };
  }, []);

  const renderLine = (line: (typeof HERO_SLIDES)[number]["lines"][number]) => {
    if (!("parts" in line)) return null;
    return (
      <h2 className="font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.4] tracking-tight text-stone-900 dark:text-white md:text-4xl lg:text-5xl xl:text-6xl">
        {line.parts.map((p, j) =>
          p.highlight ? (
            <span key={j} className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
              {p.text}
            </span>
          ) : (
            <span key={j}>{p.text}</span>
          )
        )}
      </h2>
    );
  };

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-stone-50 dark:bg-[#030303] flex items-center pt-28 pb-16">
      {/* Premium Tech Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-25 pointer-events-none [--grid-line:rgba(0,0,0,0.07)] dark:[--grid-line:rgba(255,255,255,0.05)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at 60% 50%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 30%, transparent 70%)'
        }}
      />

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#ff6600]/[0.08] blur-[120px] top-[20%] left-[-10%] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#f27405]/[0.06] blur-[150px] bottom-[-10%] right-[-10%] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div
          key={slideIndex}
          className="grid min-h-[500px] items-center gap-16 lg:min-h-[600px] lg:grid-cols-12 lg:gap-12 animate-fade-in"
        >
          {/* Text Content */}
          <div className="order-2 flex flex-col items-center lg:order-1 lg:col-span-6 lg:items-start lg:text-left z-20 relative">
            
            {/* Tech Brand Badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-stone-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider text-[#ff6600] uppercase mb-6 ${simplified ? '' : 'animate-slide-up-fade opacity-0'}`}
              style={{ animationDelay: '50ms' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6600] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6600]"></span>
              </span>
              Performance Digital Orientada a Resultados
            </div>

            <div className="space-y-6 text-center lg:text-left w-full max-w-2xl">
              {simplified ? (
                slide.lines.map((line, i) => (
                  <div key={`${slideIndex}-${i}`}>{renderLine(line)}</div>
                ))
              ) : (
                <>
                  {slide.lines.map((line, i) => (
                    <div
                      key={`${slideIndex}-${i}`}
                      className="animate-slide-up-fade opacity-0"
                      style={{ animationDelay: `${(i + 1) * 100}ms` }}
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-[4.8rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-stone-900 dark:text-white">
                        {line.parts.map((p, j) =>
                          p.highlight ? (
                            <span key={j} className="bg-gradient-to-r from-[#ff6600] via-[#ff8833] to-[#f27405] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,102,0,0.15)]">
                              {p.text}
                            </span>
                          ) : (
                            <span key={j} className="text-stone-800 dark:text-white/95">{p.text}</span>
                          )
                        )}
                      </h1>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Premium Description Paragraph */}
            <p
              className={`mt-4 text-base md:text-lg text-stone-600 dark:text-white/60 leading-relaxed text-center lg:text-left max-w-xl ${simplified ? '' : 'animate-slide-up-fade opacity-0'}`}
              style={{ animationDelay: '300ms' }}
            >
              Gere números reais e mensuráveis para o seu negócio através de tráfego qualificado, inteligência de dados e conversão.
            </p>

            {slide.smallImage && (
              <div
                className={`mt-8 flex justify-center lg:justify-start ${simplified ? '' : 'animate-fade-in opacity-0'}`}
                style={{ animationDelay: '400ms' }}
              >
                <img
                  src={slide.smallImage}
                  alt="Brand Partner"
                  className="h-10 w-auto max-w-[120px] object-contain object-left opacity-70 hover:opacity-100 transition-opacity"
                  crossOrigin="anonymous"
                />
              </div>
            )}

            {/* CTAs Section */}
            <div
              className={`mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ${simplified ? '' : 'animate-slide-up-fade opacity-0'}`}
              style={{ animationDelay: '500ms' }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex justify-center items-center gap-3 rounded-full bg-[#ff6600] px-8 py-4 text-[15px] font-bold text-white transition-all hover:bg-[#f27405] hover:shadow-[0_0_30px_rgba(255,102,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Falar com um especialista
                <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#solucoes"
                className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-stone-300 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-stone-100 dark:hover:bg-white/[0.08] hover:border-stone-400 dark:hover:border-white/20 px-8 py-4 text-[15px] font-bold text-stone-900 dark:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Conhecer Soluções
              </a>
            </div>

          </div>

          {/* Visual/Image Content */}
          <div
            className={`order-1 lg:order-2 lg:col-span-6 flex justify-center items-center relative z-20 ${simplified ? '' : 'animate-scale-up-fade opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative flex w-full max-w-[540px] aspect-square justify-center items-center">
              
              {/* Premium Gradient Border Wrapper */}
              <div className="absolute inset-4 rounded-[32px] p-[1.5px] bg-gradient-to-tr from-[#ff6600]/40 via-stone-300 dark:via-white/10 to-transparent shadow-[0_18px_40px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
                <div className="relative w-full h-full rounded-[30px] bg-stone-100 dark:bg-[#0c0c0c] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/60 to-transparent z-10 pointer-events-none" />
                  
                  <Image
                    src={slide.image}
                    alt="Numeratti Hero"
                    fill
                    className="object-cover object-center transition-transform duration-[1.8s] group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 540px"
                    priority={slideIndex === 0}
                    quality={100}
                    fetchPriority={slideIndex === 0 ? "high" : "low"}
                  />
                </div>
              </div>
              
              {/* Embedded Charts (Flanking the image) */}
              {isDesktop && (
                <div className="absolute inset-[-20px] xl:inset-[-40px] 2xl:inset-[-80px] pointer-events-none z-40">
                  <HeroCharts slideIndex={slideIndex} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Custom Slide Indicators - Minimalist */}
        <div
          className={`mt-16 flex justify-center gap-3 z-20 relative ${simplified ? '' : 'animate-fade-in opacity-0'}`}
          style={{ animationDelay: '700ms' }}
        >
          {HERO_SLIDES.map((_, i) => {
            const isActive = i === slideIndex;
            return (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ease-out ${
                  isActive ? "" : "bg-stone-300 dark:bg-white/15"
                }`}
                style={{
                  backgroundColor: isActive ? COLORS.primary : undefined,
                }}
                aria-label={`Slide ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
