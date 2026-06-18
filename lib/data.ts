export const personalInfo = {
  name: "Engr Haris Khan",
  title: "Full Stack Software Engineer",
  subtitle: "MERN Stack · React Native · NestJS · Swift · Kotlin",
  email: "haris.softwareengineer@gmail.com",
  phone: "+92 344 0110318",
  location: "Islamabad, Pakistan",
  linkedin: "https://www.linkedin.com/in/hariskhan",
  yearsExperience: 7,
  credential: "Registered Software Engineer · Washington Accord",
  availability: "Open to collaborations & new opportunities",
  tagline:
    "I write code that ships — from Figma mockups to production apps across web, iOS, and Android.",
};

export const about = {
  paragraphs: [
    "I am a registered software engineer with over 7 years of professional experience delivering production-grade applications for startups and global enterprises alike. From MERN and React Native to NestJS, Swift, and Kotlin — I bring a versatile toolkit to every challenge.",
    "I specialize in translating Figma designs into pixel-perfect, responsive interfaces, architecting scalable backends, and leading teams to ship on time. Whether it's a cross-platform mobile app, a real-time web platform, or an enterprise management system — I focus on clean code, performance, and user experience.",
    "Currently serving as Full Stack Developer & Team Lead at MakTek AI, I oversee end-to-end project delivery while mentoring developers and driving technical excellence across the stack.",
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Laravel",
      "MongoDB",
      "MySQL",
      "Socket.io",
      "Strapi",
      "REST APIs",
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      "React Native",
      "Swift",
      "Kotlin",
      "iOS",
      "Android",
      "Cross-platform Apps",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Vercel",
      "Netlify",
      "Heroku",
      "GitHub",
      "CI/CD",
      "Git",
      "Jira",
      "Slack",
      "Trello",
      "ClickUp",
      "Postman",
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);

export const experience = [
  {
    company: "MakTek AI",
    role: "Full Stack Developer & Team Lead",
    period: "Dec 2023 — Present",
    location: "Remote",
    highlights: [
      "Lead MERN stack development with React, Next.js, Node.js, and Express.js for dynamic web applications.",
      "Build cross-platform mobile apps for iOS and Android using React Native, Swift, and Kotlin.",
      "Convert Figma designs into responsive, production-ready code for web and mobile.",
      "Lead a development team, coordinating delivery timelines and mentoring junior engineers.",
      "Architect NestJS microservices and real-time features with Socket.io.",
    ],
  },
  {
    company: "PowerNow Tech",
    role: "MERN Stack Developer",
    period: "Aug 2023 — Nov 2023",
    location: "Remote",
    highlights: [
      "Converted Figma designs to React.js components with full API integration.",
      "Collaborated on diverse web projects emphasizing innovation and code quality.",
      "Ensured pixel-perfect UI implementation across responsive breakpoints.",
    ],
  },
  {
    company: "TechSol International",
    role: "MERN Stack Developer (Part-time)",
    period: "Jun 2023 — Sep 2023",
    location: "Remote",
    highlights: [
      "Designed and implemented server-side logic, REST APIs, and database schemas.",
      "Optimized application performance and enforced data security best practices.",
      "Contributed to robust mobile and web application development.",
    ],
  },
  {
    company: "Koncept Solution International",
    role: "Full Stack Developer",
    period: "Aug 2021 — Aug 2023",
    location: "Global · Remote",
    highlights: [
      "Developed and maintained React.js applications for inventory, accounting, and enterprise systems.",
      "Designed reusable UI components, conducted code reviews, and mentored junior developers.",
      "Integrated third-party APIs and optimized frontend performance across projects.",
    ],
  },
];

export const projects = [
  {
    name: "MakTek AI Website",
    description:
      "Corporate AI platform website built with Next.js, featuring modern design and optimized performance.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://maktek.ai/",
    featured: true,
  },
  {
    name: "Kchat",
    description:
      "Real-time communication platform with modern React architecture and seamless user experience.",
    tech: ["React.js", "Node.js", "Socket.io"],
    url: "https://kchat.website/",
    featured: true,
  },
  {
    name: "Frenchy De Dubai",
    description:
      "Elegant restaurant and lifestyle brand website with Express.js backend and Next.js frontend.",
    tech: ["Next.js", "Express.js", "MongoDB"],
    url: "https://lesfrenchydedubai.com/",
    featured: true,
  },
  {
    name: "CallZipper",
    description:
      "Freelance marketplace with web and mobile applications connecting clients with service providers.",
    tech: ["MERN Stack", "React Native", "Socket.io"],
    url: null,
    featured: true,
  },
  {
    name: "Laundry Service App",
    description:
      "Dual-sided mobile app (Customer & Provider) with Figma-designed UI and Node.js backend.",
    tech: ["React Native", "Node.js", "Figma"],
    url: null,
    featured: false,
  },
  {
    name: "School Management System",
    description:
      "Comprehensive MERN-based platform for academic administration, attendance, and reporting.",
    tech: ["MERN Stack", "MongoDB", "Express.js"],
    url: null,
    featured: false,
  },
  {
    name: "ISP Billing Software",
    description:
      "Full-stack billing and subscription management system for internet service providers.",
    tech: ["MERN Stack", "MySQL", "React.js"],
    url: null,
    featured: false,
  },
  {
    name: "Property Portal",
    description:
      "Real estate listing platform with advanced search, filters, and responsive property showcases.",
    tech: ["React.js", "Node.js", "MongoDB"],
    url: null,
    featured: false,
  },
  {
    name: "uPVC Doors & Windows Software",
    description:
      "Pakistan's leading uPVC project management and quotation system with dynamic pricing.",
    tech: ["React.js", "Node.js", "MySQL"],
    url: null,
    featured: false,
  },
  {
    name: "Inventory Management — Eastern Highway",
    description:
      "Enterprise inventory tracking system with real-time stock management and reporting.",
    tech: ["React.js", "Node.js", "MongoDB"],
    url: null,
    featured: false,
  },
  {
    name: "Inventory Management — Maryam Memorial Hospital",
    description:
      "Healthcare inventory system for medical supplies tracking and procurement workflows.",
    tech: ["React.js", "Node.js", "MySQL"],
    url: null,
    featured: false,
  },
  {
    name: "Digital Cards",
    description:
      "Digital business card platform enabling professionals to share contact info seamlessly.",
    tech: ["MERN Stack", "React.js", "MongoDB"],
    url: null,
    featured: false,
  },
];

export const education = [
  {
    degree: "BSc Computer Software Engineering",
    institution: "University of Engineering & Technology, Mardan",
    period: "Sep 2018 — Aug 2022",
    detail: "GPA 3.38 / 4.0",
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Unicom College of Higher Studies, Mardan",
    period: "May 2016 — May 2018",
    detail: "Topper of the Class · 831/1100 · 10th Position BISE Mardan",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
