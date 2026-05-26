"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-3 sm:px-4 lg:px-6">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="glass-card flex items-center justify-between rounded-full border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl shadow-2xl sm:px-5">
          <a
            href="#home"
            className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 ease-out hover:text-cyan-200"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/2 text-xs text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_0_28px_rgba(34,211,238,0.28)]">
              KS
            </span>
            <span className="hidden sm:inline">Kevin Sultana Herman</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/2 px-2 py-1.5 backdrop-blur-xl md:flex md:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/75 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-cyan-200 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/2 p-2 text-white/80 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-cyan-200 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <motion.div
          id="mobile-navigation"
          initial={false}
          animate={
            mobileOpen
              ? { opacity: 1, y: 0, height: "auto" }
              : { opacity: 0, y: -10, height: 0 }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden md:hidden"
        >
          <div className="mt-3 rounded-3xl border border-white/10 bg-black/60 p-2 backdrop-blur-xl shadow-2xl">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/2 px-4 py-2 text-sm font-medium text-white/75 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-cyan-200 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.header>
    </div>
  );
}
