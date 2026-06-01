import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Numeratti",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-numeratti.png`,
    image: `${SITE_URL}/logo-numeratti.png`,
    description:
      "Consultoria de Performance orientada a resultados. Geramos números reais e mensuráveis para seu negócio.",
    telephone: "+5585988776405",
    priceRange: "$$",
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Dr. Hermes Lima, 45",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      postalCode: "60811-570",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.7573642,
      longitude: -38.4827451,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5585988776405",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
    sameAs: SOCIAL_LINKS.map((s) => s.href),
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
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "Numeratti",
    },
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
        url: `${SITE_URL}/logo-numeratti.png`,
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

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
