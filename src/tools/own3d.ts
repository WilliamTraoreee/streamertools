import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://www.own3d.tv/images/press/OWN3D-LOGO-SIGN-01.png',
	name: 'Own3d',
	slug: 'own3d',
	url: 'https://www.own3d.tv',
	urlDisplay: 'own3d.tv',
	description:
		'Plateform to purchase overlays and graphic assets for streaming. Overlays, emotes, alerts, etc',
	prices: ['paid'],
	providers: ['twitch', 'youtube', 'kick'],
	tags: ['overlays', 'assets', 'emotes', 'alerts'],
	screenshots: [
		'https://i.ibb.co/qjY1N51/Capture-d-e-cran-2024-02-11-a-18-24-03.png',
		'https://i.ibb.co/84mSBSx/Capture-d-cran-2024-02-12-150607.png',
	],
};

export default tool;
