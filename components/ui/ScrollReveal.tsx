"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

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

  if (simplified) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, delay, ease }}
      viewport={{ once, amount, margin }}
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

  if (simplified) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
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
