"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Senior Software Programmer",
  "Full-stack Developer",
  "DevOps Enthusiast",
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const [nameText, setNameText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const fullName = "Kevin Sultana Herman";
    let namePosition = 0;

    const nameTimer = window.setInterval(() => {
      namePosition += 1;
      setNameText(fullName.slice(0, namePosition));

      if (namePosition >= fullName.length) {
        window.clearInterval(nameTimer);
      }
    }, 65);

    return () => window.clearInterval(nameTimer);
  }, []);

  useEffect(() => {
    let characterPosition = 0;
    let timeoutId;

    const typeTimer = window.setInterval(() => {
      characterPosition += 1;
      setRoleText(currentRole.slice(0, characterPosition));

      if (characterPosition >= currentRole.length) {
        window.clearInterval(typeTimer);
        timeoutId = window.setTimeout(
          () => setRoleIndex((index) => (index + 1) % roles.length),
          1600,
        );
      }
    }, 45);

    return () => {
      window.clearInterval(typeTimer);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [currentRole]);

  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pt-16 pb-10 sm:px-8 lg:scroll-mt-32 lg:px-12 lg:pt-24"
    >
      <motion.div
        className="glass-card relative overflow-hidden rounded-4xl px-6 py-14 sm:px-10 lg:px-14 lg:py-20 shadow-aurora"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_26%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/50 to-transparent" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Building polished software, infrastructure, and self-hosted
              systems
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <p className="section-kicker text-xs font-semibold text-cyan-200/70">
                Portfolio / 2026
              </p>
              <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="aurora-text block">
                  {nameText || "Kevin Sultana Herman"}
                </span>
                <span className="mt-3 block min-h-[1.35em] whitespace-nowrap text-2xl font-medium text-white/90 sm:text-3xl lg:text-4xl">
                  {roleText || currentRole}
                  <span className="ml-1 inline-block h-[0.9em] w-0.5 translate-y-px animate-pulse bg-cyan-300/80 align-middle" />
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                I design and ship modern web platforms with Next.js and React,
                while keeping the infrastructure mindset close at hand through
                Linux, Proxmox, self-hosting, and DevOps automation.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="glass-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="glass-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1"
              >
                Contact Me
                <Download className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card relative overflow-hidden rounded-4xl p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.85)]" />
                  Available for collaborations
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-white/60">Focus areas</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Next.js app architecture",
                      "Infrastructure and self-hosting",
                      "React interface systems",
                      "Automation and delivery pipelines",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-md"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["Next.js", "Core web stack"],
                    ["Linux", "Infra ops"],
                    ["DevOps", "Automation"],
                  ].map(([label, detail]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="mt-1 text-xs text-white/55">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
