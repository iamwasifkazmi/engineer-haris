import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
