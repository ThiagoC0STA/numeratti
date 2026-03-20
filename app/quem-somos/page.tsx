import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import QuemSomosContent from "@/components/pages/QuemSomosContent";

export const metadata = {
  title: "Quem Somos - Numeratti",
  description:
    "Empresa de Consultoria de Performance orientada a resultados. Dados, análises e números para o sucesso do seu negócio.",
};

export default function QuemSomosPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <PageHero
          eyebrow="Institucional"
          title="Quem Somos"
          subtitle="Somos uma empresa de consultoria de performance especializada. Combinamos técnica, estratégias personalizadas e uma abordagem baseada em dados para o sucesso do seu negócio."
          visual="quem-somos"
        />
        <QuemSomosContent />
      </main>
      <Footer />
    </PageShell>
  );
}
