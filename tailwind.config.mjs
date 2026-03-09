/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        caribe: '#6AAB33',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
