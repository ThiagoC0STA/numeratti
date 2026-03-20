"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { COLORS, PRIVACY_URL } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

interface NewsletterSignupProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function NewsletterSignup({ variant = "dark", className = "" }: NewsletterSignupProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isDark = variant === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const consent = fd.get("newsletter_privacy") === "on";
    const payload = {
      hp: String(fd.get("hp") ?? ""),
      email: String(fd.get("email") ?? "").trim(),
      consent,
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setErrorMsg(data.error ?? "Não foi possível cadastrar.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Erro de conexão.");
      setStatus("error");
    }
  }

  const inputClass = isDark
    ? "w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none backdrop-blur-sm transition-all focus:border-[#ff6600]/50 focus:ring-2 focus:ring-[#ff6600]/20 focus:bg-white/8"
    : "w-full rounded-full border border-stone-200 bg-white py-3.5 pl-12 pr-4 text-stone-900 placeholder:text-stone-400 outline-none shadow-sm transition-all focus:border-[#ff6600]/50 focus:ring-2 focus:ring-[#ff6600]/15";

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center justify-center gap-3 rounded-2xl border px-6 py-5 ${
              isDark
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                : "border-emerald-200 bg-emerald-50 text-emerald-800"
            }`}
          >
            <CheckCircle2 size={22} />
            <span className="font-semibold">Inscrição confirmada.</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="text" name="hp" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden />
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Mail
                  size={20}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? "text-zinc-500" : "text-stone-400"}`}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Seu melhor e-mail"
                  className={inputClass}
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white shadow-lg transition disabled:opacity-70"
                style={{ backgroundColor: COLORS.primary }}
              >
                {status === "submitting" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                Cadastrar
              </motion.button>
            </div>
            <label
              className={`flex cursor-pointer items-start gap-3 text-xs ${
                isDark ? "text-zinc-500" : "text-stone-500"
              }`}
            >
              <input
                name="newsletter_privacy"
                type="checkbox"
                required
                className="mt-0.5 h-3.5 w-3.5 rounded border-stone-300 text-[#ff6600] focus:ring-[#ff6600]/30"
              />
              <span>
                Concordo com a{" "}
                <a
                  href={PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#ff6600] underline-offset-2 hover:underline"
                >
                  política de privacidade
                </a>
                .
              </span>
            </label>
            {status === "error" && errorMsg && (
              <p className="text-sm font-medium text-red-500" role="alert">
                {errorMsg}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
