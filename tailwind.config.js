/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00ffff',
        neonGreen: '#39ff14',
        neonPurple: '#da70d6',
        darkBg: '#0d0d0d',
        darkPanel: '#1a1a1a',
      },
    },
  },
  plugins: [],
}

