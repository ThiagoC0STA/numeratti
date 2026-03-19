import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import CasesSection from "@/components/CasesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MetricsSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <CasesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
