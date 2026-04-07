"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqSection from "@/components/pages/shared/FaqSection";
import { COLORS, PRIVACY_URL, WHATSAPP_URL, WHATSAPP_SUPPORT_URL } from "@/lib/constants";
import { CONTACT_PAGE_EXTRA, FAQ_CONTATO } from "@/lib/internal-page-content";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import { Clock, MapPin, MessageCircle, Shield } from "lucide-react";

export default function ContactPageExtras() {
  const simplified = useSimplifiedMotion();
  return (
    <>
      <section className="relative overflow-hidden border-t border-stone-100 bg-gradient-to-b from-white to-stone-50/80 py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <ScrollReveal>
              <div className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/12">
                  <MessageCircle className="text-[#25d366]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">WhatsApp comercial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{CONTACT_PAGE_EXTRA.channelsIntro}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-bold text-[#ff6600]"
                    style={{ color: COLORS.primary }}
                  >
                    Abrir conversa →
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <div className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100">
                  <Clock size={22} className="text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Horário</h3>
                  <p className="mt-2 text-sm text-stone-600">{CONTACT_PAGE_EXTRA.hours}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100">
                  <MapPin size={22} className="text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Onde estamos</h3>
                  <p className="mt-2 text-sm text-stone-600">{CONTACT_PAGE_EXTRA.location}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.08}>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-stone-200/60 bg-white/80 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <Shield size={22} className="shrink-0 text-stone-500" />
                <p className="text-sm text-stone-600">
                  Dúvidas sobre dados pessoais? Leia a{" "}
                  <Link href={PRIVACY_URL} className="font-semibold text-[#ff6600] underline-offset-2 hover:underline">
                    política de privacidade
                  </Link>
                  .
                </p>
              </div>
              <motion.a
                href={WHATSAPP_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={simplified ? undefined : { scale: 1.02 }}
                className="text-sm font-semibold text-stone-700 underline-offset-2 hover:underline"
              >
                Suporte via WhatsApp
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        eyebrow="Antes de enviar"
        title="Perguntas frequentes sobre contato"
        items={FAQ_CONTATO.map((x) => ({ q: x.q, a: x.a }))}
      />
    </>
  );
}
