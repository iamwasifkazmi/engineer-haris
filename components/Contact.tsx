import { personalInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "✉",
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: "☎",
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: null,
    icon: "◎",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personalInfo.linkedin,
    icon: "in",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Connect"
          title="Let's Build Something Great"
          description="Open to full-time roles, freelance projects, and technical collaborations."
        />

        <h2 id="contact-heading" className="sr-only">
          Contact Information
        </h2>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => (
            <ScrollReveal key={link.label} delay={i * 80}>
              {link.href ? (
                <a href={link.href} className="contact-card group">
                  <span className="contact-icon">{link.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-subtle">
                      {link.label}
                    </p>
                    <p className="mt-1 text-cream transition-colors group-hover:text-gold">
                      {link.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="contact-card">
                  <span className="contact-icon">{link.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-subtle">
                      {link.label}
                    </p>
                    <p className="mt-1 text-cream">{link.value}</p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={350}>
          <div className="mt-12 text-center">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              Send an Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
