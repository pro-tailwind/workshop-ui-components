const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{stories.jsx,stories.mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      width: {
        100: '25rem',
      },
    },
  },
  plugins: [require('./plugins/bg-stripes'), require('./plugins/square-diagonal')],
}
