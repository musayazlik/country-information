/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      boxShadow: {
        cs: '0 0 4px 0 hsl(0deg 0% 80% / 25%);',
      },
    },
    colors: {
      // vdb => very dark blue, dm => dark mode, lm => light mode, vlm => very light mode
      'dm-blue': '#0a192f',
      'vdb-dm-bg': 'rgba(43,55,67,255)',
      'vdb-lm-text': 'hsl(200, 15%, 8%)',
      'dm-gray': 'hsl(0, 0%, 52%)',
      'vlm-gray': 'hsl(0, 0%, 98%) ',
      white: 'hsl(0, 0%, 100%)',
    },
  },

  plugins: [],
}
