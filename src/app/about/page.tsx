"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="dark">
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-primary">About</span>
              </div>

              <h1 className="font-display text-4xl uppercase tracking-wider text-primary sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-[0_0_25px_rgba(255,20,147,0.3)]">
                About
                <br />
                <span className="text-foreground">MMS Events</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="relative bg-background py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/media/simone.jpg"
                    alt="Simone - Founder of MMS Events"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>

              {/* Story */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl mb-8">
                  Hi, I&apos;m <span className="text-primary">Simone</span>
                </h2>

                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <p className="text-lg">
                    I&apos;ve been working in the music and entertainment industry for over 30 years. What started with providing DJs to some of the biggest clubs across the UK has grown into something I&apos;m incredibly proud of — a full-service events company built on relationships, trust, and a genuine love for what I do.
                  </p>

                  <p>
                    Over the years, I&apos;ve built up an extensive network of talented DJs, live bands, singers, entertainers, and suppliers. When you work with me, you&apos;re not browsing a catalogue — you&apos;re getting my personal attention. I&apos;ll listen to what you want, understand your event, and use my connections to find exactly the right people and services for you.
                  </p>

                  <p>
                    Whether it&apos;s a wedding, a corporate event, a birthday party, or something completely unique, I work with you from start to finish. I&apos;ll suggest ideas you might not have thought of, recommend the perfect entertainment for your crowd, and make sure every detail is taken care of.
                  </p>

                  <p>
                    That&apos;s the difference with MMS Events — you&apos;re not dealing with a faceless agency. You&apos;re working directly with me. I&apos;ll pick up the phone, answer your questions, and make sure your event is exactly what you imagined. That personal touch is what my clients come back for, time and time again.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I Offer Section */}
        <section className="relative bg-background py-16 md:py-24 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                Why Work <span className="text-primary">With Me</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Service",
                  description: "You deal directly with me — not a call centre, not an algorithm. I get to know you and your event personally, so I can recommend exactly what you need.",
                },
                {
                  title: "30+ Years Experience",
                  description: "I&apos;ve been in this industry for over three decades. I&apos;ve seen what works, what doesn&apos;t, and I know how to make every event run smoothly.",
                },
                {
                  title: "Unmatched Network",
                  description: "Hundreds of DJs, bands, singers, entertainers, and suppliers — all people I know and trust. Whatever you need, I can find it.",
                },
                {
                  title: "Bespoke Solutions",
                  description: "No two events are the same. I&apos;ll tailor everything to your vision, your venue, and your guests — not just offer a one-size-fits-all package.",
                },
                {
                  title: "Start to Finish",
                  description: "From the first phone call to the last song of the night, I&apos;m with you every step of the way. I&apos;ll handle the details so you can enjoy your event.",
                },
                {
                  title: "Trusted by Many",
                  description: "My clients come back time and time again, and recommend me to their friends and family. That trust means everything to me.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-display text-lg uppercase tracking-wider text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-background py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl md:text-5xl mb-6">
                Let&apos;s Create Your
                <br />
                <span className="text-primary">Perfect Event</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
                Tell me what you have in mind and I&apos;ll take it from there. No pressure, no hard sell — just a chat about how I can help make your event something special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow rounded-full" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="!border-primary !text-primary hover:!bg-primary/10 rounded-full" asChild>
                  <Link href="/services">View Services</Link>
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
