"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLIENT_LOGOS, COLORS, WHATSAPP_URL } from "@/lib/constants";

export default function ClientesContent() {
  return (
    <section className="bg-white py-20 lg:py-28">
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

        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 },
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
              whileHover={{ y: -4 }}
              className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Image
                src={client.url}
                alt={client.name}
                width={140}
                height={70}
                className="h-14 w-auto object-contain"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex rounded-full px-8 py-4 font-semibold text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
              Veja quem mais confia em nosso trabalho
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
