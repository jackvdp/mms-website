"use client";

import { motion } from "framer-motion";
import {
  HeadphonesIcon,
  Speaker,
  Lightbulb,
  Camera,
  Music,
  Star,
  Check,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import Link from "next/link";
import Image from "next/image";

const djPackages = [
  {
    name: "XXL Package",
    duration: "4-6 hour event",
    watts: "7200 watts",
    packTime: "1 hour pack down minimum",
    features: [
      "2x 18inch Sub woofer",
      "2x 15inch Top loud speakers",
      "1x Opti DJ booth console",
      "2x Lighting truss",
      "4x Moving head lighting fixture (2x LED Mirror Option available)",
      "4x DMX par Can up light (Static Colour, RGBW)",
      "1x Chauvet GIG bar and Lighting stand",
    ],
    highlight: true,
  },
  {
    name: "XL Package",
    duration: "4-6 hour event",
    watts: "5000 watts",
    packTime: "1 hour pack down minimum",
    features: [
      "2x 15inch Sub woofer",
      "2x 15inch Top loud speakers",
      "1x Medium Black or White DJ booth console (option)",
      "2x Lighting truss",
      "4x Moving head lighting fixture",
      "4x DMX par Can up light",
      "1x Chauvet GIG bar and Lighting stand",
    ],
    highlight: false,
  },
  {
    name: "S&H DJ Booth Package",
    duration: "4-6 hour event",
    watts: null,
    packTime: "1 hour pack down minimum",
    features: [
      "2x 15inch Sub woofer (optional, additional fee)",
      "2x 15inch Top loud speakers",
      "1x S&H DJ booth (Black or White cover - custom designs available)",
      "2x Lighting truss",
      "4x Moving head lighting fixture",
      "4x DMX par Can up light",
      "1x Chauvet GIG bar and Lighting stand",
    ],
    highlight: false,
  },
  {
    name: "Party Package",
    duration: "4-6 hour event",
    watts: null,
    packTime: "1 hour pack down minimum",
    subtitle: "Basic Rig",
    features: [
      "2x 15inch Top loud speakers",
      "1x Medium Black/White DJ console",
      "4x DMX par Can up light",
      "1x Chauvet GIG bar and Lighting stand",
    ],
    highlight: false,
  },
];

const additionalServices = [
  {
    icon: Lightbulb,
    name: "Uplighting DMX Package",
    duration: "4-6 hour event (add-on)",
    description: "Perfect for weddings or themed events to enhance the atmosphere.",
    features: [
      "10x Battery-powered up-lights",
      "Colour-controlled and programmed to the music",
    ],
  },
  {
    icon: Camera,
    name: "Magic Mirror",
    duration: "3 hours service",
    description: "Unlike a photo booth, the Magic Mirror captures full-body pictures, showcasing outfits in their entirety.",
    features: [
      "Unlimited printed photos for guests",
      "Guest album with metallic pens for messages and photos",
      "Props provided",
      "USB stick with all event photos",
    ],
  },
  {
    icon: Star,
    name: "Combo Package",
    duration: "Complete package",
    description: "Complete entertainment solution including setup and pack down.",
    subtitle: "Basic Rig + Magic Mirror (3h) + Battery DMX up light Hire",
    features: [
      "Full Basic Rig DJ setup",
      "Magic Mirror (3 hour service)",
      "Battery DMX up light hire",
      "Comes in a single vehicle",
      "Requires 2 hours setup and pack down",
    ],
    highlight: true,
  },
];

const djs = [
  {
    name: "DJ Temi",
    bio: "DJ Temi has made a name for herself across London as an adaptable multi-genre DJ who has played at the likes of many 5-star venues such as Nike, Bagatelle and Tottenham Hotspur Stadium. Originally from Lithuania, Temi started working in the music industries in New York in 2016. Known for her smooth transitions across different genres and uplifting beats.",
    genres: ["Hip Hop", "R&B", "Dancehall", "Reggae", "Afrobeats", "Amapiano", "House", "Garage", "Reggaeton", "Disco", "Funk", "Commercial"],
    initial: "T",
    image: "/media/djs/IMG_2675 4.jpeg",
  },
  {
    name: "Marlon Harris",
    bio: "A creative and energetic DJ making the crowd dance all night. Marlon brings infectious energy to every event, reading the room perfectly and keeping the dancefloor packed from start to finish.",
    genres: ["R&B", "Hip Hop", "Afrobeats", "Bashment", "Reggaeton", "House", "Commercial"],
    initial: "M",
    image: "/media/djs/Marlon 2.jpeg",
  },
  {
    name: "Gavin Simpson",
    bio: "A diverse versatile open format Club/Bar DJ with over 10 years of experience. Gavin has played for several venues over London, Essex, Kent, Ipswich and Birmingham. He specialises in R&B/Hip-Hop and is known for his ability to cater to any crowd.",
    genres: ["Hip Hop", "R&B", "House", "Disco", "Club Classics", "Party Anthems", "90's", "Funk", "Motown"],
    initial: "G",
    image: "/media/djs/image.png",
  },
  {
    name: "John Freeman",
    bio: "A bubbly open format DJ comfortable playing anything from the 70s through to the present day and mixing it with style. John brings versatility and energy to every event, seamlessly blending decades of music.",
    genres: ["70s", "80s", "90s", "2000s", "Current Hits", "Open Format"],
    initial: "J",
    image: "/media/djs/john-freeman.png",
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

export default function DJsPage() {
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
                <span className="text-primary">DJ Services</span>
              </div>

              <h1 className="font-display text-4xl uppercase tracking-wider text-primary sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-[0_0_25px_rgba(255,20,147,0.3)]">
                DJ Packages
                <br />
                <span className="text-foreground">& Services</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl mb-8 leading-relaxed">
                Professional DJ equipment and talented DJs for any event. From intimate gatherings to large celebrations, we have the perfect package for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow rounded-full" onClick={scrollToContact}>
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full">
                  <a href="#packages">View Packages</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DJ Packages Section */}
        <section id="packages" className="relative bg-background py-24 md:py-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[80px] pointer-events-none" />

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
                <Speaker className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Equipment Packages</span>
              </div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                DJ Packages
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                All packages include 1-hour pack-up and pack-down. Contact us for a personalised quote.
              </p>
            </motion.div>

            {/* Packages Grid */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              {djPackages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`group relative rounded-2xl border p-6 md:p-8 transition-colors ${
                    pkg.highlight
                      ? "border-primary/50 bg-primary/5"
                      : "border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/10"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-2xl uppercase tracking-wide text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    {pkg.subtitle && (
                      <p className="text-sm text-muted-foreground">({pkg.subtitle})</p>
                    )}
                    <p className="text-sm text-primary mt-1">{pkg.duration}</p>
                  </div>

                  {(pkg.watts || pkg.packTime) && (
                    <div className="flex flex-wrap gap-3 mb-6">
                      {pkg.watts && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          <Speaker className="h-3 w-3" />
                          {pkg.watts}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-muted-foreground text-sm">
                        {pkg.packTime}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/90">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Additional Services Section */}
        <section id="additional" className="relative bg-background py-24 md:py-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none" />

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
                <Star className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Enhance Your Event</span>
              </div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                Additional Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Add these services to any DJ package to create an unforgettable experience.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {additionalServices.map((service) => (
                <motion.div
                  key={service.name}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative rounded-2xl border p-6 flex flex-col transition-colors ${
                    service.highlight
                      ? "border-primary/50 bg-primary/5"
                      : "border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/10"
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Best Value
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:neon-glow">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-xl uppercase tracking-wide text-foreground mb-1">
                    {service.name}
                  </h3>
                  {service.subtitle && (
                    <p className="text-xs text-muted-foreground mb-2">{service.subtitle}</p>
                  )}
                  <p className="text-sm text-primary mb-4">{service.duration}</p>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground/90">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Meet Our DJs Section */}
        <section id="our-djs" className="relative bg-background py-24 md:py-32 overflow-hidden">
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
                <HeadphonesIcon className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Talent</span>
              </div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                Meet Our DJs
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Experienced professionals who know how to read the room and keep your guests dancing all night.
              </p>
            </motion.div>

            {/* DJs Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {djs.map((dj, index) => (
                <motion.div
                  key={dj.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-primary/30 hover:bg-white/10 transition-colors"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    {dj.image ? (
                      <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-primary/50 flex-shrink-0">
                        <Image
                          src={dj.image}
                          alt={dj.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-neon-purple flex items-center justify-center text-primary-foreground font-bold text-2xl font-display flex-shrink-0">
                        {dj.initial}
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-2xl uppercase tracking-wide text-foreground">
                        {dj.name}
                      </h3>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-foreground/90 leading-relaxed mb-6 text-sm">
                    {dj.bio}
                  </p>

                  {/* Genres */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Music className="h-4 w-4 text-primary" />
                      Genres
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dj.genres.map((genre) => (
                        <span
                          key={genre}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Ready to Book Your
                <br />
                <span className="text-primary">Perfect DJ Package?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
                Contact us today to discuss your event requirements. We&apos;ll help you choose the perfect package and DJ for your special occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow rounded-full" onClick={scrollToContact}>
                  Get a Free Quote
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
