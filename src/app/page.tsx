import Hero from "@/common/widgets/Hero";
import Skills from "@/common/widgets/Skills";
import Journeys from "@/common/widgets/Journeys";
import Projects from "@/common/widgets/Projects";
import Contact from "@/common/widgets/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Journeys />
      <Projects limit={2} />
      <Contact />
    </main>
  );
}
