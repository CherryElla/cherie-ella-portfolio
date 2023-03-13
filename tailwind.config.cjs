/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Rubik+Iso': ['Rubik+Iso'],
        inter: ['Source Code Pro', 'monospace']
      }
      // backgroundImage: {
      //   'retro-tv': "url('./src/images/tv.png')"
      // }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
