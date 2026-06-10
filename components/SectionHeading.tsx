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
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gold">
        {label}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
