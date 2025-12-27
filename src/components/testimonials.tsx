"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Declan & Kate",
    text: "Just wanted to formally thank you. Communication was great throughout and the whole thing was simple from our point of view. Please consider this a 5* review!",
  },
  {
    name: "James D.",
    text: "Everyone loved you, thanks so much! Especially my friends that you took requests from :-)",
  },
  {
    name: "Samuel",
    text: "I just wanted to say thank you so much for last night. The music was perfect, you really set the scene and got everyone on the dancefloor till the end!",
  },
  {
    name: "Alex & Frank",
    text: "We just wanted to say a huge thank you! It was a great day, the music was on point and everyone had a good dance. Also I know my little cousins loved the mini moment on the decks so thank you for that 🙂",
  },
  {
    name: "Rachel & Tom",
    text: "Simone was absolutely incredible from start to finish. She took all the stress away and handled everything — from the DJ to the photo booth to the lighting. Whatever we wanted, she was able to source at a really reasonable price. We couldn't recommend her enough!",
  },
  {
    name: "Marcus & Priya",
    text: "The personal service was second to none. Simone understood exactly what we wanted and went above and beyond to make it happen. She found us the perfect band within our budget and coordinated everything seamlessly. It felt like she genuinely cared about our day as much as we did.",
  },
];

const containerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl uppercase tracking-wider text-primary sm:text-4xl md:text-5xl mb-6">
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don&apos;t just take our word for it — hear from the couples and clients who trusted us with their special day.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/10 flex flex-col ${
                index === 4 || index === 5 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-neon-purple flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-semibold text-foreground">
                  {testimonial.name}
                </span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
