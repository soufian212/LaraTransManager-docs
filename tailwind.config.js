/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["M_PLUS_Rounded", ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [],
};