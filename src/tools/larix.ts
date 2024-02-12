import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://softvelum.com/img/larix_broadcaster_logo.png',
	name: 'Larix Broadcaster',
	slug: 'larix_broadcaster',
	url: 'https://softvelum.com/larix/',
	urlDisplay: 'softvelum.com/larix',
	description:
		'Android/iOS freemium app to record/stream with smartphone. Support H265, SRT, NDI, double-cam on iOS, WebRTC, talkback and more.',
	prices: ['free', 'paid'],
	providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
	tags: ['OBS', 'web'],
	screenshots: [
		'https://i.ibb.co/dgW6WK5/Capture-d-cran-2024-02-12-162909.png',
		'https://tiki6.tikilive.com/manual/wp-content/uploads/2018/10/Larix-Broadcaster-1.png',
	],
};

export default tool;
