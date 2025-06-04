import { title } from "process";
import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const {heroui} = require("@heroui/react");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c:{
          green:"var(--green)",
          red:"var(--red)",
          bg:"var(--bg)",
          title:"var(--title)",
          text:"var(--text)",
          active:"var(--active)",
          link:"var(--link)",
          primary:"var(--primary)",
          light:"var(--light)",
          secondary:"var(--secondary)",
          black: "RGBA(0,0,0,0.4)",
        },
        grey:{
          1:"var(--grey1)",
          2:"var(--grey2)",
          3:"var(--grey3)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "poppins": ["var(--font-poppins)"],
        "montserrat": ["var(--font-montserrat)"]
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
