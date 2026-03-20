"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import BlogPostCard from "@/components/blog/BlogPostCard";
import type { BlogPostSummary } from "@/lib/blog/types";
import { formatPostDate } from "@/lib/blog/dates";
import ScrollReveal, { staggerItemVariants } from "@/components/ui/ScrollReveal";
function uniqueSortedCategories(posts: BlogPostSummary[]): string[] {
  const set = new Set<string>();
  posts.forEach((p) => p.categoryNames.forEach((c) => set.add(c)));
  return [...set].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export default function BlogIndexClient({ posts }: { posts: BlogPostSummary[] }) {
  const [active, setActive] = useState<string | null>(null);
  const categories = useMemo(() => uniqueSortedCategories(posts), [posts]);

  const filtered = useMemo(() => {
    if (!active) return posts;
    return posts.filter((p) => p.categoryNames.includes(active));
  }, [posts, active]);

  return (
    <section className="bg-gradient-to-b from-stone-50/80 to-white py-12 lg:py-16">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest text-stone-500">Categorias</p>
        </ScrollReveal>
        <motion.div
          className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
          }}
        >
          <motion.button
            type="button"
            variants={staggerItemVariants}
            onClick={() => setActive(null)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              active === null
                ? "border-[#ff6600] bg-[#ff6600] text-white shadow-md"
                : "border-stone-200 bg-white text-stone-700 hover:border-[#ff6600]/40"
            }`}
          >
            Todos
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              variants={staggerItemVariants}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "border-[#ff6600] bg-[#ff6600] text-white shadow-md"
                  : "border-stone-200 bg-white text-stone-600 hover:border-[#ff6600]/40 hover:text-[#ff6600]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <ScrollReveal delay={0.06}>
          <p className="mt-10 text-center text-sm text-stone-500">
            {filtered.length} artigo{filtered.length !== 1 ? "s" : ""}
            {active ? ` em “${active}”` : ""}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              dateLabel={formatPostDate(post.date)}
              delay={Math.min(i * 0.04, 0.4)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-stone-500">Nenhum artigo nesta categoria.</p>
        )}
      </div>
    </section>
  );
}
