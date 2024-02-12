import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
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
	],
	output: 'server',
	adapter: cloudflare(),
});
