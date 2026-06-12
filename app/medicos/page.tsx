import Navbar from "@/components/pages/medicos/Navbar";
import Hero from "@/components/pages/medicos/Hero";
import MarketStatsBar from "@/components/pages/medicos/MarketStatsBar";
import ProblemSection from "@/components/pages/medicos/ProblemSection";
import MethodSection from "@/components/pages/medicos/MethodSection";
import ComplianceSection from "@/components/pages/medicos/ComplianceSection";
import ResultsSection from "@/components/pages/medicos/ResultsSection";
import FAQSection from "@/components/pages/medicos/FAQSection";
import FinalCTA from "@/components/pages/medicos/FinalCTA";
import Footer from "@/components/pages/medicos/Footer";
import WhatsAppButton from "@/components/pages/medicos/WhatsAppButton";
import EcgDivider from "@/components/pages/medicos/ui/EcgDivider";
import { SITE_URL } from "@/lib/constants";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Numeratti MED",
  description:
    "Gestão de campanhas de tráfego pago no Google e Meta Ads para médicos, com roteiros de anúncio construídos pela equipe e mensuração por consulta agendada, dentro da Resolução CFM 2.336/2023.",
  url: `${SITE_URL}/medicos`,
  serviceType: "Gestão de tráfego pago para médicos",
  areaServed: { "@type": "Country", name: "Brasil" },
  parentOrganization: {
    "@type": "Organization",
    name: "Numeratti",
    url: SITE_URL,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Numeratti", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tráfego Pago para Médicos", item: `${SITE_URL}/medicos` },
  ],
};

export default function MedicosPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <Hero />
      <MarketStatsBar />
      <EcgDivider />
      <ProblemSection />
      <MethodSection />
      <ComplianceSection />
      <ResultsSection />
      <EcgDivider color="#2dd4bf" />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
