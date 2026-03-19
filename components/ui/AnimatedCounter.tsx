"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  /** "full" = 10.000.000 (BR format), "compact" = 10M */
  format?: "full" | "compact";
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  format = "full",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = value * eased;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, value, duration]);

  const formatBr = (n: number) =>
    Math.round(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const formattedValue =
    decimals > 0
      ? displayValue.toFixed(decimals).replace(".", ",")
      : format === "full"
        ? formatBr(displayValue)
        : value >= 1000000
          ? (displayValue / 1000000).toFixed(1).replace(".", ",") + "M"
          : value >= 1000
            ? (displayValue / 1000).toFixed(1).replace(".", ",") + "K"
            : displayValue.toFixed(0);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
