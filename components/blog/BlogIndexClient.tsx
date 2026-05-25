"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import BlogPostCard from "@/components/blog/BlogPostCard";
import type { BlogPostSummary } from "@/lib/blog/types";
import { formatPostDate } from "@/lib/blog/dates";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STAGGER_MS = 50;

function uniqueSortedCategories(posts: BlogPostSummary[]): string[] {
  const set = new Set<string>();
  posts.forEach((p) => (p.categoryNames ?? []).forEach((c) => set.add(c)));
  return [...set].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function CategoryButton({
  label,
  active,
  onClick,
  index,
  visible,
  emphasis,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  index: number;
  visible: boolean;
  emphasis?: boolean;
}) {
  const fontCls = emphasis ? "font-semibold" : "font-medium";
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ transitionDelay: visible ? `${60 + index * STAGGER_MS}ms` : "0ms" }}
      className={`rounded-full border px-4 py-2 text-sm ${fontCls} transition-all duration-500 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-colors ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${
        active
          ? "border-[#ff6600] bg-[#ff6600] text-white shadow-md"
          : emphasis
            ? "border-stone-200 dark:border-stone-800 bg-white dark:bg-neutral-950 text-stone-700 dark:text-stone-300 hover:border-[#ff6600]/40"
            : "border-stone-200 dark:border-stone-800 bg-white dark:bg-neutral-950 text-stone-600 dark:text-stone-400 hover:border-[#ff6600]/40 hover:text-[#ff6600]"
      }`}
    >
      {label}
    </button>
  );
}

export default function BlogIndexClient({ posts }: { posts: BlogPostSummary[] }) {
  const [active, setActive] = useState<string | null>(null);
  const categories = useMemo(() => uniqueSortedCategories(posts), [posts]);

  const filterRef = useRef<HTMLDivElement>(null);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    const el = filterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFiltersVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filtered = useMemo(() => {
    if (!active) return posts;
    return posts.filter((p) => (p.categoryNames ?? []).includes(active));
  }, [posts, active]);

  return (
    <section className="bg-gradient-to-b from-stone-50/80 dark:from-neutral-950/80 to-white dark:to-neutral-950 py-12 lg:py-16">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest text-stone-500">Categorias</p>
        </ScrollReveal>
        <div ref={filterRef} className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-2">
          <CategoryButton
            label="Todos"
            active={active === null}
            onClick={() => setActive(null)}
            index={0}
            visible={filtersVisible}
            emphasis
          />
          {categories.map((cat, i) => (
            <CategoryButton
              key={cat}
              label={cat}
              active={active === cat}
              onClick={() => setActive(cat)}
              index={i + 1}
              visible={filtersVisible}
            />
          ))}
        </div>

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
