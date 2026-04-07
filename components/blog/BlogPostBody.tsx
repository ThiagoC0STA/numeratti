"use client";

import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      const src = value.url
        ? value.url
        : urlForImage(value).width(1200).quality(80).auto("format").url();

      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="rounded-xl"
            unoptimized
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-stone-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-bold text-stone-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 text-lg font-bold text-stone-900">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-relaxed text-stone-700">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#ff6600] pl-4 italic text-stone-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 ml-6 list-disc space-y-2 text-stone-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 ml-6 list-decimal space-y-2 text-stone-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const blank = value?.blank !== false;
      return (
        <a
          href={value?.href}
          target={blank ? "_blank" : undefined}
          rel={blank ? "noopener noreferrer" : undefined}
          className="text-[#ff6600] underline underline-offset-2 transition hover:text-[#cc5200]"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-stone-900">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm font-mono text-[#ff6600]">
        {children}
      </code>
    ),
  },
};

export default function BlogPostBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="blog-prose mx-auto w-full max-w-6xl px-6 pb-24 pt-2 lg:px-10">
      <PortableText value={body} components={components} />
    </div>
  );
}
