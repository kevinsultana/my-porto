"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="max-w-2xl">
          <p className="section-kicker text-xs font-semibold text-slate-500">
            Featured projects
          </p>
          <h2 className="text-balance mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            A collection of projects I’ve built, ranging from user interfaces to
            complex backend systems.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            These showcase the kind of product thinking I apply across client
            work, internal tooling, and infrastructure-driven builds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="hover-aurora-glow glass-card group relative w-full overflow-hidden rounded-[30px] bg-white/90 p-0"
            >
              <div
                className={`relative min-h-60 overflow-hidden bg-linear-to-br ${project.accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_42%)]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-white/40" />
                <div className="relative flex h-full min-h-60 flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
                      0{index + 1}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/90 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  <div className="relative ml-auto flex w-full max-w-48 items-center justify-center rounded-[28px] border border-white/20 bg-white/12 px-5 py-7 text-center text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-md">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.26em] text-white/76">
                        Feature
                      </p>
                      <p className="mt-2 text-base font-semibold leading-tight">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex h-full flex-col p-6 sm:p-7">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                      {project.category}
                    </p>
                    <h3 className="text-balance mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-950">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={itemVariants} className="flex justify-start">
          <a
            href="https://github.com/kevinsultana"
            target="_blank"
            rel="noreferrer"
            className="glass-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:text-slate-950"
          >
            <FaGithub className="h-4 w-4" />
            Explore all repos on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
