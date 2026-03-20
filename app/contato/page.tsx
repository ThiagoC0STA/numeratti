import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { WHATSAPP_URL, COLORS } from "@/lib/constants";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contato - Numeratti",
  description: "Fale com um especialista da Numeratti. Estamos prontos para ajudar seu negócio.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f5] via-white to-[#fff5eb]">
      <Header />
      <main>
        <PageHero
          title="Contato"
          subtitle="Como podemos te ajudar? Preencha o formulário ou fale com a gente pelo WhatsApp."
          highlight="Contato"
        />
        <section className="relative pb-24 pt-8 lg:pb-32 lg:pt-4">
          <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ff6600]/10 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#ff6600]">
                  Fale conosco
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                  Resultados mensuráveis começam com uma boa conversa
                </h2>
                <p className="mt-4 text-lg text-stone-600">
                  Conte em que fase está o seu marketing digital. Avaliamos fit, próximos passos e como a Numeratti pode
                  acelerar seus números.
                </p>
                <ul className="mt-8 space-y-4 text-stone-700">
                  {[
                    "Diagnóstico rápido do que já roda em mídia paga",
                    "Sugestões práticas antes mesmo do contrato",
                    "Transparência total em métricas e relatórios",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: COLORS.primary }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-semibold text-stone-800 shadow-sm transition hover:border-[#ff6600]/30 hover:shadow-md"
                >
                  <MessageCircle className="text-[#25d366]" size={22} />
                  Abrir WhatsApp
                </Link>
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
