"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

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

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  email: Mail,
};

export function HeroSection({ socialLinks, heroStats }) {
  const socialItems = [
    { key: "github", href: socialLinks.github, label: "GitHub" },
    { key: "linkedin", href: socialLinks.linkedin, label: "LinkedIn" },
    { key: "whatsapp", href: socialLinks.whatsapp, label: "WhatsApp" },
    { key: "email", href: socialLinks.email, label: "Email" },
  ];

  return (
    <section id="home" className="scroll-mt-28">
      <motion.div
        className="glass-card relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_26%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-300/80 to-transparent" />

        <div className="relative grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-12">
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-600 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-blue-600" />
              Building polished software, infrastructure, and self-hosted
              systems
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <p className="section-kicker text-xs font-semibold text-slate-500">
                Portfolio / 2026
              </p>
              <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.96] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="aurora-text block">Kevin Sultana</span>
              </h1>

              <p className="max-w-2xl text-xl font-semibold leading-tight text-slate-800 sm:text-2xl lg:text-3xl">
                Full-stack Developer & Mobile App Developer.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                I design and ship modern web platforms with the Next.js
                ecosystem, modern web architecture, DevOps, and Linux Server
                Management.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(15,23,42,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-600"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="glass-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1"
              >
                Contact Me
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {socialItems.map((item) => {
                const Icon = socialIcons[item.key];

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target={item.key === "email" ? undefined : "_blank"}
                    rel={item.key === "email" ? undefined : "noreferrer"}
                    aria-label={item.label}
                    className="glass-button inline-flex h-12 w-12 items-center justify-center rounded-full text-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-blue-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 sm:p-5 lg:p-6">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-amber-400/14 blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(145deg,#1d4ed8_0%,#2563eb_36%,#60a5fa_100%)] p-4 text-white shadow-[0_24px_64px_rgba(37,99,235,0.24)] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/72">
                      Full-stack portfolio
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
                      Kevin Sultana Herman
                    </h2>
                    <p className="mt-1 text-sm text-white/82">
                      Senior Software Programmer
                    </p>
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                    Online
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.06fr_0.94fr]">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:p-5">
                    <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
                    <div className="relative flex h-full min-h-[300px] flex-col justify-between">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/72">
                        <span>Portfolio portrait</span>
                        <span className="rounded-full border border-white/20 px-3 py-1 text-[10px]">
                          2026
                        </span>
                      </div>

                      <div className="flex flex-1 items-center justify-center">
                        <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),rgba(255,255,255,0.14)_42%,rgba(15,23,42,0.08)_100%)] shadow-[0_18px_42px_rgba(15,23,42,0.18)]">
                          <span className="text-5xl font-semibold tracking-tight text-white">
                            KS
                          </span>
                          <span className="absolute -bottom-3 rounded-full border border-white/20 bg-slate-950/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white/85 backdrop-blur-md">
                            Next.js
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-xs text-white/86">
                        {["DevOps", "Linux", "React"].map((label) => (
                          <div
                            key={label}
                            className="rounded-2xl border border-white/20 bg-white/12 px-3 py-3 text-center backdrop-blur-md"
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-white/20 bg-white/12 p-5 backdrop-blur-md">
                      <div className="flex items-center gap-2 text-sm font-medium text-white/92">
                        <MapPin className="h-4 w-4" />
                        Bekasi, Indonesia
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        Building clean interfaces, resilient backend flows, and
                        the infrastructure behind them.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/20 bg-white/12 p-5 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                        Current focus
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          "Next.js app architecture",
                          "DevOps automation",
                          "Linux server management",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/16 bg-white/10 px-4 py-3 text-sm text-white/88"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-6 grid gap-3 sm:grid-cols-3"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-[1.5rem] px-5 py-4"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                {stat.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
