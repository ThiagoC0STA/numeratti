"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLIENT_LOGOS, COLORS, WHATSAPP_URL } from "@/lib/constants";

const STAGGER_MS = 50;

function ClientsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {CLIENT_LOGOS.map((client, i) => (
        <div
          key={client.name}
          style={{ transitionDelay: visible ? `${i * STAGGER_MS}ms` : "0ms" }}
          className={`flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-colors ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Image
            src={client.url}
            alt={client.name}
            width={140}
            height={70}
            className="h-14 w-auto object-contain"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientesContent() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-black md:text-4xl">
            Marcas que escolheram a{" "}
            <span style={{ color: COLORS.primary }}>Numeratti</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Empresas com grande reconhecimento no mercado escolheram melhorar os
            seus resultados conosco.
          </p>
        </ScrollReveal>

        <ClientsGrid />

        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full px-8 py-4 font-semibold text-white transition-transform duration-200 ease-out hover:scale-[1.02] motion-reduce:transform-none"
              style={{ backgroundColor: COLORS.primary }}
            >
              Veja quem mais confia em nosso trabalho
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
