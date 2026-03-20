import { cache } from "react";
import { pickBestImageFromWpHtml } from "@/lib/blog/html-utils";

const COVER_PAGE_FETCH_TIMEOUT_MS = 10_000;

function decodeHtmlEntities(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

/**
 * WordPress REST often omits images from `content.rendered` (theme builds the hero on the public URL).
 * Fetches the live post HTML and resolves og/twitter image or first uploads URL.
 */
export const fetchCoverImageFromPublicPage = cache(async (pageUrl: string): Promise<string | null> => {
  try {
    const res = await fetch(pageUrl, {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(COVER_PAGE_FETCH_TIMEOUT_MS),
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const ogMatch =
      html.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i) ??
      html.match(/property=["']og:image:url["']\s+content=["']([^"']+)["']/i);
    if (ogMatch?.[1]) return decodeHtmlEntities(ogMatch[1].trim());

    const ogRev = html.match(/content=["']([^"']+)["'][^>]*\sproperty=["']og:image["']/i);
    if (ogRev?.[1]) return decodeHtmlEntities(ogRev[1].trim());

    const tw = html.match(/name=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["']/i);
    if (tw?.[1]) return decodeHtmlEntities(tw[1].trim());

    const uploads = [
      ...html.matchAll(
        /https:\/\/numeratti\.com\.br\/wp-content\/uploads\/[^"'\s<>]+\.(?:jpg|jpeg|png|webp|gif)/gi
      ),
    ];
    if (uploads.length > 0) return uploads[0][0];

    return pickBestImageFromWpHtml(html);
  } catch {
    return null;
  }
});
