import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
      </main>
    </div>
  );
}
