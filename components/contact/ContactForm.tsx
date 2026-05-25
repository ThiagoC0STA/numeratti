"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { COLORS, PRIVACY_URL } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const privacyAccepted = fd.get("privacy") === "on";
    const payload = {
      hp: String(fd.get("hp") ?? ""),
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      segment: String(fd.get("segment") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      privacyAccepted,
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setErrorMsg(data.error ?? "Não foi possível enviar. Tente novamente.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white/80 dark:bg-neutral-950/80 px-4 py-3.5 text-stone-900 dark:text-stone-100 shadow-sm outline-none transition-all placeholder:text-stone-400 focus:border-[#ff6600]/50 focus:ring-2 focus:ring-[#ff6600]/15";

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-stone-200/60 dark:border-stone-800/60 bg-white/90 dark:bg-neutral-950/90 p-8 shadow-[0_24px_80px_-24px_rgba(255,102,0,0.15)] backdrop-blur-md animate-slide-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 md:p-10"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ background: `radial-gradient(circle, ${COLORS.primary}55, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
        style={{ background: `radial-gradient(circle, ${COLORS.primaryDark}66, transparent 70%)` }}
      />

      <div className="relative flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
          }}
        >
          <Sparkles className="text-white" size={22} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-3xl">
            Vamos falar sobre o seu crescimento
          </h2>
          <p className="mt-2 max-w-xl text-stone-600 dark:text-stone-400">
            Conte um pouco do seu negócio. Retornamos com próximos passos claros — em geral em até um dia útil.
          </p>
        </div>
      </div>

      {status === "success" ? (
        <div
          key="ok"
          className="relative mt-10 flex flex-col items-center rounded-2xl border border-emerald-200/80 bg-emerald-50/80 px-8 py-14 text-center animate-scale-up-fade opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
        >
          <div
            style={{ animation: "scaleUpFade 500ms 50ms cubic-bezier(0.34,1.56,0.64,1) backwards" }}
            className="motion-reduce:animate-none"
          >
            <CheckCircle2 className="text-emerald-600" size={56} strokeWidth={1.5} />
          </div>
          <p className="mt-6 text-xl font-semibold text-stone-900 dark:text-stone-100">Mensagem enviada com sucesso</p>
          <p className="mt-2 max-w-md text-stone-600 dark:text-stone-400">
            Obrigado! Nossa equipe retornará em breve.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: COLORS.primary }}
          >
            Enviar outra mensagem
          </button>
        </div>
      ) : (
        <form
          key="form"
          onSubmit={handleSubmit}
          className="relative mt-10 space-y-5"
        >
            <input type="text" name="hp" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Nome completo <span className="text-[#ff6600]">*</span>
                </label>
                <input id="name" name="name" required className={inputClass} placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  E-mail <span className="text-[#ff6600]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="voce@empresa.com.br"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Telefone
                </label>
                <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+55 …" />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Empresa
                </label>
                <input id="company" name="company" className={inputClass} placeholder="Nome da empresa" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="segment" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Segmento
                </label>
                <input id="segment" name="segment" className={inputClass} placeholder="Ex.: varejo, serviços" />
              </div>
              <div>
                <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                  Website
                </label>
                <input id="website" name="website" type="url" className={inputClass} placeholder="https://" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                Mensagem <span className="text-[#ff6600]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${inputClass} resize-y min-h-[140px]`}
                placeholder="Objetivos, canais, orçamento, prazo…"
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-neutral-950/50 p-4">
              <input name="privacy" type="checkbox" required className="mt-1 h-4 w-4 rounded border-stone-300 text-[#ff6600] focus:ring-[#ff6600]/30" />
              <span className="text-sm text-stone-600 dark:text-stone-400">
                Concordo que li e aceito os termos da{" "}
                <a
                  href={PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#ff6600] underline-offset-2 hover:underline"
                >
                  política de privacidade
                </a>
                .
              </span>
            </label>

            {status === "error" && errorMsg && (
              <p
                className="text-sm font-medium text-red-600 animate-fade-in opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
                role="alert"
              >
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-white shadow-[0_12px_40px_-8px_rgba(255,102,0,0.45)] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 disabled:active:scale-100 motion-reduce:transform-none sm:w-auto sm:min-w-[200px] sm:px-10"
              style={{ backgroundColor: COLORS.primary }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="animate-spin" size={22} />
                  Enviando…
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar mensagem
                </>
              )}
            </button>
          </form>
        )}
    </div>
  );
}
