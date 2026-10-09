"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  X,
  Smartphone,
  Globe,
  Zap,
  ArrowUpRight,
  MonitorSmartphone,
  ShoppingBag,
  HandHeart,
  GraduationCap,
  Layers3,
  LayoutDashboard,
  BadgeCheck,
  BriefcaseBusiness,
  FolderCode,
  CreditCard,
} from "lucide-react";

const getTechIcon = (tag) => {
  const icons = {
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    Prisma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    PostCSS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg",
    ESLint:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg",
    "React Native":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
    Supabase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    Linux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    Laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    MinIO:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/minio/minio-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  };
  return icons[tag];
};

const getTagIcon = (tag) => {
  const tagIcons = {
    "Mobile Development": Smartphone,
    "Mobile App": Smartphone,
    Android: Smartphone,
    iOS: Smartphone,
    "Landing Page": LayoutDashboard,
    "Company Profile": BriefcaseBusiness,
    Frontend: MonitorSmartphone,
    "Final Project": FolderCode,
    "Non-profit": HandHeart,
    "E-commerce": ShoppingBag,
    "E-commerce Platform": ShoppingBag,
    Midtrans: CreditCard,
    SaaS: LayoutDashboard,
    Hacktiv8: GraduationCap,
    "React Native": Smartphone,
    Vite: Layers3,
    Prisma: BadgeCheck,
  };

  return tagIcons[tag] || null;
};

function TagIcon({ tag }) {
  const iconUrl = getTechIcon(tag);
  const Icon = getTagIcon(tag);

  if (iconUrl) {
    return (
      <img src={iconUrl} alt={tag} className="h-3.5 w-3.5 object-contain" />
    );
  }

  if (Icon) {
    return <Icon className="h-3.5 w-3.5" />;
  }

  return null;
}

