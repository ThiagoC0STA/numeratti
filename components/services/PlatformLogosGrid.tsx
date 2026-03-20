"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PLATFORM_ASSETS } from "@/lib/constants";

const ROW_SIZE = 6;

type PlatformAsset = (typeof PLATFORM_ASSETS)[number];

export default function PlatformLogosGrid() {
  const rows: PlatformAsset[][] = [];
  for (let i = 0; i < PLATFORM_ASSETS.length; i += ROW_SIZE) {
    rows.push(PLATFORM_ASSETS.slice(i, i + ROW_SIZE) as PlatformAsset[]);
  }

  return (
    <div className="mt-12 space-y-5 md:mt-14 md:space-y-6">
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6"
        >
          {row.map((platform) => (
            <motion.figure
              key={platform.name}
              variants={{
                hidden: { opacity: 0, y: 14, scale: 0.94 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="flex h-[4.5rem] w-[7.25rem] shrink-0 items-center justify-center rounded-2xl border border-stone-200/90 bg-white px-3 py-2 shadow-sm transition-shadow hover:border-[#ff6600]/25 hover:shadow-md sm:h-[5rem] sm:w-[8.25rem] md:h-[5.5rem] md:w-[9.5rem] md:px-4"
            >
              <Image
                src={platform.image}
                alt={platform.name}
                width={200}
                height={80}
                className="h-auto max-h-[3.25rem] w-full max-w-[7rem] object-contain sm:max-h-[3.75rem] sm:max-w-[7.75rem] md:max-h-[4.25rem] md:max-w-[8.5rem]"
                unoptimized
              />
            </motion.figure>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
