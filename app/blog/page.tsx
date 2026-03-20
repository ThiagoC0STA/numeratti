import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import { getAllPostsSummaries } from "@/lib/blog/wp";

export const revalidate = 3600;

export const metadata = {
  title: "Blog - Numeratti",
  description:
    "Conteúdo sobre marketing digital, performance e tendências para impulsionar seu negócio.",
};

export default async function BlogPage() {
  const posts = await getAllPostsSummaries();

  return (
    <PageShell>
      <Header />
      <main>
        <PageHero
          eyebrow="Conteúdo"
          title="Blog"
          subtitle="Artigos completos sobre marketing digital, mídia paga e performance — o mesmo conteúdo do site Numeratti, aqui na v2."
          highlight="Blog"
          visual="blog"
        />
        <BlogIndexClient posts={posts} />
      </main>
      <Footer />
    </PageShell>
  );
}
