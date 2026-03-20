"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlogPostCard from "@/components/blog/BlogPostCard";
import type { BlogPostSummary } from "@/lib/blog/types";
import { formatPostDate } from "@/lib/blog/dates";
import { COLORS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function BlogSection({ posts }: { posts: BlogPostSummary[] }) {
  if (!posts.length) return null;

  const [featured, ...rest] = posts;
  /** Uniform grid below — avoids 5-col layout gaps / collapsed cells with ScrollReveal + Image */
  const more = rest.slice(0, 6);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-[#fff7f0] py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-[#ff6600]/8 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent" />

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
            Conteúdo
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#ff6600] to-[#f27405] bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
            Artigos completos na v2 — clique e leia sem sair do site
          </p>
        </ScrollReveal>

        <div className="mt-20 space-y-6">
          <div className="w-full min-w-0">
            <BlogPostCard
              post={featured}
              dateLabel={formatPostDate(featured.date)}
              featured
              delay={0}
            />
          </div>

          {more.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((post, i) => (
                <BlogPostCard
                  key={post.slug}
                  post={post}
                  dateLabel={formatPostDate(post.date)}
                  delay={0.05 + i * 0.04}
                />
              ))}
            </div>
          )}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center">
            <Link href="/blog">
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="group inline-flex items-center gap-2 rounded-full border border-[#ff6600]/35 bg-white px-7 py-3.5 text-sm font-bold text-[#ff6600] shadow-md transition-all hover:bg-[#ff6600] hover:text-white"
              >
                Ver todos os artigos
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
