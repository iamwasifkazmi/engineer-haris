import { personalInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {personalInfo.yearsExperience}+ Years of Engineering Excellence
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1
            id="hero-heading"
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span key={word} className="inline-block">
                {i === 1 ? (
                  <span className="text-gradient">{word} </span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            {personalInfo.title}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mx-auto mt-3 max-w-xl text-sm text-subtle sm:text-base">
            {personalInfo.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="mt-20 flex items-center justify-center gap-2 text-subtle">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="scroll-indicator" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
