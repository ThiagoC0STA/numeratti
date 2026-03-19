"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COLORS, WHATSAPP_URL, PRIVACY_URL } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Assine nossa <span style={{ color: COLORS.primary }}>Newsletter</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Cadastre o seu e-mail e receba nossa newsletter com dicas de
            marketing digital e performance.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-xl"
          >
            <form className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 text-black outline-none transition focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Send size={20} />
                Cadastrar
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-gray-500">
              Concordo que li e aceito os termos descritos na{" "}
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline"
                style={{ color: COLORS.primary }}
              >
                política de privacidade
              </a>
              .
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-medium transition-all hover:scale-105"
                style={{
                  borderColor: COLORS.primary,
                  color: COLORS.primary,
                }}
              >
                Falar com um especialista
              </a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
