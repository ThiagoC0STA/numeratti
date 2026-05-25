"use client";

import { useEffect, useState } from "react";
import { COLORS } from "@/lib/constants";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const v = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, v)));
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full origin-left transition-transform duration-150 ease-out motion-reduce:transition-none"
        style={{
          transform: `scaleX(${progress})`,
          background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primaryDark}, ${COLORS.primary})`,
          boxShadow: `0 0 10px ${COLORS.primary}66`,
        }}
      />
    </div>
  );
}
