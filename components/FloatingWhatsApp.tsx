"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)]"
      aria-label="Contato WhatsApp"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25d366] opacity-60 animate-ping motion-reduce:hidden"
      />
      <MessageCircle size={26} className="relative z-10" />
    </a>
  );
}
