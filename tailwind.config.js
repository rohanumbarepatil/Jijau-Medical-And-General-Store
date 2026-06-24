/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: '#0EA5E9',
          darkBlue: '#0284C7',
          lightBlue: '#E0F2FE',
          green: '#22C55E',
          darkGreen: '#16A34A',
          lightGreen: '#DCFCE7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
