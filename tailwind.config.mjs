/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
			}
		},
	},
	plugins: [],
}
