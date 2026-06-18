import { experience } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Career"
          title="Where I've Built"
          description="Real roles, real deadlines, real products — from startups to global teams."
        />

        <h2 id="experience-heading" className="sr-only">
          Professional Work Experience
        </h2>

        <div className="relative space-y-0">
          <div className="timeline-line" aria-hidden="true" />

          {experience.map((job, i) => (
            <ScrollReveal key={job.company} variant="left" delay={i * 90}>
              <article className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card card-shine">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="timeline-index" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-cream">
                        {job.role}
                      </h3>
                      <p className="text-gold">{job.company}</p>
                    </div>
                    <div className="text-left text-sm text-subtle sm:text-right">
                      <time>{job.period}</time>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2.5" role="list">
                    {job.highlights.map((h) => (
                      <li
                        key={h.slice(0, 50)}
                        className="timeline-highlight flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
