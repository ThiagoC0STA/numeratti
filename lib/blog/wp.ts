import type { BlogPostDetail, BlogPostSummary } from "@/lib/blog/types";
import { client } from "@/lib/sanity/client";
import {
  ALL_POSTS_QUERY,
  ALL_SLUGS_QUERY,
  POST_BY_SLUG_QUERY,
} from "@/lib/sanity/queries";

export { formatPostDate } from "@/lib/blog/dates";

export async function getAllPostsSummaries(): Promise<BlogPostSummary[]> {
  return client.fetch<BlogPostSummary[]>(ALL_POSTS_QUERY, {}, { next: { revalidate: 60 } });
}

export async function getAllPostSlugs(): Promise<string[]> {
  return client.fetch<string[]>(ALL_SLUGS_QUERY, {}, { next: { revalidate: 60 } });
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostDetail | null> {
  const decoded = decodeURIComponent(slug);
  return client.fetch<BlogPostDetail | null>(
    POST_BY_SLUG_QUERY,
    { slug: decoded },
    { next: { revalidate: 60 } }
  );
}
