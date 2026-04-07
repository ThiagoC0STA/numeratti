"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

const ease = [0.22, 1, 0.36, 1] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  margin?: string;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.14,
  margin = "0px 0px -11% 0px",
}: ScrollRevealProps) {
  const simplified = useSimplifiedMotion();
  const mobile = useIsMobile();

  if (simplified) {
    return <div className={className}>{children}</div>;
  }

  const mY = mobile ? 28 : 56;
  const mDuration = mobile ? 0.45 : 0.72;
  const mAmount = mobile ? 0.01 : amount;
  const mMargin = mobile ? "0px 0px 15% 0px" : margin;

  return (
    <motion.div
      className={`scroll-reveal ${className}`}
      initial={{ opacity: 0, y: mY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: mDuration, delay: mobile ? Math.min(delay, 0.05) : delay, ease }}
      viewport={{ once, amount: mAmount, margin: mMargin }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
  margin?: string;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.09,
  amount = 0.12,
  margin = "0px 0px -10% 0px",
}: StaggerContainerProps) {
  const simplified = useSimplifiedMotion();
  const mobile = useIsMobile();

  if (simplified) {
    return <div className={className}>{children}</div>;
  }

  const mAmount = mobile ? 0.01 : amount;
  const mMargin = mobile ? "0px 0px 15% 0px" : margin;
  const mStagger = mobile ? Math.min(staggerDelay, 0.04) : staggerDelay;

  return (
    <motion.div
      className={`scroll-reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: mAmount, margin: mMargin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: mStagger,
            delayChildren: 0.02,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};
