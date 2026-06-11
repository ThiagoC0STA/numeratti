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

export default function MedicosPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarketStatsBar />
      <ProblemSection />
      <MethodSection />
      <ComplianceSection />
      <ResultsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
