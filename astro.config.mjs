import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://streamertools.app',
	integrations: [
		tailwind(),
		icon({
			include: {
				ri: [
					'twitch-fill',
					'youtube-fill',
					'kick-fill',
					'facebook-fill',
					'tiktok-fill',
					'twitter-x-fill',
					'instagram-fill',
					'linkedin-fill',
				],
			},
		}),
		sitemap(),
	],
	output: 'server',
	adapter: cloudflare(),
});
