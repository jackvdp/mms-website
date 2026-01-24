"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Music2,
  Mic2,
  Camera,
  Lightbulb,
  PartyPopper,
  Phone,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Service = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  addOns?: string[];
  images: string[];
  icon: React.ElementType;
};

const services: Service[] = [
  {
    name: "Casino Night",
    tagline: "Bring Vegas to your venue",
    description: "Transform your event into a glamorous casino experience with professional tables and experienced croupiers. Perfect for corporate events, fundraisers, and private parties.",
    features: [
      "2x Roulette tables",
      "2x Blackjack tables",
      "1x Texas Hold'em table",
      "3-card poker/brag available",
      "Professional croupiers included",
    ],
    addOns: [
      "Personalised fun money bank notes",
      "James Bond themed banners",
      "Red carpet entrance setup",
    ],
    images: ["/media/events/casino1.png", "/media/events/casino2.png"],
    icon: Sparkles,
  },
  {
    name: "The Dynamics",
    tagline: "Live party band",
    description: "High-energy live party band bringing the house down at weddings, corporate functions, and special events. With international touring experience and a repertoire spanning decades of hits.",
    features: [
      "Professional live band",
      "Weddings & functions",
      "International touring experience",
      "Decades of hit songs",
      "Custom setlists available",
    ],
    images: ["/media/events/band.png", "/media/events/band2.png", "/media/events/band3.png"],
    icon: Music2,
  },
  {
    name: "Chess Taylor",
    tagline: "Wedding & events singer",
    description: "Versatile vocalist with over 10 years of professional experience, performing everything from Motown classics to contemporary pop, classical pieces, and smooth jazz.",
    features: [
      "Motown & Soul classics",
      "Contemporary Pop hits",
      "Classical & Jazz standards",
      "10+ years experience",
      "Perfect for ceremonies & receptions",
    ],
    images: ["/media/events/chess.png", "/media/events/chess1.png"],
    icon: Mic2,
  },
  {
    name: "Traditional & Folk",
    tagline: "Authentic musical entertainment",
    description: "From intimate piano performances to lively ceilidh bands, our traditional and folk musicians bring authentic charm to any celebration.",
    features: [
      "Ciaran Gilligan - Piano & Accordion",
      "BLAG Folk & Ceilidh Band",
      "Traditional Irish & Scottish music",
      "Perfect for weddings & celebrations",
      "Interactive dancing available",
    ],
    images: ["/media/events/ciaran.png", "/media/events/ciaran2.png"],
    icon: Music2,
  },
  {
    name: "Photo Booths",
    tagline: "Capture the memories",
    description: "From classic enclosed booths to cutting-edge 360 video experiences, we have the perfect photo solution to keep your guests entertained and create lasting memories.",
    features: [
      "Classic enclosed photo booth",
      "360-degree video booth",
      "Digital Selfie Pod",
      "Magic Mirror experience",
      "Props & instant prints included",
    ],
    images: ["/media/events/photobooth.png", "/media/events/360photobooth2.png", "/media/events/magicmirror.png", "/media/events/digitalselfie.png"],
    icon: Camera,
  },
  {
    name: "Lighting & Production",
    tagline: "Set the atmosphere",
    description: "Professional event lighting that transforms any venue. From subtle ambient uplighting to dynamic, music-synchronised displays that energise the dancefloor.",
    features: [
      "Ambient venue uplighting",
      "Dynamic moving head fixtures",
      "Programmed to music",
      "Atmospheric to energising",
      "Indoor & outdoor options",
    ],
    images: ["/media/events/lighting2.png", "/media/events/lighting3.png", "/media/events/lighting4.png", "/media/events/lighting5.png"],
    icon: Lightbulb,
  },
  {
    name: "Father Christmas",
    tagline: "The magic of Christmas",
    description: "Professional Father Christmas for seasonal events, grottos, corporate parties, and private celebrations. Creating magical moments for guests of all ages.",
    features: [
      "Professional Santa performer",
      "Authentic costume & props",
      "Grottos & meet-and-greets",
      "Corporate Christmas parties",
      "Private family visits",
    ],
    images: ["/media/events/Santa Paul.jpeg", "/media/events/santa2.jpeg", "/media/events/santa3.jpeg"],
    icon: PartyPopper,
  },
  {
    name: "Karaoke",
    tagline: "Your moment to shine",
    description: "Professional karaoke setup with an experienced DJ/Host to keep the party going. Over 100,000 songs available with wireless microphones and modern QR code song requests.",
    features: [
      "Professional DJ/Host",
      "100,000+ song catalogue",
      "Wireless microphones",
      "QR code song requests",
      "Full sound system included",
    ],
    images: ["/media/events/lighting3.png"],
    icon: Mic2,
  },
  {
    name: "Oompah Band",
    tagline: "Traditional Bavarian entertainment",
    description: "Authentic Oompah band bringing the spirit of Oktoberfest to your event. Perfect for beer festivals, German-themed parties, and celebrations that need extra cheer.",
    features: [
      "Traditional Oompah music",
      "Authentic Bavarian costumes",
      "Interactive entertainment",
      "Perfect for Oktoberfest themes",
      "Indoor & outdoor performances",
    ],
    images: ["/media/events/oompah.jpeg", "/media/events/oompah2.jpeg", "/media/events/oompah3.jpeg", "/media/events/oompah4.jpeg"],
    icon: Music2,
  },
];

