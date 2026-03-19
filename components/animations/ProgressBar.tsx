"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProgressBarProps {
  value: number;
  label: string;
  index?: number;
  color?: string;
}

export default function ProgressBar({
  value,
  label,
  index = 0,
  color = "#ff6600",
}: ProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    gsap.fromTo(
      fill,
      { width: 0 },
      {
        width: `${value}%`,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: fill.parentElement,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [value, index]);

  return (
    <div className="group">
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>
          {value}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          ref={fillRef}
          className="h-full rounded-full transition-all duration-500"
          style={{ backgroundColor: color, width: 0 }}
        />
      </div>
    </div>
  );
}
