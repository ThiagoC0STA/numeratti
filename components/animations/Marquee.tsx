"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
  separator?: string;
}

export default function Marquee({
  text,
  speed = 1,
  className = "",
  separator = " ✺ ",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const content = track.querySelector(".marquee-content");
    if (!content) return;

    const contentWidth = (content as HTMLElement).offsetWidth;
    const gap = 40;

    gsap.to(track, {
      x: -(contentWidth + gap),
      duration: contentWidth / 80 / speed,
      ease: "none",
      repeat: -1,
    });
  }, [text, speed]);

  const repeatedText = Array(8)
    .fill(text + separator)
    .join("");

  return (
    <div ref={trackRef} className={`marquee-track flex w-max ${className}`}>
      <span className="marquee-content whitespace-nowrap">{repeatedText}</span>
      <span className="marquee-content whitespace-nowrap">{repeatedText}</span>
    </div>
  );
}
