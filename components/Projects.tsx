import { projects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
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

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ScrollReveal
              key={project.name}
              variant={i % 2 === 0 ? "up" : "scale"}
              delay={i * 80}
            >
              <article className="project-card card-shine group">
                <div className="project-card-glow" aria-hidden="true" />
                <span className="project-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
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
                    className="project-link mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold"
                  >
                    Visit Project
                    <span className="project-link-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-14">
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
