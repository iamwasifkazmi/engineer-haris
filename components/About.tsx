import { about, personalInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: `${personalInfo.yearsExperience}+`, label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "4+", label: "Companies Served" },
  { value: "3", label: "Platforms (Web, iOS, Android)" },
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
          title="Crafting Digital Experiences"
          description={personalInfo.tagline}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="font-display text-3xl font-bold text-gold sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-subtle">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
