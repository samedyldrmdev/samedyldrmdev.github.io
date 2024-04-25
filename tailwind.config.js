/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
        "background-dark": "#1f2833",
        "background-less-dark": "#1f2833",
        "background-light": "#feffff",
        "dark-iki": "#252525",
        "text-dark": "#111111",
        "text-light": "#66fcf1",
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
};
