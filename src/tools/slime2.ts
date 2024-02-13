import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://slime2.stream/favicon.ico',
	name: 'Slime2',
	slug: 'slime2',
	url: 'https://slime2.stream/',
	urlDisplay: 'slime2.stream/',
	description:
		'Twitch API relay to localhost chat, alerts, and lot of more widgets. Good documentation and a community module forum.',
	prices: ['free'],
	providers: ['twitch'],
	tags: ['chat', 'widget', 'DIY', 'alerts', 'web'],
	screenshots: [
		'https://i.ibb.co/cJq8H23/Capture-d-cran-2024-02-13-085546.png',
		'https://i.ibb.co/Y39F5d3/Capture-d-cran-2024-02-13-085149.png',
	],
};

export default tool;
