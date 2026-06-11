"use client";
import { useEffect, useState } from "react";
import GlowButton from "./ui/GlowButton";
import Logo from "./ui/Logo";

const links = [
  { href: "#problema", label: "O problema" },
  { href: "#metodo", label: "Como funciona" },
  { href: "#etica", label: "Ética / CFM" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "Dúvidas" },
];

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
        background: scrolled ? "rgba(10,10,10,0.85)" : "rgba(10,10,10,0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Numeratti MED">
          <Logo size={36} />
          <span className="display text-orange-primary text-xl leading-none pl-2 border-l border-white/15 tracking-tight">
            MED
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </a>
          ))}
        </nav>

        <GlowButton size="md">Diagnóstico gratuito</GlowButton>
      </div>
    </header>
  );
}
