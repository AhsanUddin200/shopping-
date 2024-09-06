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
        customGreen: '#04AA6D',
      },
      backgroundImage: {
        customImage: "url('https://images.pexels.com/photos/8030171/pexels-photo-8030171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
