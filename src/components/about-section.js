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
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={containerVariants}
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-4xl p-8 sm:p-10"
        >
          <p className="section-kicker text-xs font-semibold text-cyan-200/70">
            About me
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Modern web engineering, with a strong infrastructure instinct.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            I build with the speed and clarity of the modern web stack, but I
            think beyond the interface. My day-to-day work spans Next.js, React,
            and Express.js alongside Linux server management, Proxmox
            virtualization, self-hosted tooling, and DevOps workflows that keep
            systems observable and reliable.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
              >
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card rounded-4xl p-8 sm:p-10"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker text-xs font-semibold text-cyan-200/70">
                Tech stack
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tools I reach for when building durable product systems.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {techStack.map((item) => {
              const Icon = iconMap[item.icon] || Code2;

              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/64">
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
