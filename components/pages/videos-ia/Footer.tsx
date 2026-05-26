import { currentYear } from "@/lib/lp-year";
import Logo from "./ui/Logo";

const navLinks = [
  { label: "O que é", href: "#o-que-e" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <Logo size={38} />
            <p className="mt-5 text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Vídeos profissionais produzidos com Inteligência Artificial. Entregamos em prazo ágil, prontos para anúncios, redes sociais e landing pages.
            </p>
          </div>

          <div className="md:col-span-3">
            <div
              className="text-[10px] uppercase tracking-[0.22em] font-bold mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Navegue
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div
              className="text-[10px] uppercase tracking-[0.22em] font-bold mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Contato
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=558581486404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  WhatsApp: (85) 8148-6404
                </a>
              </li>
              <li>Fortaleza / Ceará — Brasil</li>
              <li>CNPJ: 40.099.330/0001-09</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs border-t"
          style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
        >
          <span>© {currentYear()} Numeratti — Vídeos com IA. Todos os direitos reservados.</span>
          <span>
            <a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidade</a>
            {" · "}
            <a href="#" className="hover:text-white transition-colors duration-200">Termos de Uso</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
