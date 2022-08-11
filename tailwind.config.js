const defaultTheme = require('tailwindcss/defaultTheme')
const colorThemes = require('./themes')

const bgStripesPlugin = require('./plugins/bg-stripes')
const squareDiagonalPlugin = require('./plugins/square-diagonal')
const multiThemePlugin = require('./plugins/multi-theme-plugin')

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
  plugins: [
    bgStripesPlugin,
    squareDiagonalPlugin,
    multiThemePlugin({
      themes: colorThemes,
    }),
  ],
}
