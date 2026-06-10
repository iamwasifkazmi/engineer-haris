import { projects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Portfolio"
          title="Selected Projects"
          description="Industrial and client projects spanning web, mobile, and enterprise systems."
        />

        <h2 id="projects-heading" className="sr-only">
          Project Portfolio
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 80}>
              <article className="project-card group">
                <div className="project-card-glow" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold text-cream">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" role="list">
                  {project.tech.map((t) => (
                    <li key={t}>
                      <span className="skill-tag text-xs">{t}</span>
                    </li>
                  ))}
                </ul>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors group-hover:gap-2"
                  >
                    Visit Project
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <ScrollReveal>
              <h3 className="mb-6 text-center font-display text-2xl text-cream">
                More Projects
              </h3>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, i) => (
                <ScrollReveal key={project.name} delay={i * 60}>
                  <article className="project-card-sm">
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
