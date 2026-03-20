import type { BlogPostDetail, BlogPostSummary, WPRawPost } from "@/lib/blog/types";
import { decodeWpTitle, pickBestImageFromWpHtml, stripHtml } from "@/lib/blog/html-utils";
import { fetchCoverImageFromPublicPage } from "@/lib/blog/cover-from-page";

export { formatPostDate } from "@/lib/blog/dates";

const WP_API = "https://numeratti.com.br/wp-json/wp/v2";

const FETCH_TAGS = { next: { revalidate: 3600 } } as const;

/** Abort slow requests so CI/build and edge do not hang on ETIMEDOUT. */
const WP_FETCH_TIMEOUT_MS = 12_000;
const WP_FETCH_MAX_ATTEMPTS = 2;

async function fetchJson<T>(url: string): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt < WP_FETCH_MAX_ATTEMPTS; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), WP_FETCH_TIMEOUT_MS);
    try {
      const res = await fetch(url, { ...FETCH_TAGS, signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) {
        throw new Error(`WP API ${res.status}: ${url}`);
      }
      return (await res.json()) as T;
    } catch (e) {
      clearTimeout(timer);
      lastError = e;
      if (attempt === WP_FETCH_MAX_ATTEMPTS - 1) {
        throw lastError;
      }
    }
  }
  throw lastError;
}

export async function getCategoryIdToName(): Promise<Record<number, string>> {
  const cats = await fetchJson<Array<{ id: number; name: string }>>(
    `${WP_API}/categories?per_page=100&_fields=id,name`
  );
  return Object.fromEntries(cats.map((c) => [c.id, c.name]));
}

async function buildSummaryFromRawPost(
  p: WPRawPost,
  catMap: Record<number, string>
): Promise<BlogPostSummary> {
  const content = p.content.rendered;
  const excerpt = p.excerpt.rendered;
  let imageUrl =
    pickBestImageFromWpHtml(content) ?? pickBestImageFromWpHtml(excerpt);

  if (!imageUrl && p.link) {
    imageUrl = await fetchCoverImageFromPublicPage(p.link);
  }

  return {
    slug: p.slug,
    title: decodeWpTitle(p.title.rendered),
    date: p.date,
    excerptPlain: stripHtml(excerpt).slice(0, 280),
    imageUrl,
    categoryNames: p.categories.map((id) => catMap[id] ?? "").filter(Boolean),
  };
}

const POST_FIELDS = "slug,title,date,excerpt,categories,content,link";

/** All posts with content + cover resolved from REST or public URL. Sorted newest first. */
export async function getAllPostsSummaries(): Promise<BlogPostSummary[]> {
  const [posts, catMap] = await Promise.all([
    fetchJson<WPRawPost[]>(`${WP_API}/posts?per_page=100&_fields=${POST_FIELDS}`),
    getCategoryIdToName(),
  ]);
  const mapped = await Promise.all(posts.map((p) => buildSummaryFromRawPost(p, catMap)));
  mapped.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return mapped;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await fetchJson<Array<{ slug: string }>>(
    `${WP_API}/posts?per_page=100&_fields=slug`
  );
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  const decoded = decodeURIComponent(slug);
  const arr = await fetchJson<WPRawPost[]>(
    `${WP_API}/posts?slug=${encodeURIComponent(decoded)}&_fields=${POST_FIELDS}`
  );
  if (!arr.length) return null;
  const p = arr[0];
  const catMap = await getCategoryIdToName();
  const base = await buildSummaryFromRawPost(p, catMap);
  return {
    ...base,
    contentHtml: p.content.rendered,
  };
}
