import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, Instrument_Serif } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const accent = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Numeratti — Diagnóstico de Escala Digital",
  description:
    "Antes de investir em tráfego pago, descubra se sua empresa está pronta para escalar. Auditoria independente dos 5 pilares do seu negócio + Score de Prontidão e Roadmap de 30 dias.",
  alternates: { canonical: "/diagnostico" },
  openGraph: {
    title: "Numeratti — Diagnóstico de Escala Digital",
    description:
      "Auditoria independente dos 5 pilares que determinam o sucesso da sua mídia paga.",
    type: "website",
  },
};

export default function DiagnosticoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${accent.variable} lp-diagnostico antialiased`}>
      {children}
    </div>
  );
}
