"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/media/main_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 font-display text-5xl font-bold uppercase tracking-wider text-primary drop-shadow-[0_0_25px_rgba(255,20,147,0.3)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Professional DJs & Bands
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-foreground"
          >
            for Weddings & Events
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8 max-w-2xl text-lg font-semibold text-foreground/90 sm:text-xl md:text-2xl"
        >
          Unforgettable entertainment across London, Essex & South East UK
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" className="neon-glow text-lg">
            Book Now
          </Button>
          <Button size="lg" variant="outline" className="text-lg !border-white !bg-white/20 text-white hover:!bg-white/30">
            View Services
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="h-10 w-6 rounded-full border-2 border-primary/50 p-1">
          <div className="h-2 w-1.5 mx-auto rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
