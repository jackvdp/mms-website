"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const images = [
  "/media/5532F409-9BE3-4853-AF05-86841C460A35.jpeg",
  "/media/28A760FD-320A-44A3-8327-E10D4F198A84.jpeg",
  "/media/7BD28C34-D13B-4AF9-9EE2-8495FA034377.jpeg",
  "/media/93D5F73E-2398-448B-863A-D9B8CDA55DB1.jpeg",
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 },
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
      <div className="absolute -top-48 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] pointer-events-none" />
      {/* Intro Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl uppercase tracking-wider text-primary drop-shadow-[0_0_25px_rgba(255,20,147,0.3)] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Vision,
            <br />
            <span className="text-foreground">Our Service</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-8">
            Whatever you need for your perfect event, we can source it. Through our extensive network of trusted partners built over 30 years, we connect you with the best entertainment, equipment, and services — all tailored to your vision.
          </p>
          <Button size="lg" className="neon-glow rounded-full">
            Get in Touch
          </Button>
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
              With 30 years in the entertainment industry, we specialise in turning every event—from small gatherings to large celebrations and corporate functions—into memorable experiences. We handle all the details, from selecting the perfect venue to providing everything needed to realize your vision. Our personalized service focuses on your preferences, offering unique suggestions and alternatives to enhance your event.
            </p>
            <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full">
              Make an Enquiry
            </Button>
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
              className="absolute bottom-0 left-[20%] w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20"
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
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
</section>
  );
}
