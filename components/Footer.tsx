"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_URL, COLORS, FOOTER_LINKS, LOGO_DESKTOP } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="relative block h-12 w-[160px]">
              <Image
                src={LOGO_DESKTOP}
                alt="Numeratti"
                fill
                className="object-contain object-left brightness-0 invert"
                unoptimized
                sizes="160px"
              />
            </Link>
            <p className="mt-6 max-w-md text-gray-400">
              SEU NEGÓCIO COM RESULTADOS REAIS E MENSURÁVEIS ATRAVÉS DOS NÚMEROS.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: COLORS.primary, color: "white" }}
            >
              <MessageCircle size={20} />
              Falar com um especialista
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Links
            </h4>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.filter((l) => !("external" in l && l.external)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.filter((l) => "external" in l && l.external).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contato
            </h4>
            <div className="mt-4 flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gray-500" />
              <div className="text-sm text-gray-300">
                <p>Rua Dr. Hermes Lima, 45</p>
                <p>Edson Queiroz, Fortaleza/CE</p>
                <p>60811-570</p>
                <p className="mt-2 text-gray-500">Atendemos em todo o Brasil</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              NUMERATTI SERVICOS DE MARKETING LTDA
              <br />
              CNPJ: 40.099.330/0001-09
            </p>
          </motion.div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Numeratti - Todos os direitos reservados
          </p>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-xs">Google Partner</span>
            <span className="text-xs">RD Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
