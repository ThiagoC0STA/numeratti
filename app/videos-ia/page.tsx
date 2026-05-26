import Navbar from "@/components/pages/videos-ia/Navbar";
import Hero from "@/components/pages/videos-ia/Hero";
import LogosBar from "@/components/pages/videos-ia/LogosBar";
import WhatIsSection from "@/components/pages/videos-ia/WhatIsSection";
import ForWhomSection from "@/components/pages/videos-ia/ForWhomSection";
import HowItWorksSection from "@/components/pages/videos-ia/HowItWorksSection";
import ExamplesSection from "@/components/pages/videos-ia/ExamplesSection";
import ComparisonSection from "@/components/pages/videos-ia/ComparisonSection";
import PricingSection from "@/components/pages/videos-ia/PricingSection";
import FAQSection from "@/components/pages/videos-ia/FAQSection";
import FinalCTA from "@/components/pages/videos-ia/FinalCTA";
import Footer from "@/components/pages/videos-ia/Footer";
import WhatsAppButton from "@/components/pages/videos-ia/WhatsAppButton";

export default function VideosIaPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogosBar />
      <WhatIsSection />
      <ForWhomSection />
      <HowItWorksSection />
      <ExamplesSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
