import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="dark">
      <Navbar />
      <Hero />
    </main>
  );
}
