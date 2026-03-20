import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import SolucoesContent from "@/components/pages/SolucoesContent";

export const metadata = {
  title: "Soluções - Numeratti",
  description:
    "O seu negócio com resultados reais e mensuráveis. Consultoria, estratégias e operação com alta inteligência de mercado.",
};

export default function SolucoesPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <PageHero
          eyebrow="Performance"
          title="Soluções"
          subtitle="O seu negócio com resultados reais e mensuráveis, a partir de consultoria, estratégias e operação de um time com alta inteligência de mercado."
          highlight="Soluções"
          visual="solucoes"
        />
        <SolucoesContent />
      </main>
      <Footer />
    </PageShell>
  );
}
