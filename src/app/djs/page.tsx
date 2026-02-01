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
    imagePosition: "top" as const,
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
  {
    name: "Jeet Shanspal",
    bio: "DJ Senator is a London based open format DJ who has been a staple in the club circuit since the early 2000s. With extensive knowledge of Asian music, Jeet has performed at major UK venues like Ministry of Sound, Fabric, XOYO and many others.",
    genres: ["Afrobeats", "Afro House", "R&B", "Hip Hop", "Reggae", "Bhangra", "Bollywood"],
    initial: "J",
    image: "/media/djs/IMG-20200311-WA0025.jpeg",
  },
  {
    name: "DJ Astech",
    bio: "From simple birthday parties and small weddings to thousands of festival goers on outdoor stages, and recently the British Grand Prix at Silverstone as part of the corporate hospitality. With a range of systems to suit every event, from compact setups to large field stages used at festivals. The lighting is programmed with the music, designed to be ambient and atmospheric before becoming energising as the tempo increases.",
    genres: ["Weddings", "Corporate", "Festivals", "Private Parties"],
    initial: "A",
    image: "/media/djs/astech.png",
  },
  {
    name: "Danny Borges",
    bio: "DJ JD is a high-energy, professional DJ specialising in weddings, corporate events, and private parties across London and the UK. With a residency at the British Formula One Grand Prix at Silverstone and performances at over 100 prestigious venues, DJ JD brings proven crowd-reading skills and premium entertainment that keeps dance floors packed all night.",
    genres: ["House", "Dance", "Hip Hop", "R&B", "Pop", "80s & 90s Classics", "Disco", "Funk", "Soul", "Motown", "Reggae", "Dancehall", "Latin", "Afrobeat", "UK Garage", "EDM"],
    initial: "D",
    image: "/media/djs/borges.png",
  },
  {
    name: "DJ Stephanie Jay",
    bio: "An internationally respected DJ with over 20 years of experience, performing across more than 50 countries worldwide. Her impressive client list includes Porsche, BMW, Rolls-Royce, and Warner Bros, alongside iconic motorsport stages such as Goodwood, Silverstone Formula One, and Formula E. A former resident DJ for Hed Kandi and Ministry of Sound.",
    genres: ["House", "Club", "Corporate", "Fashion", "Luxury Events"],
    initial: "S",
    image: "/media/djs/stephjay.png",
    imagePosition: "top" as const,
  },
  {
    name: "Stephen Mapp",
    bio: "DJ Steve Mapp has over 30 years of DJ experience, an exceptional multi-format DJ renowned for being able to read the room and creating an unforgettable music experience. His dynamic repertoire draws on an encyclopaedic knowledge of music spanning the 1950s to today, with setlists that move effortlessly through time and genre.",
    genres: ["Soul", "Funk", "R&B", "Disco", "House", "Indie", "Latin", "Reggaeton", "Pop", "EDM"],
    initial: "S",
    image: "/media/djs/mapp.png",
  },
  {
    name: "Ross Killington",
    bio: "A DJ who loves weaving genres and eras of music together to make sure the set never gets stale. With 13 years of experience and over 700 gigs under his belt, Ross prides himself on keeping people stuck to the dancefloor all night long.",
    genres: ["Reggaeton", "Old School R&B", "House", "EDM", "Club Classics"],
    initial: "R",
    image: "/media/djs/rosskilington.png",
  },
  {
    name: "DJ Hayley Kennedy",
    bio: "DJ Hayley Kennedy brings experience you can trust—skilled mixing, crowd awareness, and a professional approach that guarantees a great atmosphere and an unforgettable night. Working with brands such as ALO, F1 and Rolex, private member clubs and restaurants across London, and hosting concert after parties for Beyonce, Taylor Swift and Oasis.",
    genres: ["Commercial", "Corporate", "Club", "Private Events"],
    initial: "H",
    image: "/media/djs/hayleykennedy.png",
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
                <span className="text-primary">DJs</span>
              </div>

              <h1 className="font-display text-4xl uppercase tracking-wider text-primary sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-[0_0_25px_rgba(255,20,147,0.3)]">
                Our DJs
                <br />
                <span className="text-foreground">& Services</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl mb-8 leading-relaxed">
                With over 30 years in the industry, we have a network of hundreds of professional DJs. From resident DJs for bars and restaurants to event specialists, we can find the perfect DJ for any occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow rounded-full" onClick={scrollToContact}>
                  Let's Talk
                </Button>
                <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full">
                  <a href="#our-djs">Meet Our DJs</a>
                </Button>
              </div>
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
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                These are just some of the talented DJs in our network. With over 30 years of industry experience, we have access to hundreds of professional DJs for bars, restaurants, clubs, private events, and more. Whatever your occasion, we&apos;ll find the perfect match.
              </p>
            </motion.div>

            {/* DJs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {djs.map((dj, index) => (
                <motion.div
                  key={dj.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-primary/30 hover:bg-white/10 transition-colors"
                >
                  {/* Large Image */}
                  {dj.image ? (
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={dj.image}
                        alt={dj.name}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${"imagePosition" in dj && dj.imagePosition === "top" ? "object-top" : ""}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      {/* Name overlay on image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-2xl uppercase tracking-wide text-white drop-shadow-lg">
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
                  ) : (
                    <div className="relative h-64 w-full bg-gradient-to-br from-primary/30 to-neon-purple/30 flex items-center justify-center">
                      <span className="text-6xl font-display font-bold text-white/50">{dj.initial}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-2xl uppercase tracking-wide text-white drop-shadow-lg">
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
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Bio */}
                    <p className="text-foreground/90 leading-relaxed mb-4 text-sm line-clamp-4">
                      {dj.bio}
                    </p>

                    {/* Genres */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                        <Music className="h-4 w-4 text-primary" />
                        Genres
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dj.genres.slice(0, 5).map((genre) => (
                          <span
                            key={genre}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {genre}
                          </span>
                        ))}
                        {dj.genres.length > 5 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-muted-foreground">
                            +{dj.genres.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
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
                DJ Equipment Packages
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                If you need equipment for your event, then we&#39;ve got you sorted. All packages include 1-hour pack-up and pack-down. Contact us for a personalised quote.
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
                Ready to Find Your
                <br />
                <span className="text-primary">Perfect DJ?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
                Every event is unique, and we take the time to understand yours. Get in touch and we&apos;ll personally match you with the right DJ for your occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow rounded-full" onClick={scrollToContact}>
                  Let's Talk
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
