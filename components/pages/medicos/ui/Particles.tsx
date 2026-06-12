"use client";
import { useMemo } from "react";

/**
 * Partículas decorativas flutuantes. Posições derivadas do índice por um
 * gerador pseudo-aleatório determinístico: render puro (sem Math.random),
 * estável entre renders e seguro para SSR/hidratação.
 */
function seeded(i: number, salt: number): number {
  const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x); // 0..1
}

function px(value: number): string {
  return `${value.toFixed(4)}px`;
}

function percent(value: number): string {
  return `${value.toFixed(4)}%`;
}

function seconds(value: number): string {
  return `${value.toFixed(4)}s`;
}

export default function Particles({ count = 18 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: percent(seeded(i, 1) * 100),
        delay: seconds(seeded(i, 2) * 12),
        duration: seconds(14 + seeded(i, 3) * 18),
        size: px(2 + seeded(i, 4) * 3),
        bottom: percent(-20 - seeded(i, 5) * 30),
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
