import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ClientsSection from "@/components/ClientsSection";

export const metadata = {
  title: "Clientes - Numeratti",
  description:
    "Mais de 200 empresas escolheram a Numeratti para estruturar ou acelerar o crescimento.",
};

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          title="Clientes"
          subtitle="Marcas que escolheram a Numeratti para estruturar ou acelerar o crescimento. Empresas com grande reconhecimento no mercado escolheram melhorar os seus resultados conosco."
          highlight="Clientes"
        />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
