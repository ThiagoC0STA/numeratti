"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export default function RevealOnScroll({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Keep SSR content visible. Once hydrated, only off-screen elements are
  // hidden for the entrance animation, so a client-side failure never leaves
  // the page permanently blank.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport && once) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else {
            setVisible(false);
          }
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      className={`lp-reveal ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
