// Content for the portfolio
export const site = {
  name: "Jyoti Goyal",
  professionalTitle: "Senior Software Engineer",
  contactEmail: "goyaljyoti163@gmail.com",
  heroIntro:
    "Specializing in frontend engineering, building scalable, high-performance SaaS platforms with React, Next.js, and TypeScript.",
  heroIntroSecondary:
    "Focused on frontend architecture, rendering performance, Core Web Vitals, and complex enterprise UI systems that scale reliably in production.",
  headline:
    "I build scalable, high-performance web interfaces for complex enterprise products.",
  summary:
    "7+ years shipping production web applications with a focus on rendering performance, Core Web Vitals, SEO, and maintainable frontend architecture.",
  location: "Bangalore, Karnataka, India",
  social: {
    github: "https://github.com/jyotiGoyal16",
    linkedin: "https://www.linkedin.com/in/jyotigoyal16/",
    leetcode: "https://leetcode.com/u/JyotiGoyal/",
  },
  githubUsername: "jyotiGoyal16",
  avatarUrl: "/profile.png",
};

// Navigation
export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

// Skills
export const skillCards = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML & CSS",
      "React Native",
    ],
  },
  {
    title: "UI & Styling",
    items: [
      "Tailwind CSS",
      "Sass",
      "Ant Design",
      "Material UI",
      "Design Systems",
    ],
  },
  {
    title: "Architecture & Performance",
    items: [
      "SSR / CSR",
      "Redux",
      "TanStack Query",
      "Core Web Vitals",
      "Performance & SEO",
    ],
  },
  {
    title: "APIs & Backend",
    items: ["REST APIs", "GraphQL", "Node.js"],
  },
  {
    title: "Tooling & Quality",
    items: ["Jest", "Vite", "Webpack", "CI/CD", "Jenkins", "GitHub"],
  },
];

// Experience
export const experience = [
  {
    title: "Senior Software Engineer",
    org: "GoGroup",
    location: "Remote",
    period: "Jun 2021 — Apr 2026",
    bullets: [
      "Architected scalable frontend systems across B2B SaaS platforms using React, Next.js, and TypeScript.",
      "Led migration from Ruby Rails frontend to Next.js SSR, reducing page load time from 6.5s to 2s.",
      "Improved Lighthouse SEO from 72 to 97 and performance from 68 to 93 through Core Web Vitals and rendering optimizations.",
      "Migrated build tooling from Webpack to Vite after internal benchmarking, reducing dev-server cold start by 10x.",
      "Built internal A/B testing and analytics platform, driving 300+ additional monthly leads.",
      "Redesigned frontend data layer from REST to GraphQL, reducing payload size by 40% and improving rendering efficiency.",
      "Standardized frontend architecture using ESLint, Husky, and reusable Ant Design patterns, reducing code inconsistencies by 70%.",
      "Led frontend engineering standards through mentorship, architectural reviews, and code quality initiatives, improving development velocity and reducing onboarding friction across teams.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Optym India Pvt. Ltd.",
    location: site.location,
    period: "Dec 2018 — Jun 2021",
    bullets: [
      "Built frontend architecture for RouteMax, a freight planning platform used across 250+ terminals and 12.5k+ optimized routes.",
      "Developed complex planner and map-based workflows, reducing freight planning time by 45%.",
      "Refactored legacy React class components into modular hooks-based architecture using Context API and MobX, accelerating feature development by 35%.",
      "Built React Native driver application with realtime navigation and communication workflows for 16k+ daily drivers.",
      "Established frontend testing standards with Jest and Enzyme, achieving 90% unit test coverage across critical modules.",
    ],
  },
];

// Projects
export const featuredProjects = [
  {
    name: "Job Application Tracker",
    description:
      "Centralizes job application emails into one dashboard with focused Gmail sync, structured parsing, and fast tracking workflows.",
    stack: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "TanStack Virtual",
      "OAuth2",
      "Gmail API",
    ],
    repo: "https://github.com/jyotiGoyal16/job-tracker",
    demo: "https://job-tracker-lake-delta.vercel.app",
  },
  {
    name: "Portfolio",
    description:
      "Personal portfolio focused on clean UX, performance-first and SEO-friendly architecture.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/jyotiGoyal16/portfolio",
    demo: "https://portfolio-demo.vercel.app",
  },
];
