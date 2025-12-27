import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <div className="dark">
      <StructuredData />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
