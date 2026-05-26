"use client";

import { submitContactForm } from "@/app/actions";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { useActionState } from "react";

const initialState = {
  status: "idle",
  message: "",
};

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const contactIcons = {
  email: Mail,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

export function ContactSection({ socialLinks }) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16 sm:px-8 lg:scroll-mt-32 lg:px-12 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={containerVariants}
        className="grid gap-8 lg:grid-cols-[1fr_0.95fr]"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-4xl bg-white/[0.02] p-8 shadow-2xl sm:p-10"
        >
          <p className="section-kicker text-xs font-semibold text-cyan-200/70">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Start a conversation or send a brief about your build.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Use the form to reach me directly. The submission is handled with a
            Next.js Server Action and can forward into your n8n automation flow
            when the webhook is configured.
          </p>

          <motion.form action={formAction} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-white/78">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="glass-input w-full rounded-2xl px-4 py-3 text-sm"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-white/78">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="glass-input w-full rounded-2xl px-4 py-3 text-sm"
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm font-medium text-white/78">
              Message
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project, infrastructure goals, or the kind of collaboration you need."
                className="glass-input w-full rounded-3xl px-4 py-3 text-sm leading-7"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p
                aria-live="polite"
                className={`text-sm ${state.status === "success" ? "text-emerald-300" : state.status === "error" ? "text-rose-300" : "text-white/60"}`}
              >
                {state.message ||
                  "I usually respond with clear next steps and practical feedback."}
              </p>

              <button
                type="submit"
                disabled={pending}
                className="glass-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {pending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card rounded-4xl p-8 sm:p-10"
        >
          <p className="section-kicker text-xs font-semibold text-cyan-200/70">
            Reach out
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Prefer a direct channel?
          </h3>
          <p className="mt-5 text-base leading-7 text-muted">
            These shortcuts are set up as glassmorphism icon buttons for quick
            access to the channels most people use first.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { key: "email", href: socialLinks.email, label: "Email" },
              {
                key: "whatsapp",
                href: socialLinks.whatsapp,
                label: "WhatsApp",
              },
              {
                key: "linkedin",
                href: socialLinks.linkedin,
                label: "LinkedIn",
              },
              { key: "github", href: socialLinks.github, label: "GitHub" },
            ].map((item) => {
              const Icon = contactIcons[item.key];

              return (
                <motion.a
                  key={item.key}
                  href={item.href}
                  target={item.key === "email" ? undefined : "_blank"}
                  rel={item.key === "email" ? undefined : "noreferrer"}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="hover-aurora-glow glass-button inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white transition duration-300"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
            <p className="text-sm text-white/60">Current stack focus</p>
            <p className="mt-2 text-lg font-medium text-white">
              Next.js, React, DevOps automation, and homelab infrastructure.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
