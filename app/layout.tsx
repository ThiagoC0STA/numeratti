import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import { DEFAULT_OG_IMAGE_URL, SITE_URL } from "@/lib/constants";
import "./globals.css";

const CookieConsent = dynamic(() => import("@/components/CookieConsent"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Numeratti | Marketing Digital - Resultados Reais e Mensuráveis",
    template: "%s | Numeratti",
  },
  description:
    "Consultoria de Performance orientada a resultados. Geramos números reais e mensuráveis para seu negócio através de campanhas em Google Ads, Facebook Ads, Instagram Ads e mais.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Numeratti",
    title: "Numeratti | Marketing Digital - Resultados Reais e Mensuráveis",
    description:
      "Consultoria de Performance orientada a resultados. Geramos números reais e mensuráveis para seu negócio.",
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Numeratti — marketing digital e performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numeratti | Marketing Digital",
    description:
      "Consultoria de Performance orientada a resultados. Geramos números reais e mensuráveis para seu negócio.",
    images: [DEFAULT_OG_IMAGE_URL],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-plus-jakarta)]">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
