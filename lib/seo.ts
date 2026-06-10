import {
  about,
  allSkills,
  education,
  experience,
  personalInfo,
  projects,
} from "./data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://engineer-haris.vercel.app";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: siteUrl,
    sameAs: [personalInfo.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    knowsAbout: allSkills,
    description: about.paragraphs[0],
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.name} — Portfolio`,
    url: siteUrl,
    description: personalInfo.tagline,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };
}

export function getProjectsJsonLd() {
  return projects
    .filter((p) => p.url)
    .map((p) => ({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: p.name,
      description: p.description,
      url: p.url,
      author: {
        "@type": "Person",
        name: personalInfo.name,
      },
      keywords: p.tech.join(", "),
    }));
}

export const siteMetadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `${personalInfo.name} — ${personalInfo.title} with ${personalInfo.yearsExperience}+ years of experience in MERN Stack, React Native, NestJS, Swift, and Kotlin. Based in ${personalInfo.location}.`,
  keywords: [
    ...allSkills,
    personalInfo.name,
    "Full Stack Developer",
    "Software Engineer Pakistan",
    "MERN Stack Developer",
    "React Native Developer",
    "NestJS Developer",
    "Swift Developer",
    "Kotlin Developer",
    "Islamabad Developer",
  ],
  siteUrl,
};
