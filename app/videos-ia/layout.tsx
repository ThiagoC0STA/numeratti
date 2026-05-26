import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Produção de Vídeos com Inteligência Artificial para Anúncios | Numeratti",
  description:
    "Produção de vídeos com Inteligência Artificial para anúncios, redes sociais e landing pages. Envie seu briefing e receba um vídeo profissional em poucos dias.",
  keywords: [
    "produção de vídeos com inteligência artificial",
    "vídeo com IA",
    "vídeo para anúncios",
    "criação de vídeo com IA Runway",
    "criação de vídeo com IA Sora",
    "criação de vídeo com IA VEO",
    "vídeo inteligência artificial",
    "produção de vídeo rápida",
    "Numeratti",
  ],
  alternates: { canonical: "/videos-ia" },
  openGraph: {
    title: "Produção de Vídeos com Inteligência Artificial para Anúncios | Numeratti",
    description:
      "Vídeos profissionais produzidos com IA, prontos para anúncios e redes sociais em poucos dias.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function VideosIaLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} lp-videos-ia antialiased`}>{children}</div>;
}
