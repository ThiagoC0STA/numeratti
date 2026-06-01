import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE_URL, SITE_URL } from "@/lib/constants";

interface PageMetaInput {
  /** Short page title. The site name is appended for the tab/OG title. */
  title: string;
  description: string;
  /** Absolute path with leading slash, e.g. "/clientes". */
  path: string;
  /** Open Graph image; defaults to the site share image. */
  image?: string;
}

/**
 * Builds per-page metadata with a self-referencing canonical and a complete
 * Open Graph / Twitter card. Use on every static page so sub-pages never
 * inherit the homepage canonical (which would mark them as duplicates).
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE_URL,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = `${title} | Numeratti`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Numeratti",
      url,
      title: ogTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Numeratti,  marketing digital e performance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
