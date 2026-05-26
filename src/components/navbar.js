"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2"
    >
      <div className="glass-card flex items-center justify-between rounded-full border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md shadow-2xl sm:px-5">
        <a
          href="#home"
          className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition duration-300 hover:text-cyan-200"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition duration-300 group-hover:shadow-[0_0_26px_rgba(34,211,238,0.28)]">
            KS
          </span>
          <span className="hidden sm:inline">Kevin Sultana Herman</span>
        </a>

        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-2 py-1.5 backdrop-blur-md sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium text-white/75 transition duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)] sm:px-4 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
