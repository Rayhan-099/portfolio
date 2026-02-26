import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Hero3D } from "@/components/Hero3D";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-x-hidden">
      <Hero3D />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
