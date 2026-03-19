import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import QuemSomosContent from "@/components/pages/QuemSomosContent";

export const metadata = {
  title: "Quem Somos - Numeratti",
  description:
    "Empresa de Consultoria de Performance orientada a resultados. Dados, análises e números para o sucesso do seu negócio.",
};

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          title="Quem Somos"
          subtitle="Somos uma empresa de consultoria de performance especializada. Combinamos técnica, estratégias personalizadas e uma abordagem baseada em dados para o sucesso do seu negócio."
        />
        <QuemSomosContent />
      </main>
      <Footer />
    </div>
  );
}
