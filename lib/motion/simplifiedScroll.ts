"use client";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Props for motion blocks that use whileInView fade-up.
 * When simplified (prefers-reduced-motion), content is immediately visible.
 * When mobile, uses lighter parameters to avoid stuck elements.
 */
export function fadeUpWhileInView(
  simplified: boolean,
  options?: {
    hiddenY?: number;
    duration?: number;
    viewportAmount?: number;
    mobile?: boolean;
  }
) {
  const mobile = options?.mobile ?? false;
  const hiddenY = mobile ? 20 : (options?.hiddenY ?? 40);
  const duration = mobile ? 0.4 : (options?.duration ?? 0.65);
  const amount = mobile ? 0.01 : (options?.viewportAmount ?? 0.25);

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
    viewport: { once: true, amount, margin: mobile ? "0px 0px 15% 0px" : undefined },
    transition: { duration, ease: EASE },
  };
}

type StaggerHidden = { opacity: number; y?: number; scale?: number };

/**
 * Parent row for staggered logo/card grids.
 */
export function staggerContainerProps(
  simplified: boolean,
  options?: { stagger?: number; amount?: number; mobile?: boolean }
) {
  const mobile = options?.mobile ?? false;
  const stagger = mobile ? 0.02 : (options?.stagger ?? 0.04);
  const amount = mobile ? 0.01 : (options?.amount ?? 0.2);

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
    viewport: { once: true, amount, margin: mobile ? "0px 0px 15% 0px" : undefined },
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
