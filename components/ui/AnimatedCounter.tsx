"use client";

import { startTransition, useEffect, useLayoutEffect, useRef, useState } from "react";
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

function formatBr(n: number) {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatAnimatedSegment(
  displayValue: number,
  decimals: number,
  format: "full" | "compact",
  targetValue: number
): string {
  if (decimals > 0) {
    return displayValue.toFixed(decimals).replace(".", ",");
  }
  if (format === "full") {
    return formatBr(displayValue);
  }
  if (targetValue >= 1000000) {
    return (displayValue / 1000000).toFixed(1).replace(".", ",") + "M";
  }
  if (targetValue >= 1000) {
    return (displayValue / 1000).toFixed(1).replace(".", ",") + "K";
  }
  return displayValue.toFixed(0);
}

type CounterPhase = "idle" | "running" | "done";

function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  format = "full",
}: AnimatedCounterProps) {
  const [phase, setPhase] = useState<CounterPhase>("idle");
  const [displayValue, setDisplayValue] = useState(0);
  const [inView, setInView] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
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
    if (!inView) {
      startTransition(() => {
        setPhase("idle");
        setDisplayValue(0);
      });
      return;
    }

    if (prefersReduced) {
      startTransition(() => {
        setPhase("done");
        setDisplayValue(value);
      });
      return;
    }

    let rafId = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const node = valueRef.current;
      if (!node) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const startTime = performance.now();
      node.textContent = formatAnimatedSegment(0, decimals, format, value);

      function update(currentTime: number) {
        if (cancelled) return;
        const elapsed = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsed / effectiveDuration, 1);
        const eased = easeOutQuart(progress);
        const n = value * eased;
        const elNode = valueRef.current;
        if (elNode) {
          elNode.textContent = formatAnimatedSegment(n, decimals, format, value);
        }
        if (progress < 1) {
          rafId = requestAnimationFrame(update);
        } else {
          startTransition(() => {
            setDisplayValue(value);
            setPhase("done");
          });
        }
      }

      rafId = requestAnimationFrame(update);
    };

    // Defer setState out of the effect's synchronous body (see react-compiler / eslint guidance).
    const beginRun = () => {
      if (cancelled) return;
      setPhase("running");
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(beginRun);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [inView, prefersReduced, value, effectiveDuration, decimals, format]);

  const staticSegment = formatAnimatedSegment(
    prefersReduced ? value : displayValue,
    decimals,
    format,
    value
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {phase === "running" ? (
        <span ref={valueRef} className="tabular-nums" />
      ) : (
        <span className="tabular-nums">{staticSegment}</span>
      )}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
