"use client";

import { useLayoutEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

/**
 * Viewport detection only - does NOT disable animations.
 * Used to tune animation parameters (smaller offsets, faster durations) on mobile.
 */
export function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const apply = () => setMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return mobile;
}
