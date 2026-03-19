"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL, COLORS, LOGO_DESKTOP, LOGO_MOBILE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isOnDarkBg = pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="relative z-10 flex items-center">
          <span className="hidden md:block relative h-10 w-[140px]">
            <Image
              src={LOGO_DESKTOP}
              alt="Numeratti - Marketing Digital"
              fill
              className="object-contain object-left transition-all duration-300"
              style={isOnDarkBg ? { filter: "brightness(0) invert(1)" } : undefined}
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
              style={isOnDarkBg ? { filter: "brightness(0) invert(1)" } : undefined}
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
              className={`relative text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span className="relative">
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px"
                  style={{ backgroundColor: COLORS.primary }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all"
            style={{ backgroundColor: COLORS.primary }}
          >
            Fale com um especialista
          </motion.a>
        </div>

        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-10 flex p-2 lg:hidden"
          whileTap={{ scale: 0.95 }}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-black" : "text-white"} />
          )}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-40 w-80 max-w-[85vw] bg-white p-8 shadow-2xl lg:hidden"
          >
            <div className="mt-20 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-800 transition-colors hover:text-[#ff6600]"
                >
                  {link.label}
                </Link>
              ))}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 block rounded-full px-5 py-3 text-center font-semibold text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                Fale com um especialista
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
