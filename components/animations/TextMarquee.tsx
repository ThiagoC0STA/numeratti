"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextMarqueeProps {
  lines: string[];
  className?: string;
}

export default function TextMarquee({ lines, className = "" }: TextMarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.querySelector(".marquee-text");
    if (!text) return;

    const width = (text as HTMLElement).offsetWidth;
    const duration = width / 60;

    gsap.to(text, {
      x: -width / 2,
      duration,
      ease: "none",
      repeat: -1,
    });
  }, [lines]);

  const fullText = lines.join(" — ");
  const repeated = `${fullText} — ${fullText}`;

  return (
    <div
      ref={ref}
      className={`overflow-hidden py-12 lg:py-20 ${className}`}
    >
      <div className="marquee-text flex w-max">
        <span className="whitespace-nowrap pr-8 text-4xl font-bold tracking-tight text-gray-200 md:text-6xl lg:text-7xl">
          {repeated}
        </span>
      </div>
    </div>
  );
}
