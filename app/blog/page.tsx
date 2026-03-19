import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogContent from "@/components/pages/BlogContent";

export const metadata = {
  title: "Blog - Numeratti",
  description:
    "Conteúdo sobre marketing digital, performance e tendências para impulsionar seu negócio.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          title="Blog"
          subtitle="Conteúdo sobre marketing digital e performance para impulsionar seu negócio."
          highlight="Blog"
        />
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
}
