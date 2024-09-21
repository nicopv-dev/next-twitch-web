import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      },
      padding: {
        DEFAULT: "2rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        twitch: {
          DEFAULT: "#8e24ff",
          50: "#f3ebff",
          100: "#e9d7ff",
          200: "#d3aaff",
          300: "#bc7dff",
          400: "#a551ff",
          500: "#8e24ff",
          600: "#7e21e6",
          700: "#6e1dbf",
          800: "#5e1998",
          900: "#4f167a",
          bg: "#353538",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
