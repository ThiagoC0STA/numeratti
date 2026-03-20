"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useSimplifiedMotion } from "@/lib/hooks/useSimplifiedMotion";
import type { BlogPostSummary } from "@/lib/blog/types";
import { COLORS } from "@/lib/constants";
import { ArrowRight, Calendar } from "lucide-react";

function hrefForSlug(slug: string) {
  return `/blog/${encodeURIComponent(slug)}`;
}

export default function BlogPostCard({
  post,
  dateLabel,
  featured = false,
  delay = 0,
}: {
  post: BlogPostSummary;
  dateLabel: string;
  featured?: boolean;
  delay?: number;
}) {
  const simplified = useSimplifiedMotion();

  return (
    <ScrollReveal delay={delay} className="h-full min-w-0 w-full">
      <motion.article
        whileHover={simplified ? undefined : { y: -8 }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        className="group flex h-full min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_16px_50px_-28px_rgba(0,0,0,0.08)] transition-shadow hover:border-[#ff6600]/25 hover:shadow-[0_24px_60px_-24px_rgba(255,102,0,0.12)]"
      >
        <Link href={hrefForSlug(post.slug)} className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div
            className={`relative w-full min-w-0 shrink-0 overflow-hidden ${
              featured
                ? "h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]"
                : "aspect-[16/10]"
            }`}
          >
            {post.imageUrl ? (
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                unoptimized
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#fff0e6] via-white to-[#ffe8d6]"
                aria-hidden
              >
                <span
                  className="font-black tracking-tighter text-[#ff6600]/25"
                  style={{ fontSize: featured ? "5rem" : "3.5rem" }}
                >
                  N
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/15 to-transparent opacity-90" />
            {featured && (
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <Calendar size={14} />
                  {dateLabel}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white transition-colors group-hover:text-[#ffb380] lg:text-3xl">
                  {post.title}
                </h3>
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-6">
            {!featured && (
              <>
                <div className="flex items-center gap-2 text-sm font-medium text-stone-500">
                  <Calendar size={14} />
                  {dateLabel}
                </div>
                <h3 className="mt-3 line-clamp-2 text-lg font-bold text-stone-900 transition-colors group-hover:text-[#ff6600]">
                  {post.title}
                </h3>
              </>
            )}

            <p
              className={`line-clamp-2 text-sm leading-relaxed text-stone-600 ${featured ? "mt-4" : "mt-2"}`}
            >
              {post.excerptPlain}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.categoryNames.slice(0, 3).map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-[#ff6600]/20 bg-[#ff6600]/8 px-3 py-0.5 text-xs font-semibold text-[#ff6600]"
                >
                  {cat}
                </span>
              ))}
            </div>

            <span
              className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#ff6600] transition-transform group-hover:translate-x-1"
              style={{ color: COLORS.primary }}
            >
              Ler artigo completo
              <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </motion.article>
    </ScrollReveal>
  );
}
