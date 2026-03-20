/** Strip HTML tags for excerpts and meta descriptions. */
export function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

/** Decode common entities in titles from WordPress. */
export function decodeWpTitle(html: string): string {
  return stripHtml(html);
}

function absolutizeUploadUrl(url: string): string {
  const u = url.trim();
  if (u.startsWith("https://") || u.startsWith("http://")) return u;
  if (u.startsWith("//")) return `https:${u}`;
  if (u.startsWith("/")) return `https://numeratti.com.br${u}`;
  return u;
}

/** Collect image candidates from WordPress HTML (REST body, blocks, lazy attrs). */
export function pickBestImageFromWpHtml(html: string): string | null {
  if (!html) return null;
  const candidates: string[] = [];

  const patterns = [
    /<img[^>]+src=["']([^"']+)["']/gi,
    /data-src=["']([^"']+)["']/gi,
    /data-lazy-src=["']([^"']+)["']/gi,
    /data-original=["']([^"']+)["']/gi,
  ];
  for (const re of patterns) {
    let m: RegExpExecArray | null;
    const r = new RegExp(re.source, re.flags);
    while ((m = r.exec(html)) !== null) {
      const raw = m[1]?.split(/\s/)[0];
      if (raw) candidates.push(absolutizeUploadUrl(raw));
    }
  }

  const srcset = html.match(/srcset=["']([^"']+)["']/i);
  if (srcset?.[1]) {
    const first = srcset[1].split(",")[0]?.trim().split(/\s/)[0];
    if (first) candidates.push(absolutizeUploadUrl(first));
  }

  for (const u of candidates) {
    if (/\.(jpg|jpeg|png|webp|gif)(\?|#|$)/i.test(u)) return u;
  }
  return candidates[0] ?? null;
}

export function firstImageUrlFromHtml(html: string): string | null {
  return pickBestImageFromWpHtml(html);
}
