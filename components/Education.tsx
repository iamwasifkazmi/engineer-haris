import { education } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Academics"
          title="Education"
          description="Foundation in computer science and software engineering."
        />

        <h2 id="education-heading" className="sr-only">
          Education History
        </h2>

        <div className="mx-auto grid max-w-3xl gap-6">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 100}>
              <article className="edu-card">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream">
                      {edu.degree}
                    </h3>
                    <p className="text-gold">{edu.institution}</p>
                  </div>
                  <time className="shrink-0 text-sm text-subtle">
                    {edu.period}
                  </time>
                </div>
                <p className="mt-3 text-sm text-muted">{edu.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
