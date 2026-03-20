import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CasesContent from "@/components/pages/CasesContent";

export const metadata = {
  title: "Cases de Sucesso - Numeratti",
  description:
    "Cases reais de empresas que aceleraram seus resultados com a Numeratti.",
};

export default function CasesPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <PageHero
          eyebrow="Resultados"
          title="Cases de Sucesso"
          subtitle="Empresas que aceleraram seus resultados com a Numeratti."
          highlight="Sucesso"
          visual="cases"
        />
        <CasesContent />
      </main>
      <Footer />
    </PageShell>
  );
}
