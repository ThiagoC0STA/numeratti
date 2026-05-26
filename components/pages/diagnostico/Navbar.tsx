"use client";
import { useEffect, useState } from "react";
import GlowButton from "./ui/GlowButton";
import Logo from "./ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.7)" : "rgba(10,10,10,0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={36} />
          <div className="hidden sm:block leading-tight pl-2 border-l border-white/15">
            <div className="text-[10px] uppercase tracking-[0.22em] text-orange-primary font-semibold">
              Diagnóstico de Escala
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
          <a href="#problema" className="hover:text-white transition">
            Problema
          </a>
          <a href="#solucao" className="hover:text-white transition">
            Solução
          </a>
          <a href="#metodologia" className="hover:text-white transition">
            Metodologia
          </a>
          <a href="#entregavel" className="hover:text-white transition">
            Entregável
          </a>
          <a href="#sobre" className="hover:text-white transition">
            Sobre
          </a>
        </nav>

        <GlowButton size="md">Solicitar Diagnóstico</GlowButton>
      </div>
    </header>
  );
}
