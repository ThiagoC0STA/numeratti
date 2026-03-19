"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  opacity?: boolean;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  y = 80,
  opacity = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        y,
        opacity: opacity ? 0 : 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [y, opacity, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
