"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COLORS, WHATSAPP_URL } from "@/lib/constants";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  highlight,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[48vh] overflow-hidden lg:min-h-[52vh]">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(250,248,245,0.92) 0%, rgba(255,247,240,0.95) 50%, rgba(255,255,255,0.98) 100%)",
            }}
          />
        </div>
      )}
      {!backgroundImage && (
        <>
          <div
            className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#ff6600]/20 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-400/25 blur-[90px]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-white to-[#fff5eb]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(rgba(255,102,0,0.12) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
        </>
      )}
      <div className="relative mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-center px-6 py-24 lg:min-h-[52vh] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            {title.split(" ").map((word, i) =>
              word.toLowerCase() === (highlight?.toLowerCase() ?? "") ? (
                <span key={i} style={{ color: COLORS.primary }}>
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-stone-600 md:text-xl">{subtitle}</p>
          )}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
            style={{ backgroundColor: COLORS.primary }}
          >
            Falar com um especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
