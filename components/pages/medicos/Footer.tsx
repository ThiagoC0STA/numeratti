import Link from "next/link";
import { currentYear } from "@/lib/lp-year";
import { WHATSAPP_URL } from "@/lib/constants";
import Logo from "./ui/Logo";

const navLinks = [
  { href: "#problema", label: "O problema" },
  { href: "#metodo", label: "Como funciona" },
  { href: "#etica", label: "Ética / CFM" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-bg text-white/60 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <Logo size={44} />
              <span className="display text-orange-primary text-xl leading-none pl-2 border-l border-white/15">
                MED
              </span>
            </div>
            <p className="mt-5 text-white/55 max-w-sm leading-relaxed">
              Gestão de campanhas de tráfego pago para médicos, com performance medida por dados e
              dentro da ética da publicidade médica. Consultoria com base em Fortaleza/CE.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-white/40 text-[10px] uppercase tracking-[0.22em] font-bold mb-4">
              Navegue
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-white/40 text-[10px] uppercase tracking-[0.22em] font-bold mb-4">
              Conheça também
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Site Numeratti</Link></li>
              <li><Link href="/diagnostico" className="hover:text-white transition">Diagnóstico</Link></li>
              <li><Link href="/cases" className="hover:text-white transition">Cases</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-white/40 text-[10px] uppercase tracking-[0.22em] font-bold mb-4">
              Contato
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>
              <li>Fortaleza / Ceará · Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <span>© {currentYear()} Numeratti · Performance Digital para Médicos.</span>
          <span>Numeratti MED · Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
