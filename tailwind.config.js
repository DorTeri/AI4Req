/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        sidebar: '#7FE7C7',
        lightSidebar: '#A2ECD6',
        gray: '#D9D9D9',
        greenActive: '#1DC81A',
        blueLogo: '#00519B',
        input: '#D9D9D9',
        inputText: '#8E8E8E',
        projectBg: '#FEF7F7',
        request: '#FFD464',
        requested: '#FF7764',
      }
    },
  },
  plugins: [],
}

