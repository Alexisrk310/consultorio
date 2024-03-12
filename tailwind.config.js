/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {
      colors: {
        main: '#ff9400'
      }
    },
  },
  plugins: [require('flowbite/plugin'),],
}

