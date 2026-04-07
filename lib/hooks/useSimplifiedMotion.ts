"use client";

import { useLayoutEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const NARROW_QUERY = "(max-width: 767px)";

/**
 * True on small viewports (max-width: 767px) or when the user prefers reduced motion.
 * Use this to skip scroll-driven animations, hover parallax, and heavy stagger on mobile.
 *
 * Helpers: `lib/motion/simplifiedScroll.ts` (`fadeUpWhileInView`, `staggerContainerProps`).
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
