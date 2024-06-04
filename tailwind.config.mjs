import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			karla: ["'Karla Variable'", 'sans-serif']
		},
		colors: {
			'dark-grey': '#2A4144',
			'medium-grey': '#86A2A5',
			'white': '#FFF',
			'green': '#0C7D69',
			'light-green': '#E0F1E8',
			'red': '#D94747',
		},
		spacing: {
			"3xl": '8rem',
			"2xl": '2.5rem',
			xl: '2rem',
			l: '1.5rem',
			m: '1rem',
			s: '0.75rem',
			xs: '0.5rem',
		}
	},
	plugins: [
		plugin(({ addUtilities, theme }) => {
			addUtilities({
				'.text-heading': {
					fontFamily: theme('fontFamily.karla'),
					fontSize: '2rem',
					letterSpacing: '-0.0625rem',
				},
				'.text-body-m': {
					fontFamily: theme('fontFamily.karla'),
					fontSize: '1.125rem',
					lineHeight: '150%',
				},
				'.text-body-s': {
					fontFamily: theme('fontFamily.karla'),
					fontSize: '1rem',
					lineHeight: '150%',
				},
			})
		})
	],
}
