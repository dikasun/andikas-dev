import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Journeys from "@/components/sections/Journeys";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <main
            className="flex flex-col min-h-fit max-w-full lg:max-w-80% xl:max-w-65% 2xl:max-w-55% mt-28 mx-auto px-12 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-20 text-rich-black">
            <Hero/>
            <Skills/>
            <Journeys/>
            <Projects/>
            <Contact/>
            <ScrollToTopButton/>
        </main>
    )
}
