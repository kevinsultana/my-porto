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
    title: "Operations Command Center",
    category: "Internal Dashboard",
    description:
      "A polished operations dashboard concept for tracking workflows, records, and daily team activity across multiple services.",
    tags: ["Next.js", "React", "Role-based UI"],
    accent: "from-sky-500 via-blue-600 to-indigo-900",
  },
  {
    title: "Portfolio Experience System",
    category: "Personal Brand",
    description:
      "A storytelling portfolio structure with image-led sections, bold typography, and smooth motion that feels premium on every screen.",
    tags: ["Framer Motion", "Tailwind CSS", "Design Systems"],
    accent: "from-amber-400 via-orange-500 to-rose-600",
  },
  {
    title: "Linux Server Toolkit",
    category: "Infrastructure",
    description:
      "A lightweight admin surface for server management, service monitoring, and routine DevOps tasks across self-hosted environments.",
    tags: ["Linux", "Automation", "Observability"],
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    title: "Next.js Commerce Shell",
    category: "Scalable Frontend",
    description:
      "A modular storefront shell built for fast page transitions, strong content hierarchy, and easy integration with modern backend services.",
    tags: ["App Router", "SEO", "Performance"],
    accent: "from-violet-500 via-blue-600 to-slate-900",
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
    <main className="portfolio-shell relative isolate overflow-hidden bg-background text-foreground selection:bg-blue-500/20 selection:text-slate-950">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 -z-20 subtle-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(245,158,11,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_28%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <HeroSection
          socialLinks={socialLinks}
          heroStats={[
            { label: "Next.js ecosystem", value: "App Router" },
            { label: "DevOps & Linux", value: "Infrastructure" },
            { label: "Full-stack delivery", value: "End to end" },
          ]}
        />
        <AboutSection techStack={techStack} />
        <ProjectsSection projects={projects} />
        <ContactSection
          socialLinks={socialLinks}
          location="Bekasi, Indonesia"
        />
      </div>
    </main>
  );
}
