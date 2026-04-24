import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1628",
        accent: "#00E5B4",
        "accent-soft": "#E8FBF6",
        "text-dark": "#1A1A2E",
        "text-light": "#6B7280",
        surface: "#F8FFFE",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
