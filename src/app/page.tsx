import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
