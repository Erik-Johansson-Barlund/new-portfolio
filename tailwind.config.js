/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Titillium Web"', 'sans-serif'],
    },
    extend: {
      width: {
        '128': '100rem',
        'lg': '38rem',
      }
    },
  },
  plugins: [],
}

