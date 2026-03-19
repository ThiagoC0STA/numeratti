"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: "a" | "button" | "div";
}

export default function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.3,
  onClick,
  as = "a",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const Comp = as;
  const isLink = as === "a" && href;

  return (
    <div className="inline-block">
      {isLink ? (
        <a
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          ref={ref as React.RefObject<HTMLAnchorElement>}
          style={{ willChange: "transform" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={className}
        >
          {children}
        </a>
      ) : (
        <Comp
          ref={ref as React.RefObject<HTMLButtonElement & HTMLDivElement>}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
          href={as === "a" ? href : undefined}
          className={className}
        >
          {children}
        </Comp>
      )}
    </div>
  );
}
