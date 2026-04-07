"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";

export default function FloatingWhatsApp() {
  const simplified = useSimplifiedMotion();
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={simplified ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={
        simplified
          ? { duration: 0 }
          : { delay: 1, type: "spring", stiffness: 200, damping: 15 }
      }
      whileHover={simplified ? undefined : { scale: 1.1 }}
      whileTap={simplified ? undefined : { scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)]"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
