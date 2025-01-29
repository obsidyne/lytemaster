/** @type {import('tailwindcss').Config} */
const twConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerifDisplay: ["var(--font-dm-serif-display)", "serif"],
        bebasNeue: ["var(--font-bebas-neue)", "sans-serif"],
        satoshiVariable: ["var(--font-satoshi-variable)", "sans-serif"],
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default twConfig;
