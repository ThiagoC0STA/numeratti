"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PRIVACY_URL } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

const STORAGE_KEY = "numeratti_cookie_consent_v1";

export default function CookieConsent() {
  const simplified = useSimplifiedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={simplified ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={simplified ? undefined : { y: 120, opacity: 0 }}
          transition={
            simplified ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 28 }
          }
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
          role="dialog"
          aria-label="Consentimento de cookies"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-stone-200/80 bg-white/95 p-5 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
            <p className="text-sm leading-relaxed text-stone-600">
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
                className="rounded-full border border-stone-200 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
              >
                Saiba mais
              </Link>
              <motion.button
                type="button"
                onClick={accept}
                whileHover={simplified ? undefined : { scale: 1.03 }}
                whileTap={simplified ? undefined : { scale: 0.97 }}
                className="rounded-full bg-[#ff6600] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
              >
                Aceitar
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
