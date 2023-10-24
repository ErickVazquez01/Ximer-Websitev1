/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': 'Rubik, sans-serif',
      },
      gridAutoColumns: {
				'2fr': 'minmax(0, 2fr)',
			},
			gridTemplateColumns: {
				'min-auto': 'min-content auto',
				'1-auto': '1fr auto',
				'auto-1': 'auto 1fr',
				'auto-1-auto': 'auto 1fr auto',
				'1-auto-auto': '1fr auto auto',
			},
			gridTemplateRows: {
				'2-auto': 'repeat(2, minmax(0, auto))',
			},
      colors: {
        'website-white': '#F9F9F9',
        'website-black': '#242424',
        'website-gray': '#646464',
        'website-pink': '#DD4184',
        'website-pink-dark': '#C5247A',
      }
    },
  },
  plugins: [],
}

