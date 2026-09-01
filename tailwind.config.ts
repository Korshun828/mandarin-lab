import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2F0EA",
        ink: "#111111",
        vermilion: "#D9342B",
      },
    },
  },
  plugins: [],
};

export default config;
