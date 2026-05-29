/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        background: "#050816",
        foreground: "#e2e8f0",
        muted: "rgba(148, 163, 184, 0.78)",
        surface: "rgba(15, 23, 42, 0.64)",
        "surface-strong": "rgba(15, 23, 42, 0.84)",
        "surface-border": "rgba(148, 163, 184, 0.16)",
        brand: {
          bg: "#050816",
          paper: "#fdfdfd",
          text: "#e2e8f0",
          ink: "#1e293b",
          blue: "#3b82f6",
          purple: "#8b5cf6",
          pink: "#ec4899",
          mint: "#10b981",
          amber: "#f59e0b",
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
