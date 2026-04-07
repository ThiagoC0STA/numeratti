"use client";

import { useReducedMotion } from "framer-motion";

/**
 * True only when the user's OS has prefers-reduced-motion enabled.
 * Animations run on every viewport size including mobile.
 */
export function useSimplifiedMotion(): boolean {
  return useReducedMotion() ?? false;
}
