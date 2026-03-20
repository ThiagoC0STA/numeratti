"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

gsap.registerPlugin(ScrollTrigger);

interface GsapCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  format?: "full" | "compact";
}

function formatNumber(
  value: number,
  decimals: number,
  format: "full" | "compact"
): string {
  const formatBr = (n: number) =>
    Math.round(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (decimals > 0) {
    return value.toFixed(decimals).replace(".", ",");
  }
  if (format === "full") return formatBr(value);
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(1).replace(".", ",") + "M";
  if (value >= 1_000) return (value / 1_000).toFixed(1).replace(".", ",") + "K";
  return value.toString();
}

export default function GsapCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.5,
  className = "",
  format = "full",
}: GsapCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const simplified = useSimplifiedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (simplified) {
      el.textContent = prefix + formatNumber(value, decimals, format) + suffix;
      return;
    }

    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        const display = formatNumber(obj.val, decimals, format);
        el.textContent = prefix + display + suffix;
      },
    });
  }, [value, suffix, prefix, decimals, duration, format, simplified]);

  const displayValue = simplified ? formatNumber(value, decimals, format) : formatNumber(0, decimals, format);

  return (
    <span
      ref={ref}
      className={className}
      data-value={value}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
