"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NewsletterSignup from "@/components/contact/NewsletterSignup";
import { COLORS, WHATSAPP_URL } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#fff7f0] via-white to-[#f4f0ff] py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ff6600]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-violet-400/20 blur-[110px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6600]/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ff6600] shadow-sm backdrop-blur-sm">
              <Sparkles size={14} />
              Newsletter
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              Assine nossa{" "}
              <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">
                newsletter
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-stone-600">
              Dicas de performance, mídia paga e growth — direto no seu e-mail, sem spam.
            </p>

            <motion.div
              className="mt-10 hidden aspect-[4/3] max-w-md overflow-hidden rounded-3xl border border-stone-200/60 bg-white/60 shadow-xl shadow-orange-500/5 backdrop-blur-md lg:block"
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-full flex-col justify-between p-8">
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-2 w-8 rounded-full bg-gradient-to-r from-[#ff6600] to-[#f27405]"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold leading-snug text-stone-800">
                  Métricas que contam histórias. Campanhas que escalam negócios.
                </p>
                <div className="flex items-center gap-3 text-sm font-medium text-stone-500">
                  <Mail size={18} className="text-[#ff6600]" />
                  Conteúdo curado pela equipe Numeratti
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="rounded-[2rem] border border-stone-200/80 bg-white/80 p-8 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.12)] backdrop-blur-md md:p-10">
            
              <NewsletterSignup variant="light" />

              <div className="relative mt-10 overflow-hidden rounded-2xl border border-stone-100 bg-gradient-to-br from-stone-50 to-white p-6">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#ff6600]/10 blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/15 text-[#25d366]">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Prefere falar agora?</p>
                    <p className="mt-1 text-sm text-stone-600">
                      Nosso time responde no WhatsApp com a mesma rapidez.
                    </p>
                    <motion.a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      Falar com um especialista
                    </motion.a>
                  </div>
                </div>
              </div>

              <Link
                href="/contato"
                className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-[#ff6600] transition hover:gap-3"
              >
                Formulário completo de contato
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
