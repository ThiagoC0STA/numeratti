"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const variantStyles = {
  hero: "border-white/35 bg-white/10 text-white hover:bg-white/18",
  lightBar: "border-stone-200 bg-stone-100/90 text-stone-800 hover:bg-stone-200/90",
  darkBar: "border-zinc-600/80 bg-zinc-800/90 text-zinc-100 hover:bg-zinc-700/90",
} as const;

export default function ThemeToggle({ variant }: { variant: keyof typeof variantStyles }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${variantStyles[variant]}`}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.94 }}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${variantStyles[variant]}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
    </motion.button>
  );
}
