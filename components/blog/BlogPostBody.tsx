const SITE_ORIGIN = "https://numeratti.com.br";

/** Ensure embedded media loads when WP outputs root-relative URLs. */
function absolutizeMediaUrls(html: string): string {
  return html
    .replace(/src="\//g, `src="${SITE_ORIGIN}/`)
    .replace(/src='\//g, `src='${SITE_ORIGIN}/`)
    .replace(/href="\//g, `href="${SITE_ORIGIN}/`)
    .replace(/href='\//g, `href='${SITE_ORIGIN}/`);
}

export default function BlogPostBody({ html }: { html: string }) {
  const safe = absolutizeMediaUrls(html);

  return (
    <div
      className="blog-prose mx-auto w-full max-w-6xl px-6 pb-24 pt-2 lg:px-10"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}
