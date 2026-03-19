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
    <section className="relative min-h-[50vh] overflow-hidden bg-black lg:min-h-[60vh]">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </div>
      )}
      {!backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,102,0,0.15), transparent)",
          }}
        />
      )}
      <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-6 py-32 lg:min-h-[60vh] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
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
            <p className="mt-6 text-lg text-gray-300 md:text-xl">{subtitle}</p>
          )}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex rounded-full px-6 py-4 font-semibold text-white"
            style={{ backgroundColor: COLORS.primary }}
          >
            Falar com um especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
