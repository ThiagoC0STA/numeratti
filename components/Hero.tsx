"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
      <h2 className="font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.4] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
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
    <section className="relative min-h-[92vh] overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff6600]/25 blur-[140px] max-md:opacity-60 max-md:blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full bg-[#f27405]/20 blur-[120px] max-md:opacity-50 max-md:blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-[#ff6600]/12 blur-[100px] max-md:opacity-50" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,102,0,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,102,0,.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {isDesktop && (
        <div className="opacity-90">
          <HeroCharts slideIndex={slideIndex} />
        </div>
      )}

      <div className="relative mx-auto max-w-[1320px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={simplified ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={simplified ? undefined : { opacity: 0 }}
              transition={{
                duration: simplified ? 0.2 : 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid min-h-[480px] items-center gap-14 lg:min-h-[520px] lg:grid-cols-2 lg:gap-20"
            >
              <div className="order-2 flex flex-col items-center lg:order-1 lg:items-start lg:text-left">
                <div className="space-y-2 text-center lg:text-left">
                  {simplified ? (
                    slide.lines.map((line, i) => (
                      <div key={`${slideIndex}-${i}`}>{renderLine(line)}</div>
                    ))
                  ) : (
                    <AnimatePresence mode="wait">
                      {slide.lines.map((line, i) => (
                        <motion.div
                          key={`${slideIndex}-${i}`}
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {renderLine(line)}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}
                </div>

                {slide.smallImage && (
                  <motion.div
                    initial={simplified ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: simplified ? 0 : 0.4 }}
                    className="mt-8 flex justify-center lg:justify-start"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.smallImage}
                      alt=""
                      className="h-12 w-auto max-w-[120px] object-contain object-left md:h-14"
                      crossOrigin="anonymous"
                    />
                  </motion.div>
                )}

                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={simplified ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: simplified ? 0 : 0.5 }}
                  whileHover={
                    simplified ? undefined : { scale: 1.03, boxShadow: "0 0 40px rgba(255, 102, 0, 0.4)" }
                  }
                  whileTap={{ scale: 0.98 }}
                  className="mt-12 inline-flex items-center gap-2 rounded-full px-10 py-5 text-base font-bold text-white shadow-[0_0_30px_rgba(255,102,0,0.25)] transition-shadow"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Falar com um especialista
                  <ArrowRight size={20} strokeWidth={2.5} />
                </motion.a>
              </div>

              <motion.div
                initial={simplified ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={simplified ? undefined : { opacity: 0, scale: 1.02 }}
                transition={{ duration: simplified ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative flex min-h-[420px] lg:min-h-[520px] justify-center items-center w-full">
                  <div className="relative aspect-square w-[min(95%,580px)] overflow-hidden rounded-full">
                    <Image
                      src={slide.image}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 95vw, 580px"
                      priority={slideIndex === 0}
                      quality={85}
                      fetchPriority={slideIndex === 0 ? "high" : "low"}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={simplified ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: simplified ? 0 : 0.6 }}
          className="mt-16 flex justify-center gap-3"
        >
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === slideIndex ? "h-2.5 w-12" : "h-2.5 w-2.5"
              }`}
              style={{
                backgroundColor:
                  i === slideIndex ? COLORS.primary : "rgba(255,255,255,.25)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
