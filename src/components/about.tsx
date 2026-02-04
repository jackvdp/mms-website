"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

import type { Easing } from "framer-motion";

const images = [
  "/media/photosmms/image-2.png",
  "/media/28A760FD-320A-44A3-8327-E10D4F198A84.jpeg",
  "/media/photosmms/image-16.png",
  "/media/93D5F73E-2398-448B-863A-D9B8CDA55DB1.jpeg",
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as Easing },
};

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <section id="about" ref={containerRef} className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Background Glow Effects - positioned to blend with hero */}
      <div className="absolute -top-48 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[80px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-neon-purple/20 rounded-full blur-[80px] pointer-events-none will-change-transform" />
      {/* Intro Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl uppercase tracking-wider text-primary drop-shadow-[0_0_25px_rgba(255,20,147,0.3)] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Event,
            <br />
            <span className="text-foreground">Your Way</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-8">
            From DJs and live bands to photo booths, casino nights, and full event production — we source everything you need through our trusted network built over 30 years. Personal service, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-glow rounded-full" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full" asChild>
              <Link href="/about">About Simone</Link>
            </Button>
          </div>
        </motion.div>

        {/* What We Do Section with Parallax Images */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Text Content */}
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <h3 className="font-display text-3xl uppercase tracking-wider text-primary mb-6 sm:text-4xl">
              What We Do
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With 30 years in the entertainment industry, we specialise in turning every event — from weddings and private parties to corporate functions and festivals — into memorable experiences. We work directly with you to understand your vision, suggest ideas, and source the right DJs, entertainment, and services for your occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full" asChild>
                <Link href="/services">View Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full" asChild>
                <Link href="/djs">Meet Our DJs</Link>
              </Button>
            </div>
          </motion.div>

          {/* Parallax Image Grid */}
          <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-[60%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={images[0]}
                alt="Event entertainment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute top-20 right-0 w-[50%] aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={images[1]}
                alt="DJ performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="absolute bottom-0 left-[20%] w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={images[2]}
                alt="Wedding celebration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl uppercase tracking-wider text-foreground mb-8 sm:text-3xl">
            Follow Us on Instagram
          </h3>
          <motion.a
            href="https://instagram.com/musicmanagementsimplified"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex flex-col items-center gap-3"
            aria-label="Instagram"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground transition-colors hover:border-primary hover:text-primary hover:bg-primary/10">
              <Instagram className="h-6 w-6" />
            </div>
            <span className="text-muted-foreground hover:text-primary transition-colors">@musicmanagementsimplified</span>
          </motion.a>
        </motion.div>
      </div>
</section>
  );
}
