import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "midnight-blue": "#0D1C4B",
        "crimson-pink": {
          100: "#ffe6ea",
          200: "#ffb3bf",
          300: "#fe8094",
          400: "#fe4764",
          DEFAULT: "#fe4764",
        },
        "sunset-orange": {
          100: "#fef3e6",
          200: "#fddab4",
          300: "#fcc182",
          400: "#fba244",
          DEFAULT: "#fba244",
        },
      },
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
export default config;
