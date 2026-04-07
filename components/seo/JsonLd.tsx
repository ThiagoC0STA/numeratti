import { SITE_URL } from "@/lib/constants";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Numeratti",
    url: SITE_URL,
    logo: "https://numeratti.com.br/wp-content/themes/Numeratti/assets/images/logo_principal.svg",
    description:
      "Consultoria de Performance orientada a resultados. Geramos números reais e mensuráveis para seu negócio.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Dr. Hermes Lima, 45",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      postalCode: "60811-570",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/numeratti/",
      "https://www.facebook.com/numeratti/",
      "https://www.linkedin.com/company/numeratti/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Numeratti",
    url: SITE_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  url,
  imageUrl,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string | null;
  datePublished: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Organization",
      name: "Numeratti",
    },
    publisher: {
      "@type": "Organization",
      name: "Numeratti",
      logo: {
        "@type": "ImageObject",
        url: "https://numeratti.com.br/wp-content/themes/Numeratti/assets/images/logo_principal.svg",
      },
    },
    ...(imageUrl ? { image: imageUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
