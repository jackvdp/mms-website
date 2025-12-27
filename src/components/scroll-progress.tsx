"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 w-1.5 z-50 origin-top bg-primary/20"
      style={{ scaleY, transformOrigin: "top" }}
    >
      <div className="absolute inset-0 bg-primary neon-glow" />
    </motion.div>
  );
}
