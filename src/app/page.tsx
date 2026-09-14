import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { GlobalScene } from "@/components/effects/GlobalScene";
import { Interlude } from "@/components/sections/Interlude";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <GlobalScene />
      <Navigation />
      
      <div className="flex flex-col w-full relative z-10">
        <Hero />
        <Interlude 
          text="Intelligence&#10;into&#10;Interaction." 
          subtitle="Core Philosophy" 
        />
        <About />
        <Skills />
        <Interlude 
          text="Systems&#10;that&#10;Think." 
          subtitle="Selected Works" 
        />
        <Projects />
        <Experience />
        <Interlude 
          text="Validation&#10;of&#10;Knowledge." 
          subtitle="Credentials" 
        />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
