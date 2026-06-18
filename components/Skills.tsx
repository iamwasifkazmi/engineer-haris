import { allSkills, skillCategories } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding section-alt"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Expertise"
          title="Tools I Work With Daily"
          description="Technologies picked up on real projects — not just listed on a resume."
        />

        <p className="sr-only" id="skills-heading">
          Technical skills: {allSkills.join(", ")}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <ScrollReveal
              key={category.title}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={i * 70}
            >
              <article className="skill-card card-shine">
                <div className="skill-card-header">
                  <span className="skill-card-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2" role="list">
                  {category.skills.map((skill, j) => (
                    <li key={skill}>
                      <span
                        className="skill-tag"
                        style={{ transitionDelay: `${j * 30}ms` }}
                      >
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