function BrowserMockFrame({ title, image, displayUrl, isMobile, category }) {
  if (isMobile) {
    return (
      <div className="relative aspect-16/10 w-full overflow-hidden border-b border-surface-border/80 bg-zinc-950 flex flex-col">
        <div className="flex h-7 items-center justify-between border-b border-white/10 bg-zinc-900/90 px-3 text-[10px] text-zinc-400 select-none">
          <span className="font-mono font-medium">9:41</span>
          <div className="h-2 w-12 rounded-full bg-zinc-700/80" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
            iOS / Android
          </span>
        </div>
        <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-2.5 bg-zinc-950">
          <div className="relative h-full aspect-9/16 max-h-full overflow-hidden rounded-xl border border-white/15 shadow-md">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, 220px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden border-b border-surface-border/80 bg-zinc-950 flex flex-col">
      <div className="flex h-7 items-center justify-between border-b border-surface-border/80 bg-zinc-100/90 dark:bg-zinc-900/90 px-3 select-none">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-surface-border/70 bg-white/80 dark:bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono text-muted max-w-42.5 sm:max-w-50 truncate">
          <Globe className="h-2.5 w-2.5 shrink-0 opacity-70" />
          <span className="truncate">
            {displayUrl || "https://project.local"}
          </span>
        </div>
        <span className="text-[10px] font-mono text-muted uppercase tracking-wider hidden sm:inline-block truncate max-w-20">
          {category}
        </span>
      </div>
      <div className="relative flex-1 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index, dict }) {
  const data = project?.frontmatter || project?.meta || project || {};
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const title = data.name || "Proyek Tanpa Judul";
  const category = data.category || "Project";
  const description = data.description || "";
  const architecture = data.architecture || [];
  const impact = data.impact || "";
  const displayUrl = data.displayUrl || "";
  const isMobile = Boolean(data.isMobile);
  const image = data.image || "/images/itsm.png";
  const tags = data.tags || [];
  const technologies = data.technologies || [];
  const challengeImpactLabel =
    dict?.challengeImpactLabel || "Technical Challenge & Impact";
  const architectureLabel = dict?.architectureLabel || "Architecture";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(true);
        }}
        className="bg-surface border border-surface-border rounded-3xl overflow-hidden group hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 transform-gpu h-full flex flex-col cursor-pointer"
      >
        <BrowserMockFrame
          title={title}
          image={image}
          displayUrl={displayUrl}
          isMobile={isMobile}
          category={category}
        />

        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="text-lg sm:text-xl font-black tracking-tight text-brand-text group-hover:text-brand-blue transition-colors duration-200 line-clamp-1">
              {title}
            </h4>
          </div>

          {architecture.length > 0 && (
            <div className="flex flex-wrap gap-1.5 my-2">
              {architecture.map((arch, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-md border border-surface-border bg-brand-text/5 px-2 py-0.5 text-[11px] font-semibold text-brand-text/90 font-mono"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                  {arch}
                </span>
              ))}
            </div>
          )}

          {impact ? (
            <div className="my-2 rounded-xl border border-surface-border/90 bg-brand-text/2 dark:bg-white/2 p-2.5 text-xs leading-relaxed">
              <div className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-amber mb-1">
                <Zap className="h-3 w-3 shrink-0" />
                <span>{challengeImpactLabel}</span>
              </div>
              <p className="text-brand-text/75 font-medium line-clamp-2 text-[12px] leading-relaxed">
                {impact}
              </p>
            </div>
          ) : (
            description && (
              <p className="text-brand-text/70 text-xs font-medium mb-3 line-clamp-2">
                {description}
              </p>
            )
          )}

          <div className="mt-auto pt-3 border-t border-surface-border/80 flex items-center justify-between text-xs">
            <div className="flex flex-wrap gap-1.5">
              {technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-full border border-surface-border bg-surface-strong px-2 py-0.5 text-[10px] font-bold text-brand-text/80 shadow-xs"
                >
                  <TagIcon tag={tech} />
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="rounded-full border border-surface-border bg-surface-strong px-1.5 py-0.5 text-[10px] font-bold text-brand-text/70 shadow-xs">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-blue opacity-80 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="relative z-10 w-full max-w-3xl rounded-3xl border border-surface-border bg-surface p-5 sm:p-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold">
                      {category}
                    </span>
                    {isMobile && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-2 py-0.5 text-[10px] font-mono font-bold text-brand-purple">
                        <Smartphone className="h-3 w-3" /> Mobile
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-brand-text tracking-tight">
                    {title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Tutup"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface-strong text-brand-text/80 hover:bg-surface hover:text-brand-text transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="rounded-2xl border border-surface-border overflow-hidden mb-5">
                <BrowserMockFrame
                  title={title}
                  image={image}
                  displayUrl={displayUrl}
                  isMobile={isMobile}
                  category={category}
                />
              </div>

              {architecture.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-2">
                    {architectureLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {architecture.map((arch, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-surface-border bg-brand-text/5 px-3 py-1 font-mono text-xs font-semibold text-brand-text"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {impact && (
                <div className="mb-4 rounded-2xl border border-surface-border bg-brand-text/3 dark:bg-white/3 p-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-amber mb-1.5">
                    <Zap className="h-3.5 w-3.5" />
                    <span>{challengeImpactLabel}</span>
                  </div>
                  <p className="text-sm font-medium text-brand-text/85 leading-relaxed">
                    {impact}
                  </p>
                </div>
              )}

              <div className="mb-5">
                <p className="text-sm text-brand-text/75 leading-relaxed">
                  {description}
                </p>
              </div>

              {tags.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-brand-text/5 px-3 py-1 text-xs font-bold text-brand-text/80"
                      >
                        <TagIcon tag={t} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-surface-border">
                {data.liveDemoUrl && (
                  <a
                    href={data.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-brand-blue/90 transition-colors shadow-sm"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}

                {data.githubUrl && (
                  <a
                    href={data.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-surface-strong px-4 py-2.5 text-xs sm:text-sm font-bold text-brand-text hover:border-brand-text/30 transition-colors"
                  >
                    <Code2 className="h-4 w-4" /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProjectsSection({ projects = [], dict }) {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const projectList = projects.length > 0 ? projects : dict?.projects || [];
  const hasMoreProjects = projectList.length > 3;
  const mobileProjects = showAllMobile ? projectList : projectList.slice(0, 3);

  return (
    <section id="projects" className="relative py-10 sm:py-14">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-amber font-mono">
            {dict?.eyebrow || "Selected Work"}
          </p>
          <h3 className="mt-2 text-3xl font-black text-brand-text sm:text-4xl tracking-tight">
            {dict?.title || "Projects"}{" "}
            <span className="text-brand-pink">
              {dict?.accent || "Selected"}
            </span>
            .
          </h3>
        </div>
        <p className="max-w-xl text-sm font-medium leading-relaxed text-brand-text/70 sm:text-right">
          {dict?.subtitle ||
            "Every project card is rendered in a responsive grid, showcasing real engineering architecture and impact."}
        </p>
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            dict={dict}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        {mobileProjects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            dict={dict}
          />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="mt-8 flex justify-center md:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-bold text-brand-text shadow-sm transition-all hover:border-brand-amber/30 hover:text-brand-amber"
          >
            <span>
              {showAllMobile
                ? dict?.showLess || "Show less"
                : dict?.showMore || "Show more"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
