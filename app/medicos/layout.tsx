import type { Metadata } from "next";
import { Sora, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { pageMetadata } from "@/lib/seo";

// Display: Sora — geométrica e precisa, com ar de health-tech. Diferencia a LP
// do restante do site (Geist / Bricolage) e substitui a serifada antiga.
const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Mono: usada só em rótulos curtos (estilo leitura de instrumento médico).
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Tráfego Pago para Médicos: Mais Pacientes",
    description:
      "Gestão de campanhas de tráfego pago (Google e Meta Ads) para médicos: mais pacientes particulares na sua agenda, dentro do CFM. Diagnóstico gratuito, sem fidelidade.",
    path: "/medicos",
  }),
  keywords: [
    "tráfego pago para médicos",
    "gestão de campanhas para médicos",
    "google ads para médicos",
    "marketing médico",
    "captação de pacientes",
    "publicidade médica CFM",
    "anúncios para consultório",
    "pacientes particulares",
  ],
};

export default function MedicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable} lp-medicos antialiased`}>
      {children}
    </div>
  );
}
