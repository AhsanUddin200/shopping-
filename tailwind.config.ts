import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#232A3C",
        medium: "#293245",
        accent: "#FF8F9C",
        blackish: "#1b1b1b",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};

export default config;
