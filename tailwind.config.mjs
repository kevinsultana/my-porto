/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--brand-bg) / <alpha-value>)",
        foreground: "rgb(var(--brand-text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-strong": "rgb(var(--surface-strong) / <alpha-value>)",
        "surface-border": "rgb(var(--surface-border) / <alpha-value>)",
        brand: {
          bg: "rgb(var(--brand-bg) / <alpha-value>)",
          paper: "rgb(var(--brand-paper) / <alpha-value>)",
          text: "rgb(var(--brand-text) / <alpha-value>)",
          ink: "rgb(var(--brand-ink) / <alpha-value>)",
          blue: "rgb(var(--brand-blue) / <alpha-value>)",
          purple: "rgb(var(--brand-purple) / <alpha-value>)",
          pink: "rgb(var(--brand-pink) / <alpha-value>)",
          mint: "rgb(var(--brand-mint) / <alpha-value>)",
          amber: "rgb(var(--brand-amber) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Arial", "Helvetica", "sans-serif"],
        mono: [
          "var(--font-mono-stack)",
          "SFMono-Regular",
          "Consolas",
          "monospace",
        ],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        "scroll-reverse": "scroll-reverse 40s linear infinite",
      },
      boxShadow: {
        aurora:
          "0 0 34px rgba(59, 130, 246, 0.12), 0 0 58px rgba(139, 92, 246, 0.1), 0 0 78px rgba(236, 72, 153, 0.06)",
      },
    },
  },
};

export default config;
