"use client";
import { useEffect, useState } from "react";
import GlowButton from "./ui/GlowButton";
import Logo from "./ui/Logo";

const links = [
  { label: "O que é", href: "#o-que-e" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
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
        background: scrolled ? "rgba(4,4,6,0.88)" : "rgba(4,4,6,0)",
        backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="Numeratti">
          <Logo size={34} />
        </a>

        <nav
          className="hidden lg:flex items-center gap-8 text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <GlowButton size="sm">Quero meu vídeo →</GlowButton>
      </div>
    </header>
  );
}
