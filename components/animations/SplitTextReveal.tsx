"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  triggerOffset?: string;
}

export default function SplitTextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 80,
  stagger = 0.03,
  triggerOffset = "start 85%",
}: SplitTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".split-word");
    if (words.length === 0) return;

    gsap.fromTo(
      words,
      {
        y,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: [0.22, 1, 0.36, 1],
        scrollTrigger: {
          trigger: el,
          start: triggerOffset,
          toggleActions: "play none none none",
        },
      }
    );
  }, [children, delay, duration, y, stagger, triggerOffset]);

  const text = typeof children === "string" ? children : String(children);
  const wordSpans = text.split(" ").map((word, i) => (
    <span key={i} className="split-word inline-block overflow-hidden">
      <span className="inline-block">{word}</span>
      {i < text.split(" ").length - 1 ? "\u00A0" : ""}
    </span>
  ));

  return (
    <div ref={ref} className={className}>
      {wordSpans}
    </div>
  );
}
