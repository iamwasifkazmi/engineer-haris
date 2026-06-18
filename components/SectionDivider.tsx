import ScrollReveal from "./ScrollReveal";

export default function SectionDivider() {
  return (
    <ScrollReveal variant="fade" className="section-divider-wrap">
      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-line" />
        <span className="section-divider-diamond" />
        <span className="section-divider-line" />
      </div>
    </ScrollReveal>
  );
}
