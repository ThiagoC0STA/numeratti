import type { PortableTextBlock } from "next-sanity";

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  excerptPlain: string;
  imageUrl: string | null;
  categoryNames: string[];
};

export type BlogPostDetail = BlogPostSummary & {
  body: PortableTextBlock[];
};
