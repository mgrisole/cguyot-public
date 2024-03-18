import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.astro'],
	theme: {
		extend: {
			colors: {
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
			},
			screens: {
				// TODO: Switch to em
				sm: { min: '680px' },
				md: { min: '1920px' },
				lg: { min: '2048px' }
			}
		},
	},
	plugins: [],
}
