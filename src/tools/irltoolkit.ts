import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://cdn.irltoolkit.com/image/navbar_logo.png',
	name: 'IRLToolKit',
	slug: 'irltoolkit',
	url: 'https://irltoolkit.com/',
	urlDisplay: 'irltoolkit.com',
	description:
		'OBS instance hosted in datacenter with webApp interface to configure and easy connection for IRL streaming. Ensure to not cut the stream if you lost mobile network during stream.',
	prices: ['paid'],
	providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
	tags: ['OBS', 'web'],
	screenshots: [
		'https://i.ibb.co/K7YVZVc/Capture-d-cran-2024-02-12-160553.png',
		'https://i.ibb.co/09r9VF3/Capture-d-cran-2024-02-12-160613.png',
	],
};

export default tool;
