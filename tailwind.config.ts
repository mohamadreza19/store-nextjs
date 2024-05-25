import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fresh-pattern": "url('/asset/img/banner/freshPattern.svg')",
      },
      translate: {
        "50p": "50%",
        "50-p": "-50%",
      },
      fontFamily: {
        yekan: ["iran-yekan"],
      },
    },
  },
  plugins: [
    // require("tailwindcss-rtl")
  ],
};
export default config;
