import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(10px)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        },
        rightIn: {
          "0%": { transform: "translateX(10vw)", opacity: "0"},
          "100%": { transform: "translateX(0)", opacity: "1"},
        },
        leftIn: {
          "0%": { transform: "translateX(-20vw)", opacity: "0"},
          "100%": { transform: "translateX(0)", opacity: "1"},
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        rightIn: "rightIn 1s ease-in-out",
        leftIn: "leftIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
