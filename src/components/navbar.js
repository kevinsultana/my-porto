"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Folder,
  Mail,
  Globe,
  ChevronDown,
  ChevronUp,
  Moon,
  SunMedium,
} from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggle from "./theme-toggle";

export default function Navbar({ locale = "en", dict = {} }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isClickScrolling = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    });

    const sections = [
      "home",
      "projects",
      "skills",
      "certificates",
      "experience",
      "about",
      "contact",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleLanguageToggle = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    const currentHash = window.location.hash;
    window.location.href = `/${nextLocale}${currentHash}`;
  };

  const handleNavLinkClick = (id) => {
    setActiveSection(id);
    isClickScrolling.current = true;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 2000);
  };

  const menuItems = [
    {
      id: "home",
      name: dict.home || (locale === "id" ? "Beranda" : "Home"),
      path: "#home",
      icon: Home,
      color: "bg-brand-blue",
    },
    {
      id: "projects",
      name: dict.projects || (locale === "id" ? "Proyek" : "Projects"),
      path: "#projects",
      icon: Folder,
      color: "bg-brand-amber",
    },
    {
      id: "experience",
      name: dict.experience || (locale === "id" ? "Pengalaman" : "Experience"),
      path: "#experience",
      icon: Briefcase,
      color: "bg-brand-purple",
    },
    {
      id: "about",
      name: dict.about || (locale === "id" ? "Tentang" : "About"),
      path: "#about",
      icon: User,
      color: "bg-brand-pink",
    },
    {
      id: "contact",
      name: dict.contact || (locale === "id" ? "Kontak" : "Contact"),
      path: "#contact",
      icon: Mail,
      color: "bg-brand-mint",
    },
  ];

  const isDark = mounted
    ? theme === "system"
      ? resolvedTheme === "dark"
      : theme === "dark"
    : true;

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
    setMobileToolsOpen(false);
  };

  return (
    <header className="fixed bottom-3 md:top-4 md:bottom-auto inset-x-0 z-50 flex justify-center px-2 sm:px-4 transition-all duration-300">
      <nav className="md:hidden relative flex w-full max-w-[calc(100vw-0.75rem)] items-center justify-between gap-1.5 overflow-visible rounded-[1.75rem] border border-surface-border bg-surface/90 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-md">
        <a
          href="#home"
          onClick={() => handleNavLinkClick("home")}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all ${activeSection === "home" ? "border-brand-blue/30 bg-brand-blue text-white shadow-md shadow-brand-blue/20" : "border-brand-text/10 bg-brand-text/5 text-brand-text"}`}
          aria-label={dict.home || (locale === "id" ? "Beranda" : "Home")}
          title={dict.home || (locale === "id" ? "Beranda" : "Home")}
        >
          <span className="text-[15px] font-black leading-none tracking-tighter">
            KS<span className="text-brand-pink">.</span>
          </span>
        </a>

        {menuItems
          .filter((item) => item.id !== "home")
          .map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <motion.a
                key={item.id}
                href={item.path}
                onClick={() => handleNavLinkClick(item.id)}
                whileTap={{ scale: 0.94 }}
                animate={{
                  y: isActive ? -1 : 0,
                  scale: isActive ? 1.04 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  mass: 0.7,
                }}
                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-text/10 bg-brand-text/5 text-brand-text transition-all"
                title={item.name}
                aria-label={item.name}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobileActiveNav"
                    className={`absolute inset-0 -z-10 rounded-2xl ${item.color}`}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 22,
                      mass: 0.9,
                    }}
                  />
                )}
                <Icon
                  className={`h-6 w-6 transition-colors duration-300 ${isActive ? "text-white" : "text-brand-text"}`}
                />
              </motion.a>
            );
          })}

        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setMobileToolsOpen((current) => !current)}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-text/10 bg-brand-text/5 text-brand-text transition-all active:scale-95"
            aria-expanded={mobileToolsOpen}
            aria-label={
              mobileToolsOpen
                ? locale === "id"
                  ? "Tutup bahasa dan tema"
                  : "Close language and theme"
                : locale === "id"
                  ? "Buka bahasa dan tema"
                  : "Open language and theme"
            }
          >
            <Globe className="h-6 w-6" />
            {mobileToolsOpen ? (
              <ChevronUp className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-surface text-brand-text shadow-sm" />
            ) : (
              <ChevronDown className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-surface text-brand-text shadow-sm" />
            )}
          </button>

          <AnimatePresence>
            {mobileToolsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-full right-0 z-50 mb-2 w-52 overflow-hidden rounded-3xl border border-surface-border bg-surface/95 p-2 shadow-xl shadow-black/25 backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={handleLanguageToggle}
                  className="flex h-11 w-full items-center justify-between rounded-2xl border border-brand-text/10 bg-brand-text/5 px-3 text-brand-text transition-all active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <Globe className="h-5 w-5" />
                    <span>{dict.language || locale.toUpperCase()}</span>
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-text/70">
                    {locale.toUpperCase()}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleThemeToggle}
                  className="mt-2 flex h-11 w-full items-center justify-between rounded-2xl border border-brand-text/10 bg-brand-text/5 px-3 text-brand-text transition-all active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2 text-sm font-bold">
                    {isDark ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <SunMedium className="h-5 w-5" />
                    )}
                    <span>{isDark ? "Dark" : "Light"}</span>
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-text/70">
                    {isDark ? "ON" : "OFF"}
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <nav className="hidden max-w-[calc(100vw-0.75rem)] items-center gap-0.5 overflow-hidden rounded-full border border-surface-border bg-surface/85 px-1.5 py-1.5 shadow-lg shadow-black/20 backdrop-blur-md md:flex sm:gap-1 md:gap-2 sm:px-2 md:px-4">
        <a
          href="#home"
          onClick={() => handleNavLinkClick("home")}
          className="shrink-0 px-1.5 text-base font-black tracking-tighter text-brand-text transition-transform hover:scale-105 sm:px-2 sm:text-lg md:text-xl"
          aria-label={dict.home || (locale === "id" ? "Beranda" : "Home")}
          title={dict.home || (locale === "id" ? "Beranda" : "Home")}
        >
          KS<span className="text-brand-pink">.</span>
        </a>

        <div className="h-5 md:h-6 w-px shrink-0 bg-brand-text/10 mx-0.5 sm:mx-1" />

        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <motion.a
              key={item.id}
              href={item.path}
              onClick={() => handleNavLinkClick(item.id)}
              layout
              animate={{
                y: isActive ? -0.5 : 0,
                scale: isActive ? 1.03 : 1,
              }}
              transition={{
                type: "decay",
                stiffness: 220,
                damping: 24,
                mass: 0.7,
              }}
              className="relative flex shrink-0 items-center gap-1.5 rounded-full px-2 py-2 text-sm font-bold text-brand-text transition-colors sm:px-3 md:px-4"
              title={item.name}
            >
              {isActive && (
                <motion.span
                  layoutId="activeNav"
                  className={`absolute inset-0 -z-10 rounded-full ${item.color}`}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.9,
                  }}
                />
              )}
              <Icon
                className={`h-4 w-4 transition-colors duration-300 md:h-4 md:w-4 ${isActive ? "text-white" : "text-brand-text"}`}
              />

              <span
                className={`hidden transition-colors duration-300 lg:block ${isActive ? "text-white" : "hover:text-brand-purple"}`}
              >
                {item.name}
              </span>
            </motion.a>
          );
        })}

        <div className="h-5 md:h-6 w-px shrink-0 bg-brand-text/10 mx-0.5 sm:mx-1" />

        <button
          onClick={handleLanguageToggle}
          className="flex shrink-0 items-center gap-1 rounded-full border border-brand-text/10 bg-brand-text/5 px-2 py-1.5 text-xs font-black text-brand-text transition-all hover:bg-brand-text/10 active:scale-95 sm:px-3"
        >
          <Globe className="h-3.5 w-3.5 text-brand-text/70" />
          <span className="hidden sm:inline">
            {dict.language || locale.toUpperCase()}
          </span>
          <span className="sm:hidden">{locale.toUpperCase()}</span>
        </button>

        <ThemeToggle />
      </nav>
    </header>
  );
}
