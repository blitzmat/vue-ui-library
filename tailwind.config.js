/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      keyframes: {
        sliderLineEffect: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}

