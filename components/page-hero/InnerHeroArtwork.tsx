"use client";

export default function InnerHeroArtwork() {
  return (
    <div className="relative mx-auto aspect-[4/3] max-h-[min(380px,42vh)] w-full max-w-lg lg:mx-0 lg:max-w-none" aria-hidden>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-stone-200/40"
        viewBox="0 0 400 320"
        fill="none"
      >
        <circle cx="320" cy="80" r="120" stroke="currentColor" strokeWidth="1" />
        <circle cx="90" cy="240" r="90" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div
        style={{
          animation: "heroCardEntrance 850ms cubic-bezier(0.22,1,0.36,1) backwards",
        }}
        className="absolute right-0 top-[8%] h-[42%] w-[58%] rotate-[-2deg] rounded-[1.75rem] border border-stone-200/90 bg-white/90 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.08)] backdrop-blur-sm motion-reduce:animate-none"
      />
      <div
        style={{ animation: "heroFloatUp 7s ease-in-out infinite" }}
        className="absolute right-[6%] top-[12%] h-[38%] w-[52%] rounded-2xl bg-gradient-to-br from-[#ff6600]/12 via-[#f27405]/8 to-transparent motion-reduce:animate-none"
      />
      <div
        style={{ animation: "heroSlideUp 750ms 120ms cubic-bezier(0.22,1,0.36,1) backwards" }}
        className="absolute bottom-[6%] left-0 w-[72%] rounded-[1.5rem] border border-stone-200/80 bg-gradient-to-br from-white to-stone-50/90 dark:to-neutral-950/90 p-5 shadow-[0_20px_50px_-24px_rgba(255,102,0,0.12)] motion-reduce:animate-none"
      >
        <div className="flex gap-3">
          <span className="h-10 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#ff6600] to-[#f27405]" />
          <div className="space-y-2 pt-0.5">
            <div className="h-2 w-24 rounded-full bg-stone-200/90" />
            <div className="h-2 w-[85%] rounded-full bg-stone-100" />
            <div className="h-2 w-[60%] rounded-full bg-stone-100" />
          </div>
        </div>
      </div>
      <div
        style={{ animation: "heroFloatDown 8s 0.5s ease-in-out infinite" }}
        className="absolute left-[12%] top-[18%] h-14 w-14 rounded-2xl border border-[#ff6600]/25 bg-white shadow-md motion-reduce:animate-none"
      />
    </div>
  );
}
