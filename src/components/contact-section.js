"use client";

import { submitContactForm } from "@/app/actions";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="scroll-mt-28 pb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={containerVariants}
        className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-[30px] p-7 sm:p-8 lg:p-10"
        >
          <p className="section-kicker text-xs font-semibold text-slate-500">
            Contact
          </p>
          <h2 className="text-balance mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Get in touch.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Have a project idea, a question, or just want to say hi? Feel free
            to drop a message. I’m always open to new collaborative
            opportunities.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white/82 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Email
              </p>
              <a
                href={socialLinks.email}
                className="mt-3 block break-all text-lg font-semibold text-slate-950 transition hover:text-blue-600"
              >
                hello@kevinsultanaherman.com
              </a>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white/82 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Location
              </p>
              <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-slate-950">
                <MapPin className="h-4 w-4 text-blue-600" />
                Bekasi, Indonesia
              </div>
            </div>
          </div>

          <motion.form action={formAction} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="glass-input w-full rounded-2xl px-4 py-3 text-sm"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
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

            <label className="block space-y-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project, infrastructure goals, or the kind of collaboration you need."
                className="glass-input w-full rounded-3xl px-4 py-3 text-sm leading-relaxed"
              />
            </label>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p
                aria-live="polite"
                className={`text-sm ${state.status === "success" ? "text-emerald-600" : state.status === "error" ? "text-rose-600" : "text-slate-500"}`}
              >
                {state.message ||
                  "I usually respond with clear next steps and practical feedback."}
              </p>

              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(15,23,42,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {pending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card rounded-[30px] p-7 sm:p-8 lg:p-10"
        >
          <p className="section-kicker text-xs font-semibold text-slate-500">
            Reach out
          </p>
          <h3 className="text-balance mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            Prefer a direct channel?
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted">
            These shortcuts are set up for quick access to the channels people
            use first.
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
                  className="hover-aurora-glow glass-button inline-flex h-14 w-14 items-center justify-center rounded-2xl text-slate-700 transition-all duration-300 ease-out hover:text-blue-600"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white/82 p-5 backdrop-blur-md">
            <p className="text-sm text-slate-500">Current stack focus</p>
            <p className="mt-2 text-lg font-medium text-slate-950">
              Next.js, React, DevOps automation, and homelab infrastructure.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
