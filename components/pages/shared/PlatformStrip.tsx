"use client";

import type { ReactNode } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PlatformLogosGrid from "@/components/services/PlatformLogosGrid";

type PlatformStripProps = {
  title: ReactNode;
  subtitle?: string;
  delay?: number;
};

export default function PlatformStrip({ title, subtitle, delay = 0 }: PlatformStripProps) {
  return (
    <div className="relative">
      <ScrollReveal delay={delay}>
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl lg:text-4xl">
            {title}
          </h3>
          {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">{subtitle}</p> : null}
        </div>
      </ScrollReveal>
      <PlatformLogosGrid />
    </div>
  );
}
