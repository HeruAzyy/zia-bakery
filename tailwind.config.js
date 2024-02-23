/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['DM Serif Display'],
				jost: ['Jost']
			},
			colors: {
				light: '#EADEDA',
				dark: '#172121',
				pink: '#CA6680'
			}
		}
	},
	plugins: []
}
