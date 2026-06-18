import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <ScrollReveal variant="up" className="mb-9 text-center">
      <p className="section-label mb-4 text-sm font-medium uppercase tracking-[0.28em] text-gold">
        {label}
      </p>
      <h2 className="section-title font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <span className="section-title-line" aria-hidden="true" />
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
