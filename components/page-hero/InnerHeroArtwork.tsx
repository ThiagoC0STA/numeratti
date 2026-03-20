"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function InnerHeroArtwork() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[4/3] max-h-[min(380px,42vh)] w-full max-w-lg lg:mx-0 lg:max-w-none" aria-hidden>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-stone-200/40"
        viewBox="0 0 400 320"
        fill="none"
      >
        <circle cx="320" cy="80" r="120" stroke="currentColor" strokeWidth="1" />
        <circle cx="90" cy="240" r="90" stroke="currentColor" strokeWidth="1" />
      </svg>

      {!reduce ? (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.85, ease }}
            className="absolute right-0 top-[8%] h-[42%] w-[58%] rounded-[1.75rem] border border-stone-200/90 bg-white/90 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.08)] backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[6%] top-[12%] h-[38%] w-[52%] rounded-2xl bg-gradient-to-br from-[#ff6600]/12 via-[#f27405]/8 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="absolute bottom-[6%] left-0 w-[72%] rounded-[1.5rem] border border-stone-200/80 bg-gradient-to-br from-white to-stone-50/90 p-5 shadow-[0_20px_50px_-24px_rgba(255,102,0,0.12)]"
          >
            <div className="flex gap-3">
              <span className="h-10 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#ff6600] to-[#f27405]" />
              <div className="space-y-2 pt-0.5">
                <div className="h-2 w-24 rounded-full bg-stone-200/90" />
                <div className="h-2 w-[85%] rounded-full bg-stone-100" />
                <div className="h-2 w-[60%] rounded-full bg-stone-100" />
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-[12%] top-[18%] h-14 w-14 rounded-2xl border border-[#ff6600]/25 bg-white shadow-md"
          />
        </>
      ) : (
        <div className="absolute inset-[10%] rounded-[1.75rem] border border-stone-200/90 bg-white/90 shadow-lg" />
      )}
    </div>
  );
}
