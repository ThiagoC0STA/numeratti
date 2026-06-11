import { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

/** CTA primário da vertical médica: diagnóstico de captação gratuito. */
export const WHATSAPP_DIAGNOSTICO = `${WHATSAPP_URL}&text=${encodeURIComponent(
  "Olá! Sou médico(a) e quero o Diagnóstico de Captação de Pacientes gratuito da Numeratti.",
)}`;

/** CTA alternativo: verificar vaga por especialidade (exclusividade). */
export const WHATSAPP_DISPONIBILIDADE = `${WHATSAPP_URL}&text=${encodeURIComponent(
  "Olá! Quero verificar se há vaga para minha especialidade na Numeratti MED.",
)}`;

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: "md" | "lg";
};

export default function GlowButton({
  children,
  href = WHATSAPP_DIAGNOSTICO,
  className = "",
  size = "md",
}: Props) {
  const sizing = size === "lg" ? "px-10 py-5 text-base" : "px-8 py-4 text-sm";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`glow-btn ${sizing} ${className}`}
    >
      <span className="relative z-10 font-semibold tracking-wide">{children}</span>
    </a>
  );
}
