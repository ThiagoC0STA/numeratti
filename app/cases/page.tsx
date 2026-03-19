import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CasesContent from "@/components/pages/CasesContent";

export const metadata = {
  title: "Cases de Sucesso - Numeratti",
  description:
    "Cases reais de empresas que aceleraram seus resultados com a Numeratti.",
};

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          title="Cases de Sucesso"
          subtitle="Empresas que aceleraram seus resultados com a Numeratti."
          highlight="Sucesso"
        />
        <CasesContent />
      </main>
      <Footer />
    </div>
  );
}
