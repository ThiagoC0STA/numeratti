"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLIENT_LOGOS, COLORS } from "@/lib/constants";

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-zinc-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Mais de <span style={{ color: COLORS.primary }}>200 empresas</span>{" "}
            escolheram a Numeratti
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Marcas que confiam no nosso trabalho para resultados reais
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {CLIENT_LOGOS.map((client, i) => (
            <motion.div
              key={client.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#ff6600]/30 hover:shadow-lg"
            >
              <Image
                src={client.url}
                alt={client.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain md:h-14"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/clientes"
              className="inline-flex items-center rounded-full px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: COLORS.primary }}
            >
              Veja quem mais confia em nosso trabalho
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
