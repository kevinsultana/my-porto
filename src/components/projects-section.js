"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  X,
  Smartphone,
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

// Fungsi pemetaan Tag ke URL Logo Devicon disesuaikan dengan Tech Stack Anda
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
    // Tambahan bawaan agar tidak error jika ada tech lama
    Laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  };
  return icons[tag]; // Mengembalikan URL logo jika ada, jika tidak ada akan mengembalikan undefined (hanya menampilkan teks)
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

function ProjectCard({ project, index }) {
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
  const image =
    data.image ||
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
  const tags = data.tags || [];
  const accent = data.accent || "from-sky-500 via-blue-600 to-indigo-900";

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
        className="bg-surface border border-surface-border rounded-4xl overflow-hidden group hover:shadow-xl hover:border-brand-amber/30 transition-all duration-300 hover:-translate-y-1.5 transform-gpu h-full flex flex-col cursor-pointer"
      >
        <div
          className={`relative aspect-video w-full overflow-hidden border-b border-brand-text/5 bg-linear-to-br ${accent}`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-amber/5 transition-colors duration-300 pointer-events-none" />
          <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
            {category}
          </div>
        </div>

        <div className="p-4 md:p-6 flex flex-col flex-1">
          <h4 className="text-2xl font-black text-brand-ink mb-3 group-hover:text-brand-amber transition-colors duration-300 line-clamp-1">
            {title}
          </h4>

          <p
            className="text-brand-ink/70 font-medium mb-6"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "normal",
              overflowWrap: "normal",
              lineHeight: "1.5rem",
              maxHeight: "3rem",
            }}
          >
            {description || "No description available."}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-surface-border/70">
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-text/5 text-brand-ink/80 text-xs font-bold rounded-full border border-surface-border/70 transition-colors group-hover:bg-surface group-hover:shadow-sm group-hover:border-brand-text/10"
                >
                  {/* Cek apakah logonya ada di fungsi mapping kita */}
                  <TagIcon tag={tag} />
                  {tag}
                </span>
              ))}

              {tags.length > 3 && (
                <span className="flex items-center px-3 py-1.5 bg-brand-text/5 text-brand-ink/50 text-xs font-bold rounded-full border border-surface-border/70">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="relative z-10 mx-4 max-w-3xl rounded-2xl bg-surface p-4 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-48 shrink-0 rounded-lg object-cover"
                />

                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black text-brand-ink">
                        {title}
                      </h3>
                      <p className="text-sm text-brand-ink/70">{category}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Tutup"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface/60 text-brand-ink/80 hover:bg-surface"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="text-sm text-brand-ink/75">{description}</p>

                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-2 rounded-full bg-brand-text/5 px-3 py-1 text-xs font-bold text-brand-ink/80 border border-surface-border/70"
                        >
                          <TagIcon tag={t} />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex gap-3">
                    {data.liveDemoUrl && (
                      <a
                        href={data.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-3 py-2 text-sm font-bold text-white"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}

                    {data.githubUrl && (
                      <a
                        href={data.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-surface-border px-3 py-2 text-sm font-bold text-brand-ink"
                      >
                        <Code2 className="h-4 w-4" /> Source Code
                      </a>
                    )}
                  </div>
                </div>
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-amber">
            {dict?.eyebrow || "Selected Work"}
          </p>
          <h3 className="mt-2 text-3xl font-black text-brand-text sm:text-4xl">
            {dict?.title || "Projects"}{" "}
            <span className="text-brand-pink">
              {dict?.accent || "Selected"}
            </span>
            .
          </h3>
        </div>
        <p className="max-w-xl text-sm font-medium leading-relaxed text-brand-ink/65 sm:text-right">
          {dict?.subtitle ||
            "Every project card is rendered in a responsive grid, so nothing gets hidden behind a single placeholder card."}
        </p>
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        {mobileProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
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
