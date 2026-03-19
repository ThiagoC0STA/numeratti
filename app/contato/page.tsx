import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contato - Numeratti",
  description: "Fale com um especialista da Numeratti. Estamos prontos para ajudar seu negócio.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          title="Contato"
          subtitle="Como podemos te ajudar? Deixe seu contato e mensagens que responderemos em breve."
          highlight="Contato"
        />
        <ContactSection variant="page" />
      </main>
      <Footer />
    </div>
  );
}
