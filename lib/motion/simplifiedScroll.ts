"use client";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Props for motion blocks that use whileInView fade-up on desktop and stay visible on mobile
 * (useSimplifiedMotion === true). Avoids opacity:0 stuck when intersection is flaky on phones.
 */
export function fadeUpWhileInView(
  simplified: boolean,
  options?: { hiddenY?: number; duration?: number; viewportAmount?: number }
) {
  const hiddenY = options?.hiddenY ?? 40;
  const duration = options?.duration ?? 0.65;
  const amount = options?.viewportAmount ?? 0.25;
  if (simplified) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 } as const,
      whileInView: undefined,
      viewport: undefined,
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: hiddenY },
    whileInView: { opacity: 1, y: 0 },
    animate: undefined as undefined,
    viewport: { once: true, amount },
    transition: { duration, ease: EASE },
  };
}

type StaggerHidden = { opacity: number; y?: number; scale?: number };

/**
 * Parent row for staggered logo/card grids.
 */
export function staggerContainerProps(
  simplified: boolean,
  options?: { stagger?: number; amount?: number }
) {
  const stagger = options?.stagger ?? 0.04;
  const amount = options?.amount ?? 0.2;
  if (simplified) {
    return {
      initial: "visible" as const,
      animate: "visible" as const,
      whileInView: undefined,
      viewport: undefined,
      variants: {
        hidden: {},
        visible: { transition: { staggerChildren: 0 } },
      },
    };
  }
  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: stagger } },
    },
  };
}

export function staggerItemVariants(simplified: boolean, hidden: StaggerHidden) {
  return {
    variants: {
      hidden: simplified ? { opacity: 1, y: 0, scale: 1 } : hidden,
      visible: { opacity: 1, y: 0, scale: 1 },
    },
  };
}
