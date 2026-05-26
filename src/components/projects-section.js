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
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="max-w-2xl">
          <p className="section-kicker text-xs font-semibold text-cyan-200/70">
            Featured projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A few standout systems framed as portfolio-ready case studies.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            These showcase the kind of product thinking I apply across client
            work, internal tooling, and infrastructure-driven builds.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.24 }}
              className="glass-card group relative overflow-hidden rounded-[1.75rem] p-6 sm:p-7"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.11),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white/60 backdrop-blur-md">
                    0{index + 1}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-cyan-300/70 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" />
                </div>

                <div className="mt-10 space-y-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/60">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-white/68 sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/72"
                    >
                      {highlight}
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
            className="glass-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1"
          >
            <FaGithub className="h-4 w-4" />
            Explore all repos on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
