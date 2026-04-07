import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import { DEFAULT_OG_IMAGE_URL, SITE_URL } from "@/lib/constants";
import { getAllPostsSummaries } from "@/lib/blog/wp";

export const revalidate = 60;

const blogDesc =
  "Conteúdo sobre marketing digital, performance e tendências para impulsionar seu negócio.";

export const metadata: Metadata = {
  title: "Blog",
  description: blogDesc,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/blog`,
    title: "Blog | Numeratti",
    description: blogDesc,
    images: [{ url: DEFAULT_OG_IMAGE_URL }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Numeratti",
    description: blogDesc,
    images: [DEFAULT_OG_IMAGE_URL],
  },
};

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getAllPostsSummaries>> = [];
  try {
    posts = await getAllPostsSummaries();
  } catch {
    // Sanity may be slow or blocked during build; avoid failing the export.
  }

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
