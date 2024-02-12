import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://pbs.twimg.com/profile_images/1662126076317908992/erKe1tYV_400x400.png',
	name: 'Aitum Vertical',
	slug: 'aitum vertical',
	url: 'https://aitum.tv/download/vertical/',
	urlDisplay: 'aitum.tv',
	description:
		'Add a second interface in vertical to your OBS. Permit to stream on mobile plateform in same time. You can link main scenes to vertical scenes.',
	prices: ['free'],
	providers: ['twitch', 'youtube', 'tiktok'],
	tags: ['OBS', 'plugin', 'encoder'],
	screenshots: [
		'https://aitum.tv/_next/static/images/vertical-ae4236a50ffc1b6ba9fabbc41deea754.png',
		'https://beebom.com/wp-content/uploads/2023/08/Vertical-sources-plugin-OBS.jpg',
	],
};

export default tool;
