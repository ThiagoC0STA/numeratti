import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { WHATSAPP_URL, COLORS } from "@/lib/constants";

export const metadata = {
  title: "Trabalhe Conosco - Numeratti",
  description: "Faça parte do time Numeratti. Venha crescer conosco.",
};

export default function TrabalheConoscoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          title="Trabalhe Conosco"
          subtitle="Faça parte do time que gera resultados reais para mais de 200 clientes."
          highlight="Conosco"
        />
        <section className="py-24">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
            <p className="text-lg text-gray-600">
              Estamos sempre em busca de talentos que queiram fazer a diferença no
              marketing digital. Se você é apaixonado por dados, performance e
              resultados, queremos você no nosso time.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: COLORS.primary }}
            >
              Enviar currículo pelo WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
