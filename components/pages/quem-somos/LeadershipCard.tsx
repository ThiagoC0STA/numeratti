"use client";

import Image from "next/image";
import { COLORS, QUEM_SOMOS } from "@/lib/constants";

export default function LeadershipCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_12px_40px_-24px_rgba(0,0,0,0.08)] ring-1 ring-stone-100/80">
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#ff6600]/[0.09] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200/80 to-transparent"
        aria-hidden
      />

      <div className="relative p-6 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">Liderança</p>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-stone-900 sm:text-xl">Consultoria Numeratti</h3>
          </div>
          <span className="rounded-full border border-[#ff6600]/25 bg-[#ff6600]/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#ff6600]">
            Partner RD Station
          </span>
        </div>

        <div className="mt-5 grid gap-6 sm:grid-cols-[minmax(0,13.75rem)_1fr] sm:items-start sm:gap-8">
          <div className="mx-auto w-full max-w-[220px] sm:mx-0 sm:max-w-none">
            <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-left">
              Certificação
            </p>
            <div className="relative aspect-[2.2/1] w-full overflow-hidden rounded-md border border-stone-200 bg-stone-50 shadow-inner">
              <Image
                src={QUEM_SOMOS.founder.image}
                alt={`Selo RD Station Partners — ${QUEM_SOMOS.founder.name}`}
                fill
                className="object-contain object-center p-2"
                sizes="(max-width: 640px) 220px, 220px"
                unoptimized
              />
            </div>
          </div>

          <div className="min-w-0 sm:border-l sm:border-stone-100 sm:pl-8">
            <h4 className="text-lg font-bold text-stone-900 sm:text-xl">{QUEM_SOMOS.founder.name}</h4>
            <p className="mt-1 text-sm font-semibold" style={{ color: COLORS.primary }}>
              {QUEM_SOMOS.founder.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-[0.9375rem] sm:leading-[1.65]">
              {QUEM_SOMOS.founder.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
