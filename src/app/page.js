import {
  AboutSection,
  ContactSection,
  HeroSection,
  Navbar,
  ProjectsSection,
} from "@/components";

const techStack = [
  {
    name: "Next.js",
    icon: "Layers3",
    detail: "App Router, SSR, and production-ready frontend architecture.",
  },
  {
    name: "React",
    icon: "Atom",
    detail: "Component-driven interfaces and fluid UX patterns.",
  },
  {
    name: "Express.js",
    icon: "Code2",
    detail: "Lean APIs, service orchestration, and backend integration.",
  },
  {
    name: "Linux",
    icon: "TerminalSquare",
    detail: "Server management, shell automation, and system tuning.",
  },
  {
    name: "Proxmox",
    icon: "Server",
    detail: "Virtualization and homelab infrastructure operations.",
  },
  {
    name: "Self-hosting",
    icon: "CloudCog",
    detail: "Secure services, reverse proxies, and resilient deployments.",
  },
  {
    name: "DevOps",
    icon: "Workflow",
    detail: "Automation, observability, and delivery pipelines.",
  },
  {
    name: "PostgreSQL",
    icon: "Database",
    detail: "Relational modeling and reliable data foundations.",
  },
];

const projects = [
  {
    title: "CRM System",
    category: "Operations Platform",
    description:
      "A glassy internal CRM concept focused on sales tracking, workflow visibility, and team productivity.",
    highlights: [
      "Role-based dashboards",
      "Lead pipeline management",
      "Audit-ready activity logs",
    ],
  },
  {
    title: "E-commerce Architecture",
    category: "Scalable Commerce",
    description:
      "A resilient e-commerce blueprint designed for fast browsing, durable checkout flows, and clean deployment boundaries.",
    highlights: [
      "Headless storefront",
      "Checkout performance",
      "Infrastructure automation",
    ],
  },
  {
    title: "Web Portfolio",
    category: "Personal Brand",
    description:
      "A high-contrast portfolio system blending cinematic visuals, motion polish, and a strong technical narrative.",
    highlights: [
      "Glassmorphism UI",
      "Scroll-driven motion",
      "SEO-first metadata",
    ],
  },
];

const socialLinks = {
  email: "mailto:hello@kevinsultanaherman.com",
  whatsapp: "https://wa.me/6200000000000",
  linkedin: "https://www.linkedin.com/in/kevinsultanaherman/",
  github: "https://github.com/kevinsultana",
};

export default function Home() {
  return (
    <main className="aurora-shell relative isolate overflow-hidden bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 -z-20 aurora-grid tech-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

      <HeroSection />
      <AboutSection techStack={techStack} />
      <ProjectsSection projects={projects} />
      <ContactSection socialLinks={socialLinks} />
    </main>
  );
}
