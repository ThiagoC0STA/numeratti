"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Spotlight radius in px. Defaults to 360. */
  radius?: number;
  /** Spotlight color (CSS color string). Defaults to brand orange tint. */
  color?: string;
}

/**
 * Wraps content with a mouse-following radial-gradient glow that fades in on hover.
 * Uses CSS variables set via JS to keep React renders out of the per-frame path.
 */
export default function SpotlightCard({
  children,
  className = "",
  radius = 360,
  color = "rgba(255,102,0,0.18)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const overlayStyle: CSSProperties = {
    background: `radial-gradient(${radius}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 60%)`,
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group/spot relative ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100 motion-reduce:opacity-0"
        style={overlayStyle}
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
