export const personalInfo = {
  name: "Engr Haris Khan",
  title: "Full Stack Software Engineer",
  subtitle: "MERN Stack · React Native · NestJS · Swift · Kotlin · App Store & Play Store",
  email: "haris.softwareengineer@gmail.com",
  phone: "+92 344 0110318",
  location: "Islamabad, Pakistan",
  linkedin: "https://pk.linkedin.com/in/haris-khan-1b0b681a8",
  yearsExperience: 7,
  credential: "Registered Software Engineer · Washington Accord",
  availability: "Open to collaborations & new opportunities",
  tagline:
    "I write code that ships — from Figma mockups to live apps on the web, Google Play, and the Apple App Store.",
};

export const about = {
  paragraphs: [
    "I am a registered software engineer with over 7 years of professional experience delivering production-grade applications for startups and global enterprises alike. From MERN and React Native to NestJS, Swift, and Kotlin — I bring a versatile toolkit to every challenge.",
    "I specialize in translating Figma designs into pixel-perfect, responsive interfaces, architecting scalable backends, and leading teams to ship on time. From build to release, I'm experienced publishing apps to Google Play Console and Apple App Store Connect — handling signing, metadata, review submissions, and store compliance.",
    "Currently serving as Full Stack Software Engineer at Humai.ae, I build and ship AI-powered web and mobile products while collaborating with cross-functional teams across the stack.",
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
      "Google Play Console",
      "App Store Connect",
      "App Store Publishing",
      "Play Store Deployment",
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
    company: "Humai.ae",
    role: "Full Stack Software Engineer",
    period: "Jan 2025 — Present",
    location: "Remote",
    highlights: [
      "Develop full-stack web applications with React, Next.js, Node.js, and NestJS for AI-driven products.",
      "Built Huscribe — a voice-first sales AI platform with CRM integrations, WhatsApp workflows, and real-time deal intelligence.",
      "Build and maintain cross-platform mobile experiences using React Native, Swift, and Kotlin.",
      "Expert in end-to-end app store releases — uploading, signing, and publishing to Google Play Console and Apple App Store.",
      "Translate Figma designs into responsive, production-ready interfaces for web and mobile.",
      "Collaborate with product and engineering teams to deliver features on schedule with high code quality.",
      "Integrate APIs, optimize performance, and implement scalable backend services.",
    ],
  },
  {
    company: "MakTek AI",
    role: "Full Stack Developer & Team Lead",
    period: "Dec 2023 — Jan 2025",
    location: "Remote",
    highlights: [
      "Led MERN stack development with React, Next.js, Node.js, and Express.js for dynamic web applications.",
      "Built cross-platform mobile apps for iOS and Android using React Native, Swift, and Kotlin.",
      "Managed app releases on Google Play Console and Apple App Store — from build submission to production rollout.",
      "Converted Figma designs into responsive, production-ready code for web and mobile.",
      "Led a development team, coordinating delivery timelines and mentoring junior engineers.",
      "Architected NestJS microservices and real-time features with Socket.io.",
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
    name: "Huscribe",
    description:
      "Voice AI sales platform built at Humai.ae — captures deal context across calls, email, and WhatsApp, updates CRMs automatically, and gives sales teams intelligence reports on pipeline health.",
    tech: ["Next.js", "React", "NestJS", "TypeScript", "WhatsApp API"],
    url: "https://huscribe.com/",
    featured: true,
  },
  {
    name: "Fatoorty",
    description:
      "Restaurant operating system by GLABS — QR ordering, multi-branch management, analytics, and a full portal for Egyptian restaurants to run daily operations.",
    tech: ["Next.js", "React", "NestJS", "TypeScript", "QR Ordering"],
    url: "https://fatoorty.app/home",
    featured: true,
  },
  {
    name: "D&SH Limited",
    description:
      "Professional home and commercial improvement services website for a UK-based company — showcasing interior design, carpet fittings, painting, deep cleaning, and quote-driven lead generation.",
    tech: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    url: "https://www.dshlimited.uk/",
    featured: true,
  },
  {
    name: "Oldham Snooker Lounge",
    description:
      "Online table booking platform for a UK snooker lounge — lets customers choose a space, pick a time, and confirm reservations with booking references.",
    tech: ["Next.js", "React", "NestJS", "Online Booking", "POS Integration"],
    url: "https://pos.oldhamsnookerlounge.com/book",
    featured: true,
  },
  {
    name: "MakTek AI Website",
    description:
      "Corporate AI platform website built with Next.js, featuring modern design and optimized performance.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://maktek.ai/",
    featured: true,
  },
  {
    name: "CH Properties Investment",
    description:
      "Property investment platform showcasing real estate opportunities, lead capture, and a polished brand presence for CH Properties Investment.",
    tech: ["Next.js", "React", "Tailwind CSS", "Property Listings"],
    url: "https://chpropertiesinvestment.com/",
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

export const portfolioStats = {
  projectsDelivered: 20,
  liveProducts: projects.filter((p) => p.url).length,
  teamsAndCompanies: 5,
  platformsMastered: 3,
};

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
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
