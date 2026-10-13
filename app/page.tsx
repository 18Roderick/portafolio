import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Process } from "@/components/process";
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
      <Process />
      <Experience />
      <Stack />
      <Projects />
      <AILab />
      <Contact />
    </>
  );
}
