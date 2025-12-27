import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
      </main>
    </div>
  );
}
