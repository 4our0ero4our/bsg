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
        background: "var(--background)",
        foreground: "var(--foreground)",
        bsg: {
          white: "var(--bsg-white)",
          "blue-light": "var(--bsg-blue-light)",
          "blue-medium": "var(--bsg-blue-medium)",
          "blue-dark": "var(--bsg-blue-dark)",
          "blue-deep": "var(--bsg-blue-deep)",
          "blue-very-dark": "var(--bsg-blue-very-dark)",
          gold: "var(--bsg-gold)",
          "gold-deep": "var(--bsg-gold-deep)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
