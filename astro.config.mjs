import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	site: 'https://streamertools.app',
	integrations: [
		tailwind(),
		sitemap(),
		preact({
			compat: true,
		}),
	],
	output: 'server',
	adapter: cloudflare(),
});
