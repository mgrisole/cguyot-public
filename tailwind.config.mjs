import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,tsx}'],
	theme: {
		extend: {
			colors: {
				'neutral': '#F0EFF4',
				'baby-powder': '#f8f7f2',
				'old-rose': '#c2747d',
				'independence': '#3d405b',
				'black-olive': '#353d39',
				'almond': '#E7D4C4'
			},
			fontFamily: {
				'brand': ['Quicksand', ...defaultTheme.fontFamily.sans],
				'serif': ['Lora', ...defaultTheme.fontFamily.serif],
				'testimony': ['Playfair Display', ...defaultTheme.fontFamily.serif],
			}
		},
	},
	plugins: [],
}
