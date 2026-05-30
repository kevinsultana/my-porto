"use client";

import { motion } from "framer-motion";

// Fungsi pemetaan Tag ke URL Logo Devicon disesuaikan dengan Tech Stack Anda
const getTechIcon = (tag) => {
  const icons = {
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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

function ProjectCard({ project, index }) {
  const data = project?.frontmatter || project?.meta || project || {};

  const title = data.title || "Proyek Tanpa Judul";
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
      <div className="bg-surface border border-surface-border rounded-4xl overflow-hidden group hover:shadow-xl hover:border-brand-amber/30 transition-all duration-300 hover:-translate-y-1.5 transform-gpu h-full flex flex-col">
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

        <div className="p-6 md:p-8 flex flex-col flex-1">
          <h4 className="text-2xl font-black text-brand-ink mb-3 group-hover:text-brand-amber transition-colors duration-300 line-clamp-1">
            {title}
          </h4>

          <p className="text-brand-ink/70 font-medium leading-relaxed mb-6 line-clamp-2 flex-1">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-surface-border/70">
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-text/5 text-brand-ink/80 text-xs font-bold rounded-full border border-surface-border/70 transition-colors group-hover:bg-surface group-hover:shadow-sm group-hover:border-brand-text/10"
                >
                  {/* Cek apakah logonya ada di fungsi mapping kita */}
                  {getTechIcon(tag) && (
                    <img
                      src={getTechIcon(tag)}
                      alt={tag}
                      className="w-3.5 h-3.5 object-contain"
                    />
                  )}
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
    </motion.div>
  );
}

export default function ProjectsSection({ projects = [], dict }) {
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title || project.name || index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
