import { currentYear } from "@/lib/lp-year";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-ink-bg text-white/60 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center">
              <Logo size={44} />
            </div>
            <p className="mt-5 text-white/55 max-w-sm leading-relaxed">
              Estratégia, Dados e Resultados Sustentáveis. Consultoria de performance digital com base em Fortaleza/CE.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-white/40 text-[10px] uppercase tracking-[0.22em] font-bold mb-4">
              Navegue
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#problema" className="hover:text-white transition">Problema</a></li>
              <li><a href="#solucao" className="hover:text-white transition">Solução</a></li>
              <li><a href="#metodologia" className="hover:text-white transition">Metodologia</a></li>
              <li><a href="#entregavel" className="hover:text-white transition">Entregável</a></li>
              <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-white/40 text-[10px] uppercase tracking-[0.22em] font-bold mb-4">
              Contato
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=558581486404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp: (85) 8148-6404
                </a>
              </li>
              <li>Fortaleza / Ceará — Brasil</li>
              <li>CNPJ: 40.099.330/0001-09</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <span>© {currentYear()} Numeratti — Inteligência Digital para Decisões de Mídia.</span>
          <span>Diagnóstico de Escala Digital · Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
