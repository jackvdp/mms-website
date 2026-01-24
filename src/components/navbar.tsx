"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  isPage?: boolean;
};

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "/services", label: "Services", isPage: true },
  { href: "/djs", label: "DJs", isPage: true },
  { href: "#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSectionLink = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      // On homepage, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to homepage with hash
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <nav className="flex h-14 items-center justify-between gap-8 rounded-full bg-background/50 backdrop-blur-md border border-white/10 px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/media/logo.png"
              alt="MMS Events Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary cursor-pointer"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSectionLink(e, link.href)}
                  className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary cursor-pointer"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="hidden sm:inline-flex rounded-full"
              onClick={(e) => handleSectionLink(e, "#contact")}
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="h-0.5 w-6 bg-foreground" />
              <span className="h-0.5 w-6 bg-foreground" />
              <span className="h-0.5 w-6 bg-foreground" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-background/95"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center h-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Logo */}
              <Link 
                href="/" 
                className="absolute top-6 left-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/media/logo.png"
                  alt="MMS Events Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>

              {/* Nav Links */}
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  link.isPage ? (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-display text-3xl uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSectionLink(e, link.href)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="font-display text-3xl uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  )
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                >
                  <Button
                    size="lg"
                    className="neon-glow rounded-full mt-4"
                    onClick={(e) => handleSectionLink(e, "#contact")}
                  >
                    Book Now
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
