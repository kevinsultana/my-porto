"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Boxes,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Atom,
  Boxes,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
};

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection({ techStack }) {
  return (
    <section id="about" className="scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={containerVariants}
        className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-4xl p-7 sm:p-8 lg:p-10"
        >
          <p className="section-kicker text-xs font-semibold text-slate-500">
            About me
          </p>
          <h2 className="text-balance mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            I AM KEVIN SULTANA HERMAN, FULL-STACK DEVELOPER.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            As a Senior Software Programmer & Full-stack Developer, I turn
            product goals into clean interfaces, dependable backend flows, and
            practical infrastructure decisions. My focus spans the Next.js
            ecosystem, modern web architecture, DevOps, and Linux server
            management.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Full-stack execution",
                detail:
                  "From user-facing interfaces to API integration and data flow design.",
              },
              {
                title: "Infrastructure mindset",
                detail:
                  "Comfortable with server builds, deployment hygiene, and homelab-grade reliability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="glass-button mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-slate-950"
          >
            Let’s work together
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card rounded-4xl p-7 sm:p-8 lg:p-10"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker text-xs font-semibold text-slate-500">
                Tech stack
              </p>
              <h3 className="text-balance mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                Tools I reach for when building durable product systems.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((item) => {
              const Icon = iconMap[item.icon] || Code2;

              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="hover-aurora-glow group w-full rounded-3xl border border-slate-200 bg-white/82 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-blue-600 shadow-[0_0_28px_rgba(59,130,246,0.08)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base font-semibold tracking-tight text-slate-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
