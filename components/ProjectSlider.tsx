"use client";

import { useCallback, useEffect, useState, type TouchEvent } from "react";
import { projects } from "@/lib/data";

const slides = projects.filter((p) => p.featured);

export default function ProjectSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || total <= 1) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [paused, next, total]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).dataset.touchX = String(
      e.touches[0].clientX
    );
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const startX = Number(
      (e.currentTarget as HTMLElement).dataset.touchX ?? 0
    );
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  if (total === 0) return null;

  const current = slides[active];

  return (
    <div
      className="project-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <div className="project-slider-header">
        <p className="project-slider-label">Featured work</p>
        <div className="project-slider-nav">
          <button
            type="button"
            className="project-slider-btn"
            onClick={prev}
            aria-label="Previous project"
          >
            ←
          </button>
          <span className="project-slider-count" aria-live="polite">
            {String(active + 1).padStart(2, "0")}{" "}
            <span className="text-subtle">/ {String(total).padStart(2, "0")}</span>
          </span>
          <button
            type="button"
            className="project-slider-btn"
            onClick={next}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      <div className="project-slider-viewport">
        <div
          className="project-slider-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((project, i) => (
            <article
              key={project.name}
              className="project-slider-slide"
              aria-hidden={i !== active}
            >
              <div className="project-slider-slide-inner card-shine">
                <div className="project-slider-accent" aria-hidden="true">
                  <span className="project-slider-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="project-slider-accent-ring" />
                </div>

                <div className="project-slider-content">
                  <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" role="list">
                    {project.tech.map((t) => (
                      <li key={t}>
                        <span className="skill-tag text-xs">{t}</span>
                      </li>
                    ))}
                  </ul>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link btn-secondary mt-7 inline-flex px-6 py-2.5 text-sm"
                      tabIndex={i === active ? 0 : -1}
                    >
                      Visit Project
                      <span className="project-link-arrow ml-1" aria-hidden="true">
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="mt-7 inline-block text-sm text-subtle">
                      Private / NDA project
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="project-slider-footer">
        <div className="project-slider-dots" role="tablist" aria-label="Choose project">
          {slides.map((project, i) => (
            <button
              key={project.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${project.name}`}
              className={`project-slider-dot ${i === active ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="project-slider-progress" aria-hidden="true">
          <span
            className="project-slider-progress-bar"
            style={{
              width: `${((active + 1) / total) * 100}%`,
            }}
          />
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {current.name}
      </p>
    </div>
  );
}
