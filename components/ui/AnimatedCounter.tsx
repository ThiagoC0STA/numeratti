"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

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

const NARROW_QUERY = "(max-width: 767px)";

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
  const [inView, setInView] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion() ?? false;

  useLayoutEffect(() => {
    const mq = window.matchMedia(NARROW_QUERY);
    const apply = () => setIsNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Native IO: more reliable than framer useInView on mobile; generous rootMargin so stats animate before fully on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const markIfVisible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.top < vh * 0.95 && r.bottom > 0) {
        setInView(true);
        return true;
      }
      return false;
    };

    const raf = requestAnimationFrame(() => {
      if (cancelled) return;
      if (markIfVisible()) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer?.disconnect();
            observer = null;
          }
        },
        { root: null, rootMargin: "0px 0px 22% 0px", threshold: [0, 0.05, 0.15] }
      );

      observer.observe(el);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, []);

  // If IntersectionObserver never fires (some mobile WebViews / overflow parents), recover when the node is on screen.
  useEffect(() => {
    const id = window.setTimeout(() => {
      setInView((seen) => {
        if (seen) return true;
        const el = ref.current;
        if (!el) return false;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const nearViewport = r.top < vh + 280 && r.bottom > -120;
        return nearViewport;
      });
    }, 1600);
    return () => window.clearTimeout(id);
  }, []);

  const effectiveDuration = isNarrow ? Math.min(1.35, duration) : duration;

  useEffect(() => {
    if (!inView) return;

    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }

    setDisplayValue(0);
    const startTime = performance.now();
    let raf = 0;

    function update(currentTime: number) {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / effectiveDuration, 1);
      const eased = easeOutQuart(progress);
      setDisplayValue(value * eased);

      if (progress < 1) {
        raf = requestAnimationFrame(update);
      }
    }

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, value, effectiveDuration]);

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
