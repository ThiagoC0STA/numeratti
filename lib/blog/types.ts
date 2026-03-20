export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  excerptPlain: string;
  imageUrl: string | null;
  categoryNames: string[];
};

export type BlogPostDetail = BlogPostSummary & {
  contentHtml: string;
};

export type WPRawTitleExcerpt = {
  rendered: string;
  protected?: boolean;
};

export type WPRawPost = {
  slug: string;
  date: string;
  title: WPRawTitleExcerpt;
  excerpt: WPRawTitleExcerpt;
  content: WPRawTitleExcerpt;
  categories: number[];
  /** Canonical front-end URL (used when REST body has no images). */
  link?: string;
};
