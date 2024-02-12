import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://sparkle.bot/_next/image?url=%2Fassets%2Fsparkle-icon.png&w=48&q=100',
	name: 'Spakle',
	slug: 'sparkle',
	url: 'https://sparkle.bot',
	urlDisplay: 'sparkle.bot',
	description:
		'WebApp to fastely host your twitch bots and games in JS with an AI to help coding. Fast setup, very good UI/UX, global variables, database, all twitch API endpoints.',
	prices: ['free'],
	providers: ['twitch'],
	tags: ['coding', 'dev', 'api'],
	screenshots: [
		'https://i.ibb.co/1zMLcXY/Capture-d-cran-2024-02-12-151129.png',
		'https://i.ibb.co/7gB3Y7R/Capture-d-cran-2024-02-12-152612.png',
	],
};

export default tool;
