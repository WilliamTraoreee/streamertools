import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://assets.bigcartel.com/product_images/368906416/Belabox_Icon_smaller_for_twitch_animated.png?auto=format&fit=max&w=2000',
	name: 'Belabox',
	slug: 'belabox',
	url: 'https://belabox.net/',
	urlDisplay: 'belabox.net',
	description:
		'Free Linux image for Jetson Nano board to transform in encoder. Can stream in RTMP and SRT, support h265, basic DIY version of liveU. Purpose a paid server to ingest SRTLA and get easy integration in OBS.',
	prices: ['free', 'paid'],
	providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
	tags: ['DIY', 'IRL', 'OBS'],
	screenshots: [
		'https://i.ibb.co/tmN6bQd/Capture-d-cran-2024-02-12-222444.png',
		'https://i.ibb.co/kMvcYmw/Capture-d-cran-2024-02-12-222607.png',
	],
};

export default tool;
