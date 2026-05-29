"use client";

import { motion } from "framer-motion";
import {
  Menu,
  User,
  BriefcaseBusiness,
  FolderOpen,
  Mail,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const navIcons = {
  Home: User,
  About: User,
  Experience: BriefcaseBusiness,
  Projects: FolderOpen,
  Contact: Mail,
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-3 sm:px-4 lg:px-6">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="glass-card flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <a
            href="#home"
            className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-900 transition-all duration-300 ease-out hover:text-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_32px_rgba(37,99,235,0.12)]">
              KS.
            </span>
            <span className="hidden sm:inline">Kevin Sultana Herman</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-2 py-1.5 backdrop-blur-xl md:flex md:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900"
              >
                {navIcons[item.label] ? (
                  <span className="text-[11px] text-slate-400">
                    {(() => {
                      const Icon = navIcons[item.label];
                      return <Icon className="h-3.5 w-3.5" />;
                    })()}
                  </span>
                ) : null}
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              EN
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-blue-600 md:hidden"
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
          <div className="mt-3 rounded-3xl border border-slate-200 bg-white/90 p-2 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
              <span className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500">
                EN
              </span>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </div>
  );
}
