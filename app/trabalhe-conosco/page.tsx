import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import TrabalheConoscoContent from "@/components/pages/TrabalheConoscoContent";

export const metadata = {
  title: "Trabalhe Conosco - Numeratti",
  description: "Faça parte do time Numeratti. Venha crescer conosco.",
};

export default function TrabalheConoscoPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <PageHero
          eyebrow="Talentos"
          title="Trabalhe Conosco"
          subtitle="Faça parte do time que gera resultados reais para mais de 200 clientes."
          highlight="Conosco"
          visual="carreiras"
        />
        <TrabalheConoscoContent />
      </main>
      <Footer />
    </PageShell>
  );
}
