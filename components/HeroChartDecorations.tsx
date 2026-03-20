"use client";

import { motion } from "framer-motion";

export default function HeroChartDecorations() {
  const bars = [40, 65, 45, 85, 70, 90, 60, 78];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]">
      {/* Bar chart silhouette - bottom left */}
      <motion.div
        className="absolute bottom-1/4 left-[8%] flex items-end gap-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-sm bg-[#ff6600]"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
            style={{ minHeight: 4 }}
          />
        ))}
      </motion.div>
      {/* Line chart fragment - top right */}
      <svg
        className="absolute right-[12%] top-1/4 h-24 w-32"
        viewBox="0 0 100 80"
        fill="none"
      >
        <motion.path
          d="M0 60 L20 50 L40 55 L60 30 L80 25 L100 20"
          stroke="url(#heroLineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
        <defs>
          <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#ff6600" stopOpacity={0.8} />
            <stop offset="1" stopColor="#f27405" stopOpacity={0.3} />
          </linearGradient>
        </defs>
      </svg>
      {/* Small bars - top left */}
      <motion.div
        className="absolute left-[15%] top-1/3 flex items-end gap-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[30, 50, 40, 70].map((h, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full bg-white/40"
            initial={{ height: 0 }}
            animate={{ height: h }}
            transition={{ duration: 0.5, delay: 1 + i * 0.08 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