function ImageCarousel({ images, serviceName }: { images: string[]; serviceName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 1) {
    return (
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={images[0]}
          alt={serviceName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-72 w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${serviceName} ${index + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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

export default function ServicesPage() {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="dark">
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-primary">Services</span>
              </div>

              <h1 className="font-display text-4xl uppercase tracking-wider text-primary sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-[0_0_25px_rgba(255,20,147,0.3)]">
                Your Event,
                <br />
                <span className="text-foreground">Your Way</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl mb-8 leading-relaxed">
                With over 30 years in the entertainment industry, we don&apos;t just offer services—we craft experiences. Tell us your vision, and we&apos;ll make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow rounded-full" onClick={scrollToContact}>
                  Let&apos;s Talk
                </Button>
                <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full">
                  <a href="#our-services">Explore Services</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="our-services" className="relative bg-background py-24 md:py-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Entertainment & More</span>
              </div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                Our Services
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                From casino nights to live bands, photo booths to professional lighting—we provide everything you need to create an unforgettable event.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-primary/30 hover:bg-white/10 transition-colors"
                >
                  {/* Image Carousel */}
                  <div className="relative">
                    <ImageCarousel images={service.images} serviceName={service.name} />

                    {/* Name overlay on image */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center gap-2 mb-1">
                        <service.icon className="h-5 w-5 text-primary" />
                        <span className="text-xs uppercase tracking-wider text-primary font-semibold">{service.tagline}</span>
                      </div>
                      <h3 className="font-display text-2xl uppercase tracking-wide text-white drop-shadow-lg">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-foreground/90 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-foreground/80">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-sm text-muted-foreground pl-6">
                            +{service.features.length - 4} more included
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Add-ons */}
                    {service.addOns && (
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Optional Add-ons
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.addOns.map((addOn) => (
                            <span
                              key={addOn}
                              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {addOn}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Can't Find What You're Looking For Section */}
        <section className="relative bg-background py-24 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Personal Service</span>
              </div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                Can&apos;t Find What
                <br />
                <span className="text-primary">You&apos;re Looking For?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed">
                These are just some examples of what we offer. With over 30 years of connections across the entertainment industry, we can source almost anything for any event.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="text-4xl font-display text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Years of industry experience</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="text-4xl font-display text-primary mb-2">100s</div>
                  <p className="text-sm text-muted-foreground">Of trusted entertainment contacts</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="text-4xl font-display text-primary mb-2">1</div>
                  <p className="text-sm text-muted-foreground">Personal point of contact for you</p>
                </motion.div>
              </div>

              <p className="text-foreground mb-8">
                <strong>Tell us what you need, and we&apos;ll find it.</strong>
              </p>

              <Button size="lg" className="neon-glow rounded-full" onClick={scrollToContact}>
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative bg-background py-24 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                Ready to Create
                <br />
                <span className="text-primary">Something Special?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
                Every event is unique, and we take the time to understand yours. Get in touch for a personal consultation and let&apos;s bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow rounded-full" onClick={scrollToContact}>
                  Let&apos;s Talk
                </Button>
                <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
