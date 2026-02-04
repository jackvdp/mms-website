"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Contact } from "@/components/contact";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="dark">
      <ScrollProgress />
      <Navbar />
      <main>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
