"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS, WHATSAPP_URL, COLORS, LOGO_DESKTOP, LOGO_MOBILE } from "@/lib/constants";

const MENU_EXIT_MS = 320;

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setMenuMounted(true);
      const raf = requestAnimationFrame(() => setMenuOpen(true));
      return () => cancelAnimationFrame(raf);
    }
    setMenuOpen(false);
    const t = setTimeout(() => setMenuMounted(false), MENU_EXIT_MS);
    return () => clearTimeout(t);
  }, [isMobileMenuOpen]);

  const isDark = mounted && resolvedTheme === "dark";
  const invertLogo = isDark;

  const headerBg =
    "bg-white border-stone-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:bg-neutral-950 dark:border-white/10 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]";

  const linkColor =
    "text-stone-700 hover:text-stone-900 dark:text-stone-200 dark:hover:text-white";

  const iconColor = "text-stone-900 dark:text-white";

  const toggleBg =
    "border-stone-200 bg-stone-100 text-stone-800 hover:bg-stone-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 animate-header-drop motion-reduce:animate-none border-b transition-all duration-500 ${headerBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="relative z-10 flex items-center">
          <span className="hidden md:block relative h-10 w-[140px]">
            <Image
              src={LOGO_DESKTOP}
              alt="Numeratti - Marketing Digital"
              fill
              className="object-contain object-left transition-all duration-300"
              style={invertLogo ? { filter: "brightness(0) invert(1)" } : undefined}
              unoptimized
              sizes="140px"
              priority
            />
          </span>
          <span className="block md:hidden relative h-8 w-[100px]">
            <Image
              src={LOGO_MOBILE}
              alt="Numeratti"
              fill
              className="object-contain object-left"
              style={mounted && !isDark ? { filter: "brightness(0)" } : undefined}
              unoptimized
              sizes="100px"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${linkColor}`}
            >
              <span className="group relative">
                {link.label}
                <span
                  aria-hidden
                  style={{ backgroundColor: COLORS.primary }}
                  className="absolute -bottom-1 left-0 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full motion-reduce:transition-none"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[background-color,transform,border-color] duration-150 active:scale-[0.94] motion-reduce:active:scale-100 ${toggleBg}`}
          >
            {mounted ? (
              isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />
            ) : (
              <span className="h-[18px] w-[18px]" aria-hidden />
            )}
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,102,0,0.2)] transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,102,0,0.4)] active:scale-[0.98] motion-reduce:transform-none"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span className="relative z-10">Fale com um especialista</span>
            <div className="absolute inset-0 z-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/30" />
            </div>
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-10 flex p-2 transition-transform duration-150 active:scale-95 motion-reduce:transform-none lg:hidden"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className={iconColor} />
          ) : (
            <Menu size={24} className={iconColor} />
          )}
        </button>
      </nav>

      {menuMounted && (
        <>
          <div
            className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none lg:hidden ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside
            className={`fixed right-0 top-0 bottom-0 z-50 flex w-80 max-w-[85vw] flex-col bg-white shadow-[0_0_60px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none lg:hidden dark:bg-neutral-950 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4 dark:border-stone-800">
              <span className="relative h-7 w-[90px]">
                <Image
                  src={LOGO_MOBILE}
                  alt="Numeratti"
                  fill
                  className="object-contain object-left"
                  style={mounted && !isDark ? { filter: "brightness(0)" } : undefined}
                  unoptimized
                  sizes="90px"
                />
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={
                    menuOpen
                      ? { animation: `heroSlideUp 360ms ${60 + i * 40}ms cubic-bezier(0.22,1,0.36,1) backwards` }
                      : undefined
                  }
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-stone-800 transition-colors hover:bg-stone-50 hover:text-[#ff6600] motion-reduce:animate-none dark:text-stone-100 dark:hover:bg-stone-900"
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-stone-200 transition-all duration-200 group-hover:w-6 group-hover:bg-[#ff6600] dark:bg-stone-700"
                  />
                </Link>
              ))}
            </nav>

            <div className="border-t border-stone-100 px-6 py-5 dark:border-stone-800">
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                {mounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
                {mounted && isDark ? "Tema claro" : "Tema escuro"}
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-full px-5 py-3 text-center text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(255,102,0,0.6)] transition-transform duration-150 active:scale-[0.98] motion-reduce:transform-none"
                style={{ backgroundColor: COLORS.primary }}
              >
                Fale com um especialista
              </a>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
