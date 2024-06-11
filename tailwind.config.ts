import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkPrimary: "var(--dark-primary)",
      primary: "var(--primary)",
      lightGrey: "var(--light-grey)",
      borderGrey: "var(--border-grey)",
      borderDark: "var(--border-dark)",
      white: "var(--white)",
      darkChair: "var(--images---dark-chair)",
      grey: "var(--grey)",

      buttonLight: "#F9F9F926",
    },

    extend: {
      fontFamily: {
        primary: ["var(--font-family)"],
        second: ["var(--second-family)"],
      },
    },
  },
  plugins: [],
};
export default config;
