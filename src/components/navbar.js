"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Folder, Mail, Globe } from "lucide-react";
import ThemeToggle from "./theme-toggle";

export default function Navbar({ locale = "en", dict = {} }) {
  const [activeSection, setActiveSection] = useState("home");

  const isClickScrolling = useRef(false);
  const timeoutRef = useRef(null);

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

  return (
    <header className="fixed bottom-3 md:top-4 md:bottom-auto inset-x-0 z-50 flex justify-center px-2 sm:px-4 transition-all duration-300">
      <nav className="flex max-w-[calc(100vw-0.75rem)] items-center gap-0.5 sm:gap-1 md:gap-2 bg-surface/85 backdrop-blur-md border border-surface-border px-1.5 sm:px-2 md:px-4 py-1.5 rounded-full shadow-lg shadow-black/20 overflow-hidden">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavLinkClick("home")}
          className="font-black text-base sm:text-lg md:text-xl tracking-tighter px-1.5 sm:px-2 text-brand-text hover:scale-105 transition-transform shrink-0"
        >
          KS<span className="text-brand-pink">.</span>
        </a>

        <div className="h-5 md:h-6 w-px bg-brand-text/10 mx-0.5 sm:mx-1 shrink-0" />

        {/* Menu Navigasi */}
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
              className="relative px-2 sm:px-3 md:px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 transition-colors text-brand-text shrink-0"
              title={item.name}
            >
              {isActive && (
                <motion.span
                  layoutId="activeNav"
                  className={`absolute inset-0 rounded-full ${item.color} -z-10`}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.9,
                  }}
                />
              )}
              <Icon
                className={`w-4 h-4 md:w-4 md:h-4 transition-colors duration-300 ${isActive ? "text-white" : "text-brand-text"}`}
              />

              <span
                className={`hidden lg:block transition-colors duration-300 ${isActive ? "text-white" : "hover:text-brand-purple"}`}
              >
                {item.name}
              </span>
            </motion.a>
          );
        })}

        <div className="h-5 md:h-6 w-px bg-brand-text/10 mx-0.5 sm:mx-1 shrink-0" />

        {/* Language Switcher */}
        <button
          onClick={handleLanguageToggle}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 border border-brand-text/10 rounded-full text-xs font-black bg-brand-text/5 hover:bg-brand-text/10 text-brand-text transition-all active:scale-95 shrink-0"
        >
          <Globe className="w-3.5 h-3.5 text-brand-text/70" />
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
