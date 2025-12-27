"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/media/5532F409-9BE3-4853-AF05-86841C460A35.jpeg", span: "col-span-2 row-span-2" },
  { src: "/media/28A760FD-320A-44A3-8327-E10D4F198A84.jpeg", span: "col-span-1 row-span-1" },
  { src: "/media/7BD28C34-D13B-4AF9-9EE2-8495FA034377.jpeg", span: "col-span-1 row-span-2" },
  { src: "/media/93D5F73E-2398-448B-863A-D9B8CDA55DB1.jpeg", span: "col-span-1 row-span-1" },
  { src: "/media/914CE742-D491-4D78-BA7A-55FCC02ECA28.jpeg", span: "col-span-1 row-span-1" },
  { src: "/media/33156D3B-2292-4DC7-9875-70CBF8036CF2.jpeg", span: "col-span-2 row-span-1" },
  { src: "/media/414E5D6F-B94F-4E5F-ABBB-ADFE3C59837B.jpeg", span: "col-span-1 row-span-2" },
  { src: "/media/A56F1791-5928-4403-B0DD-83C26FE3819C.jpeg", span: "col-span-1 row-span-1" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl uppercase tracking-wider text-primary sm:text-4xl md:text-5xl mb-4">
            Our Events
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into the unforgettable moments we create
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative overflow-hidden rounded-xl ${image.span} group cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={`Event photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
    </section>
  );
}
