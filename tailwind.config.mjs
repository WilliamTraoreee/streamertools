/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Switzer', 'sans-serif'],
			},
			colors: {
				primary: {
					400: '#3862F8',
					500: '#1747F2',
				},
				dark: {
					200: '#AAAAAA',
					300: '#484848',
					400: '#232323',
					500: '#0F0F0F',
					600: '#070707',
				},
				price: {
					free: '#21A51E',
					paid: '#DD650E',
				},
				provider: {
					twitch: '#9146FF',
					youtube: '#CD201F',
					kick: '#51FA17',
					facebook: '#1877F2',
					tiktok: '#000000',
					x: '#000000',
					instagram: '#E4405F',
					linkedin: '#0A66C2',
				},
			},
		},
	},
	plugins: [],
};
