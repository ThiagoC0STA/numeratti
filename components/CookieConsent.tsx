"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PRIVACY_URL } from "@/lib/constants";

const STORAGE_KEY = "numeratti_cookie_consent_v1";
const EXIT_MS = 320;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      const raf = requestAnimationFrame(() => setOpen(true));
      return () => cancelAnimationFrame(raf);
    }
    setOpen(false);
    const t = setTimeout(() => setMounted(false), EXIT_MS);
    return () => clearTimeout(t);
  }, [visible]);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 transition-all duration-300 ease-out motion-reduce:transition-none ${
        open ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
      }`}
      role="dialog"
      aria-label="Consentimento de cookies"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white/95 p-5 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          Usamos cookies para melhorar sua experiência. Ao clicar em &quot;Aceitar&quot;, você concorda com o uso de
          cookies conforme nossa{" "}
          <a
            href={PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#ff6600] underline-offset-2 hover:underline"
          >
            política de privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link
            href={PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-stone-200 dark:border-stone-800 px-5 py-2.5 text-sm font-semibold text-stone-700 dark:text-stone-300 transition hover:bg-stone-50 dark:bg-neutral-950"
          >
            Saiba mais
          </Link>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-[#ff6600] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.97] motion-reduce:transform-none"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
