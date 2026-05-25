"use client";

import Link from "next/link";
import Image from "next/image";
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

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
} as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] to-[#050505] text-stone-300">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/40 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[#ff6600]/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="relative block h-12 w-[160px]">
              <Image
                src={LOGO_DESKTOP}
                alt="Numeratti"
                fill
                className="object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
                unoptimized
                sizes="160px"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm font-medium uppercase tracking-wider text-stone-500">
              Performance digital orientada por dados.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-stone-400 backdrop-blur-sm transition-all hover:border-[#ff6600]/40 hover:bg-white/[0.06] hover:text-[#ff6600] hover:-translate-y-0.5 hover:scale-105"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: COLORS.primary }}
              >
                <MessageCircle size={18} />
                Falar com um especialista
              </a>
              <a
                href={WHATSAPP_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-stone-200 backdrop-blur-sm transition-all duration-300 hover:border-[#ff6600]/40 hover:bg-white/[0.06] hover:scale-[1.02]"
              >
                <Headphones size={18} className="text-[#ff6600]" />
                Falar com atendimento
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Links</h4>
            <ul className="mt-6 space-y-3">
              {FOOTER_LINKS.filter((l) => !("external" in l && l.external)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm font-medium text-stone-400 transition-colors hover:text-[#ff6600]"
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
                    className="text-sm font-medium text-stone-400 transition-colors hover:text-[#ff6600]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Contato</h4>
            <div className="mt-6 flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ff6600]/15">
                <MapPin size={16} style={{ color: COLORS.primary }} />
              </div>
              <div className="text-sm text-stone-400">
                <p className="font-medium text-stone-200">R. Visc. de Maua, 3111</p>
                <p>Dionísio Torres, Fortaleza - CE</p>
                <p>60120-335</p>
                <p className="mt-2 text-stone-500">Atendemos em todo o Brasil</p>
              </div>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-stone-500">
              NUMERATTI SERVICOS DE MARKETING LTDA
              <br />
              CNPJ: 40.099.330/0001-09
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 sm:flex-row">
          <p className="text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Numeratti - Todos os direitos reservados
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-stone-300 backdrop-blur-sm">
              Google Partner
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-stone-300 backdrop-blur-sm">
              RD Partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
