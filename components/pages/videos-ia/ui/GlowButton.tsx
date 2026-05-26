import { ReactNode } from "react";

const WA = "https://api.whatsapp.com/send?phone=558581486404&text=Ol%C3%A1!%20Tenho%20interesse%20em%20v%C3%ADdeos%20com%20IA%20da%20Numeratti.";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
};

export default function GlowButton({
  children,
  href = WA,
  className = "",
  size = "md",
  variant = "primary",
}: Props) {
  const sizing =
    size === "lg" ? "px-10 py-5 text-base" :
    size === "sm" ? "px-5 py-2.5 text-sm" :
    "px-7 py-4 text-sm";

  const base = variant === "ghost" ? "ghost-btn" : "glow-btn";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizing} ${className}`}
    >
      <span className="relative z-10 font-semibold tracking-wide">{children}</span>
    </a>
  );
}
