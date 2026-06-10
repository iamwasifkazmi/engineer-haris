import { allSkills, skillCategories } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          description="A comprehensive toolkit spanning frontend, backend, mobile, and DevOps."
        />

        {/* SEO-visible flat skill list */}
        <p className="sr-only" id="skills-heading">
          Technical skills: {allSkills.join(", ")}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 80}>
              <article className="skill-card">
                <h3 className="mb-4 font-display text-lg font-semibold text-cream">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="skill-tag">{skill}</span>
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
