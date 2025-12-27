"use client";

import { motion } from "framer-motion";
import { Music, Camera, Lightbulb, PartyPopper, Users, Mic2, Sparkles, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: HeadphonesIcon,
    title: "Professional DJs",
    description: "Experienced DJs who read the room and keep your guests dancing all night with the perfect mix of tracks.",
  },
  {
    icon: Music,
    title: "Live Bands",
    description: "From jazz ensembles to rock cover bands, our talented musicians bring live energy to any event.",
  },
  {
    icon: Camera,
    title: "Photo Booths",
    description: "Fun, interactive photo booths with props, instant prints, and digital sharing for lasting memories.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Effects",
    description: "Transform your venue with atmospheric lighting, uplighting, dance floor effects, and lasers.",
  },
  {
    icon: Mic2,
    title: "Sound Systems",
    description: "Crystal-clear audio equipment tailored to your venue size, from intimate gatherings to large celebrations.",
  },
  {
    icon: PartyPopper,
    title: "Event Accessories",
    description: "Confetti cannons, bubble machines, sparklers, and special effects to create unforgettable moments.",
  },
  {
    icon: Users,
    title: "Personal Services",
    description: "MCs, event coordinators, and support staff to ensure your event runs seamlessly from start to finish.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Packages",
    description: "Custom entertainment packages designed around your unique vision, theme, and budget.",
  },
];

const containerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[80px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[80px] pointer-events-none will-change-transform" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl uppercase tracking-wider text-primary sm:text-4xl md:text-5xl mb-6">
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            We take pride in understanding your vision and what will be needed to make an amazing event. Our team specialises in understanding and supplying the right services for you.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-muted-foreground mb-16"
        >
          Our services based on what customers request usually range from:
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:neon-glow">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl uppercase tracking-wide text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Not sure what you need? We&apos;ll help you create the perfect package.
          </p>
          <Button size="lg" className="neon-glow rounded-full">
            Discuss Your Event
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
