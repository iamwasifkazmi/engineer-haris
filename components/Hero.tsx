"use client";

import { personalInfo } from "@/lib/data";
import { HeroIntro, HeroWord } from "./HeroIntro";
import ProfileCard from "./ProfileCard";

const nameWords = personalInfo.name.split(" ");

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-[90vh] items-center px-4 pt-24 pb-10 sm:px-6"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <HeroIntro delay={100}>
            <p className="hero-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-sm text-gold">
              <span className="hero-badge-dot" aria-hidden="true" />
              {personalInfo.credential}
            </p>
          </HeroIntro>

          <h1
            id="hero-heading"
            className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl"
          >
            {nameWords.map((word, i) => (
              <HeroWord
                key={`${word}-${i}`}
                highlight={word === "Haris"}
                delay={200 + i * 120}
              >
                {`${word}${i < nameWords.length - 1 ? " " : ""}`}
              </HeroWord>
            ))}
          </h1>

          <HeroIntro delay={650}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
              {personalInfo.title}
              <span className="text-gold"> — </span>
              <em className="font-display not-italic text-cream/90">
                turning ideas into shipped products
              </em>
            </p>
          </HeroIntro>

          <HeroIntro delay={800}>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-subtle sm:text-base lg:mx-0">
              {personalInfo.subtitle}
            </p>
          </HeroIntro>

          <HeroIntro delay={950}>
            <p className="mx-auto mt-3 max-w-lg text-xs uppercase tracking-[0.2em] text-subtle lg:mx-0">
              {personalInfo.location}
            </p>
          </HeroIntro>

          <HeroIntro delay={1100}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="#projects" className="btn-primary btn-shine">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Let&apos;s Talk
              </a>
            </div>
          </HeroIntro>

          <HeroIntro delay={1250}>
            <p className="mt-8 text-sm text-subtle">{personalInfo.availability}</p>
          </HeroIntro>
        </div>

        <HeroIntro delay={500} className="mx-auto w-full max-w-sm lg:max-w-none">
          <ProfileCard />
        </HeroIntro>
      </div>
    </section>
  );
}
