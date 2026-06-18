import { about, personalInfo, portfolioStats } from "@/lib/data";
import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const stats = [
  {
    value: personalInfo.yearsExperience,
    suffix: "+",
    label: "Years in the field",
  },
  {
    value: portfolioStats.projectsDelivered,
    suffix: "+",
    label: "Projects delivered",
  },
  {
    value: portfolioStats.liveProducts,
    suffix: "+",
    label: "Live products",
  },
  {
    value: portfolioStats.teamsAndCompanies,
    suffix: "+",
    label: "Teams & companies",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About Me"
          title="The Person Behind the Code"
          description={personalInfo.tagline}
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal variant="left">
            <div className="about-prose space-y-6 text-base leading-[1.85] text-muted">
              {about.paragraphs.map((p, i) => (
                <p
                  key={p.slice(0, 40)}
                  className={i === 0 ? "about-lead text-lg text-cream/90" : ""}
                >
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="stat-card"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="font-display text-3xl font-bold text-gold sm:text-4xl">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-2 text-sm text-subtle">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
