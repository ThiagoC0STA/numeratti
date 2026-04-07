import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { getAllPostsSummaries } from "@/lib/blog/wp";

const MetricsSection = dynamic(() => import("@/components/MetricsSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ClientsSection = dynamic(() => import("@/components/ClientsSection"));
const CasesSection = dynamic(() => import("@/components/CasesSection"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"));

export const revalidate = 60;

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
      <OrganizationJsonLd />
      <WebSiteJsonLd />
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
