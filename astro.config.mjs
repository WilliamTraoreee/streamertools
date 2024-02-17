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

const getMicrophoneSitemap = () => {
	const toolsUrl = 'https://streamertools.app/gears/microphones';
	const allTools = fs.readdirSync('./src/gears/microphones/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

const getCameraSitemap = () => {
	const toolsUrl = 'https://streamertools.app/gears/cameras';
	const allTools = fs.readdirSync('./src/gears/cameras/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

const getLightSitemap = () => {
	const toolsUrl = 'https://streamertools.app/gears/lights';
	const allTools = fs.readdirSync('./src/gears/lights/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

const getAudioMixersSitemap = () => {
	const toolsUrl = 'https://streamertools.app/gears/audio-mixers';
	const allTools = fs.readdirSync('./src/gears/audio-mixers/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

const getCamerasStandsSitemap = () => {
	const toolsUrl = 'https://streamertools.app/gears/cameras-stands';
	const allTools = fs.readdirSync('./src/gears/cameras-stands/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

const getMicrophonesStandsSitemap = () => {
	const toolsUrl = 'https://streamertools.app/gears/microphones-stands';
	const allTools = fs.readdirSync('./src/gears/microphones-stands/');
	return allTools
		? allTools.map((tool) => `${toolsUrl}/${tool.split('.')[0]}/`)
		: [];
};

const getWebcamsSitemap = () => {
	const toolsUrl = 'https://streamertools.app/gears/webcams';
	const allTools = fs.readdirSync('./src/gears/webcams/');
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
			customPages: [
				...getToolsSitemap(),
				...getPluginsSitemap(),
				...getMicrophoneSitemap(),
				...getCameraSitemap(),
				...getLightSitemap(),
				...getAudioMixersSitemap(),
				...getCamerasStandsSitemap(),
				...getMicrophonesStandsSitemap(),
				...getWebcamsSitemap(),
			],
		}),
		preact({
			compat: true,
		}),
	],
	output: 'server',
	adapter: cloudflare(),
});
