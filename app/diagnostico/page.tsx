import Navbar from "@/components/pages/diagnostico/Navbar";
import Hero from "@/components/pages/diagnostico/Hero";
import StatsBar from "@/components/pages/diagnostico/StatsBar";
import ProblemSection from "@/components/pages/diagnostico/ProblemSection";
import PillarSection from "@/components/pages/diagnostico/PillarSection";
import MethodologyFlowchart from "@/components/pages/diagnostico/MethodologyFlowchart";
import DeliverableSection from "@/components/pages/diagnostico/DeliverableSection";
import GestoresSection from "@/components/pages/diagnostico/GestoresSection";
import AboutSection from "@/components/pages/diagnostico/AboutSection";
import FinalCTA from "@/components/pages/diagnostico/FinalCTA";
import Footer from "@/components/pages/diagnostico/Footer";

export default function DiagnosticoPage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <PillarSection />
      <MethodologyFlowchart />
      <DeliverableSection />
      <GestoresSection />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
