import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl:
		'https://play-lh.googleusercontent.com/gmQ8pPKpcyjvXlmdW7hXaQACXXR0fmItzc7vQcI7tQWmdxR56geO-6i9K0iizp6T9lU=w240-h480-rw',
	name: 'Prism Live',
	slug: 'prism_live',
	url: 'https://prismlive.com/',
	urlDisplay: 'prismlive.com',
	description:
		'Android/iOS app to stream over RTMP with plug-n-play overlays and tools.',
	prices: ['free', 'paid'],
	providers: ['twitch', 'youtube', 'kick'],
	tags: ['android', 'ios', 'smartphone', 'IRL'],
	screenshots: [
		'https://i.ibb.co/PzWQGQy/Capture-d-cran-2024-02-13-083309.png',
		'https://i.ibb.co/MSzszz6/Capture-d-cran-2024-02-13-083135.png',
	],
};

export default tool;
