/** @type {import('tailwindcss').Config} */
//
// Selective Vacations — Tailwind config (Peacock & Gold system).
// Currently the site runs on the Tailwind Play CDN (see index.html),
// this file keeps tokens in sync for a future `npm i && npx tailwindcss` build
// or Next.js migration (app/layout entry point).
//
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
          peacock: {
            DEFAULT: "#0b3c49",
            dark: "#071e26",
            midnight: "#071e26",
            teal: "#0b3c49",
            turquoise: "#1d8392",
            emerald: "#0f4c3a",
          },
        gold: {
          DEFAULT: "#d4af37",
          light: "#e8c96a",
          dark: "#a88624",
        },
        luxury: {
          mustard: "#e69a28",
          coral: "#d1603d",
          ivory: "#f4f6f7",
        },
        cream: {
          DEFAULT: "#faf9f6",
          warm: "#fcfbf9",
        },
      },
      fontFamily: {
        display: ["Inter", "Jost", "system-ui", "sans-serif"],
        sans: ["Inter", "Jost", "system-ui", "sans-serif"],
        body: ["Inter", "Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
