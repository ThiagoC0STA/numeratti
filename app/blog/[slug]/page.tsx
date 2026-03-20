import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import BlogPostBody from "@/components/blog/BlogPostBody";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { getAllPostSlugs, getAllPostsSummaries, getPostBySlug } from "@/lib/blog/wp";
import { formatPostDate } from "@/lib/blog/dates";
import { COLORS } from "@/lib/constants";
import { ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

/**
 * By default we do not prerender every post at build time: WordPress is often
 * unreachable or slow in CI (ETIMEDOUT). Pages are still cached after the first
 * request (revalidate). Set BLOG_STATIC_PARAMS=1 to opt into build-time slugs.
 */
export async function generateStaticParams() {
  if (process.env.BLOG_STATIC_PARAMS !== "1") {
    return [];
  }
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return { title: "Artigo | Numeratti" };
    }
    return {
      title: `${post.title} | Blog Numeratti`,
      description: post.excerptPlain.slice(0, 160),
      openGraph: post.imageUrl
        ? { images: [{ url: post.imageUrl }] }
        : undefined,
    };
  } catch {
    return { title: "Artigo | Numeratti" };
  }
}

function relatedFor(
  currentSlug: string,
  categoryNames: string[],
  all: Awaited<ReturnType<typeof getAllPostsSummaries>>
) {
  const scored = all
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: p.categoryNames.filter((c) => categoryNames.includes(c)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime());

  const picked: typeof all = [];
  const seen = new Set<string>();
  for (const { post } of scored) {
    if (picked.length >= 3) break;
    if (!seen.has(post.slug)) {
      seen.add(post.slug);
      picked.push(post);
    }
  }
  if (picked.length < 3) {
    for (const post of all) {
      if (post.slug === currentSlug || seen.has(post.slug)) continue;
      picked.push(post);
      seen.add(post.slug);
      if (picked.length >= 3) break;
    }
  }
  return picked.slice(0, 3);
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [allSummaries] = await Promise.all([getAllPostsSummaries()]);
  const related = relatedFor(post.slug, post.categoryNames, allSummaries);
  const dateLabel = formatPostDate(post.date);

  return (
    <PageShell>
      <Header />
      <main>
        <article>
          <header className="border-b border-stone-100 bg-gradient-to-b from-[#faf8f5] to-white">
            <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-28 lg:px-10 lg:pt-32">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-[#ff6600]"
              >
                <ArrowLeft size={16} />
                Voltar ao blog
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={16} style={{ color: COLORS.primary }} />
                  {dateLabel}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              {post.categoryNames.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.categoryNames.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full border border-[#ff6600]/20 bg-[#ff6600]/8 px-3 py-1 text-xs font-semibold text-[#ff6600]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {post.imageUrl ? (
            <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
              <figure className="relative -mt-2 mb-10 aspect-[21/9] overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-100 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)] md:mb-12">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  priority
                  unoptimized
                />
              </figure>
            </div>
          ) : null}

          <BlogPostBody html={post.contentHtml} />

          <section className="relative overflow-hidden border-t border-stone-200/80 bg-gradient-to-b from-stone-50/90 via-white to-[#fff7f0] py-16 lg:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/15 to-transparent" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-2xl font-bold text-stone-900 md:text-3xl">Continue lendo</h2>
              <p className="mx-auto mt-2 max-w-xl text-center text-stone-600">
                Outros artigos que podem interessar você
              </p>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {related.map((p, i) => (
                  <BlogPostCard
                    key={p.slug}
                    post={p}
                    dateLabel={formatPostDate(p.date)}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </PageShell>
  );
}
