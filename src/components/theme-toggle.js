"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDark = mounted
    ? theme === "system"
      ? resolvedTheme === "dark"
      : theme === "dark"
    : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"
      }
      className="relative inline-flex h-8 w-14 sm:h-9 sm:w-16 items-center rounded-full border border-brand-text/10 bg-brand-text/5 px-1 text-brand-text shadow-sm transition-colors hover:border-brand-purple/20 hover:bg-brand-text/10"
    >
      <motion.span
        layout
        className="absolute inset-y-1 left-1 w-5 rounded-full bg-brand-bg shadow-md sm:inset-y-1.5 sm:left-1.5 sm:w-6"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <div className="relative flex w-full items-center justify-between px-0.5 text-brand-text/70 sm:px-1">
        <SunMedium className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        <Moon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "dark" : "light"}
            initial={{ opacity: 0, y: 4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.92 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[9px] font-black uppercase tracking-[0.18em] text-brand-text sm:text-[10px] sm:tracking-[0.22em]"
          ></motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
