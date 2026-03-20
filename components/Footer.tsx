"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Headphones,
} from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_SUPPORT_URL,
  COLORS,
  FOOTER_LINKS,
  LOGO_DESKTOP,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
} as const;

export default function Footer() {
  const simplified = useSimplifiedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-stone-200/80 bg-gradient-to-b from-stone-50 to-white text-stone-800">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-4">
          <motion.div
            initial={simplified ? false : { opacity: 0, y: 16 }}
            whileInView={simplified ? undefined : { opacity: 1, y: 0 }}
            animate={simplified ? { opacity: 1, y: 0 } : undefined}
            viewport={simplified ? undefined : { once: true }}
            transition={simplified ? { duration: 0 } : undefined}
            className="lg:col-span-2"
          >
            <Link href="/" className="relative block h-12 w-[160px]">
              <Image
                src={LOGO_DESKTOP}
                alt="Numeratti"
                fill
                className="object-contain object-left"
                unoptimized
                sizes="160px"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm font-medium uppercase tracking-wider text-stone-500">
              Seu negócio com resultados reais e mensuráveis através dos números.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={simplified ? undefined : { scale: 1.08, y: -2 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-500 shadow-sm transition-colors hover:border-[#ff6600]/40 hover:text-[#ff6600]"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={simplified ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20"
                style={{ backgroundColor: COLORS.primary }}
              >
                <MessageCircle size={18} />
                Falar com um especialista
              </motion.a>
              <motion.a
                href={WHATSAPP_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={simplified ? undefined : { scale: 1.02 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-[#ff6600]/30"
              >
                <Headphones size={18} className="text-[#ff6600]" />
                Central de suporte
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={simplified ? false : { opacity: 0, y: 16 }}
            whileInView={simplified ? undefined : { opacity: 1, y: 0 }}
            animate={simplified ? { opacity: 1, y: 0 } : undefined}
            viewport={simplified ? undefined : { once: true }}
            transition={simplified ? { duration: 0 } : { delay: 0.05 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Links</h4>
            <ul className="mt-6 space-y-3">
              {FOOTER_LINKS.filter((l) => !("external" in l && l.external)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm font-medium text-stone-600 transition-colors hover:text-[#ff6600]"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.filter((l) => "external" in l && l.external).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-[#ff6600]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={simplified ? false : { opacity: 0, y: 16 }}
            whileInView={simplified ? undefined : { opacity: 1, y: 0 }}
            animate={simplified ? { opacity: 1, y: 0 } : undefined}
            viewport={simplified ? undefined : { once: true }}
            transition={simplified ? { duration: 0 } : { delay: 0.1 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Contato</h4>
            <div className="mt-6 flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ff6600]/10">
                <MapPin size={16} style={{ color: COLORS.primary }} />
              </div>
              <div className="text-sm text-stone-600">
                <p className="font-medium text-stone-800">Rua Dr. Hermes Lima, 45</p>
                <p>Edson Queiroz, Fortaleza/CE</p>
                <p>60811-570</p>
                <p className="mt-2 text-stone-500">Atendemos em todo o Brasil</p>
              </div>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-stone-400">
              NUMERATTI SERVICOS DE MARKETING LTDA
              <br />
              CNPJ: 40.099.330/0001-09
            </p>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-stone-200/80 pt-10 sm:flex-row">
          <p className="text-center text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Numeratti — Todos os direitos reservados
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold text-stone-600 shadow-sm">
              Google Partner
            </span>
            <span className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold text-stone-600 shadow-sm">
              RD Partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
