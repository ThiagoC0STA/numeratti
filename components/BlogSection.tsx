"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BLOG_POSTS, COLORS } from "@/lib/constants";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            <span style={{ color: COLORS.primary }}>Blog</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Conteúdo sobre marketing digital e performance
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold text-black group-hover:text-[#ff6600]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="rounded-md px-2 py-0.5 text-xs"
                        style={{
                          backgroundColor: `${COLORS.primary}20`,
                          color: COLORS.primaryDark,
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: COLORS.primary }}
                  >
                    Ler mais
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold transition-colors hover:opacity-80"
              style={{ color: COLORS.primary }}
            >
              Ver todos os artigos
              <ArrowRight size={20} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
