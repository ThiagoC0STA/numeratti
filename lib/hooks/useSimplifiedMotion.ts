"use client";

import { useLayoutEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const NARROW_QUERY = "(max-width: 767px)";

/**
 * True on small viewports or when the user prefers reduced motion.
 * Skips heavy scroll-driven and staggered animations to keep mobile smooth.
 */
export function useSimplifiedMotion(): boolean {
  const prefersReduced = useReducedMotion() ?? false;
  const [narrow, setNarrow] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(NARROW_QUERY);
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return prefersReduced || narrow;
}
