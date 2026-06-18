import { projects } from "@/lib/data";
import ProjectSlider from "./ProjectSlider";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding section-alt"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Portfolio"
          title="Work That Went Live"
          description="Products I've helped design, build, and ship for clients and companies."
        />

        <h2 id="projects-heading" className="sr-only">
          Project Portfolio
        </h2>

        <ScrollReveal variant="up">
          <ProjectSlider />
        </ScrollReveal>

        {others.length > 0 && (
          <div className="mt-10">
            <ScrollReveal variant="fade">
              <h3 className="mb-8 text-center font-display text-2xl text-cream">
                More Along the Way
              </h3>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, i) => (
                <ScrollReveal key={project.name} variant="up" delay={i * 50}>
                  <article className="project-card-sm card-shine">
                    <h4 className="font-medium text-cream">{project.name}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-subtle">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs text-muted">
                      {project.tech.join(" · ")}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
