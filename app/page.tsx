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
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getAllPostsSummaries } from "@/lib/blog/wp";

export const revalidate = 3600;

export default async function Home() {
  let blogPreview: Awaited<ReturnType<typeof getAllPostsSummaries>> = [];
  try {
    const all = await getAllPostsSummaries();
    blogPreview = all.slice(0, 7);
  } catch {
    blogPreview = [];
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />
        <MetricsSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <CasesSection />
        <BlogSection posts={blogPreview} />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
