/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('public/assets/backgrounds/wave-haikei.svg')",
      }
    },
  },
  plugins: [ require("@tailwindcss/forms") ],
}
