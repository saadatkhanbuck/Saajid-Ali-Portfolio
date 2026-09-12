import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#08070A",
        char: "#111014",
        surface: "#16151A",
        "surface-2": "#1C1A21",
        line: "rgba(245,241,234,0.09)",
        "line-strong": "rgba(245,241,234,0.18)",
        bone: "#F3EFE7",
        "bone-soft": "#A6A19A",
        ember: "#F97316",
        "ember-2": "#FB923C",
        amber: "#FACC15",
        "ember-deep": "#C2410C",
        rust: "#9A3412",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        wrap: "1160px",
      },
      backgroundImage: {
        "ember-gradient": "linear-gradient(90deg,#F97316,#FB923C,#FACC15)",
        "ember-gradient-v": "linear-gradient(155deg,#C2410C,#F97316 55%,#FACC15)",
      },
    },
  },
  plugins: [],
};
export default config;
