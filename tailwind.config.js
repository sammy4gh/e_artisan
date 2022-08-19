/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      backgroundImage: {
        'login-wave': "url('../public/assets/backgrounds/wave-haikei.svg')",
        'world-map': "url('../public/assets/backgrounds/world_map.svg')",
      }
    },
  },
  plugins: [ require("@tailwindcss/forms") ],
}
