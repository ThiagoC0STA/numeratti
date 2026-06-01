import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import ClientsSection from "@/components/ClientsSection";
import ClientesPageExtras from "@/components/pages/ClientesPageExtras";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Clientes",
  description:
    "Mais de 200 empresas escolheram a Numeratti para estruturar ou acelerar o crescimento.",
  path: "/clientes",
});

export default function ClientesPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <PageHero
          eyebrow="Marcas"
          title="Clientes"
          subtitle="Marcas que escolheram a Numeratti para estruturar ou acelerar o crescimento. Empresas com grande reconhecimento no mercado escolheram melhorar os seus resultados conosco."
          highlight="Clientes"
          visual="clientes"
        />
        <ClientesPageExtras />
        <ClientsSection variant="page" />
      </main>
      <Footer />
    </PageShell>
  );
}
