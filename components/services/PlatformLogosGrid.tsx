"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PLATFORM_ASSETS } from "@/lib/constants";

const ROW_SIZE = 6;
const STAGGER_MS = 60;

type PlatformAsset = (typeof PLATFORM_ASSETS)[number];

function LogosRow({ row }: { row: PlatformAsset[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6"
    >
      {row.map((platform, i) => (
        <div
          key={platform.name}
          className={`transition-all duration-500 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-none ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3.5 scale-[0.94]"
          }`}
          style={{ transitionDelay: visible ? `${i * STAGGER_MS}ms` : "0ms" }}
        >
          <figure className="flex h-[4.5rem] w-[7.25rem] shrink-0 items-center justify-center rounded-2xl border border-stone-200/90 bg-white px-3 py-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[#ff6600]/25 hover:shadow-md sm:h-[5rem] sm:w-[8.25rem] md:h-[5.5rem] md:w-[9.5rem] md:px-4 motion-reduce:transform-none motion-reduce:transition-colors">
            <Image
              src={platform.image}
              alt={platform.name}
              width={200}
              height={80}
              className="h-auto max-h-[3.25rem] w-full max-w-[7rem] object-contain sm:max-h-[3.75rem] sm:max-w-[7.75rem] md:max-h-[4.25rem] md:max-w-[8.5rem]"
              unoptimized
            />
          </figure>
        </div>
      ))}
    </div>
  );
}

export default function PlatformLogosGrid() {
  const rows: PlatformAsset[][] = [];
  for (let i = 0; i < PLATFORM_ASSETS.length; i += ROW_SIZE) {
    rows.push(PLATFORM_ASSETS.slice(i, i + ROW_SIZE) as PlatformAsset[]);
  }

  return (
    <div className="mt-12 space-y-5 md:mt-14 md:space-y-6">
      {rows.map((row, rowIndex) => (
        <LogosRow key={rowIndex} row={row} />
      ))}
    </div>
  );
}
