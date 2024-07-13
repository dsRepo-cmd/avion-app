import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
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
      error: "#f44336",

      buttonLight: "#F9F9F926",
      textLight: "#505977",
    },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "836px" },
      sm: { max: "639px" },
      exsm: { max: "380px" },
    },

    extend: {
      fontFamily: {
        primary: ["var(--font-family)"],
        second: ["var(--second-family)"],
        default: ["var(--second-family)"],
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
        "hover-none": { raw: "(hover: none)" },
      },

      keyframes: {
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100% ": { opacity: "0.2" },
        },
      },

      animation: {
        blink: "blink 1.4s both infinite",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};

export default config;
