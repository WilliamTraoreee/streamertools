import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import fs from 'node:fs';

const getToolsSitemap = () => {
	const toolsUrl = 'https://streamertools.app/tools';
	const allTools = fs.readdirSync('./src/tools/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

const getPluginsSitemap = () => {
	const toolsUrl = 'https://streamertools.app/plugins';
	const allTools = fs.readdirSync('./src/plugins/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

// https://astro.build/config
export default defineConfig({
	site: 'https://streamertools.app',
	integrations: [
		tailwind(),
		sitemap({
			customPages: [...getToolsSitemap(), ...getPluginsSitemap()],
		}),
		preact({
			compat: true,
		}),
	],
	output: 'server',
	adapter: cloudflare(),
});
