import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { AILab } from "@/components/ai";
import { Experience } from "@/components/experience";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Stack />
      <Projects />
      <AILab />
      <Contact />
    </>
  );
}
