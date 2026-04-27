import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/layout/PageShell";
import CaseDetailContent from "@/components/pages/CaseDetailContent";
import { CASE_DETAILS, CASES, SITE_URL } from "@/lib/constants";
import type { CaseSlug } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = CASE_DETAILS[slug as CaseSlug];
  if (!detail) return { title: "Case | Numeratti" };
  const canonical = `${SITE_URL}/cases/${slug}`;
  return {
    title: `${detail.title} — Case de Sucesso | Numeratti`,
    description: detail.lead.slice(0, 160),
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: canonical,
      title: `${detail.title} — Case de Sucesso | Numeratti`,
      description: detail.lead.slice(0, 160),
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = CASE_DETAILS[slug as CaseSlug];
  if (!detail) notFound();

  return (
    <PageShell>
      <Header />
      <main>
        <CaseDetailContent detail={detail} />
      </main>
      <Footer />
    </PageShell>
  );
}
