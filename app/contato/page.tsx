import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactPageAside from "@/components/contact/ContactPageAside";
import ContactPageExtras from "@/components/contact/ContactPageExtras";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Contato - Numeratti",
  description: "Fale com um especialista da Numeratti. Estamos prontos para ajudar seu negócio.",
};

export default function ContatoPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <PageHero
          eyebrow="Atendimento"
          title="Contato"
          subtitle="Como podemos te ajudar? Preencha o formulário ou fale com a gente pelo WhatsApp."
          highlight="Contato"
          visual="contato"
        />
        <section className="relative pb-24 pt-8 lg:pb-32 lg:pt-4">
          <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ff6600]/10 blur-[100px]" />
          <div className="pointer-events-none absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-violet-400/10 blur-[100px]" />
          <div className="pointer-events-none absolute left-1/2 top-12 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/15 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <ContactPageAside />
              <ScrollReveal className="lg:col-span-7" delay={0.08}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </section>
        <ContactPageExtras />
      </main>
      <Footer />
    </PageShell>
  );
}
