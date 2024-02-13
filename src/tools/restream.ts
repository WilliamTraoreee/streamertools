import type { Tool } from '../types/tool';

const tool: Tool = {
	iconUrl: 'https://yt3.googleusercontent.com/BMuyzby5a009YhEM56FAFfEj0JC56G6cC40mTMTl_Q4F7339zubzRHGdpujXp5QETp6wCftHUg=s900-c-k-c0x00ffffff-no-rj',
	name: 'Restream',
	slug: 'restream',
	url: 'https://restream.io/',
	urlDisplay: 'restream.io',
	description:
		'RTMP relay to every streaming provider. Easy tool to simulcast, with agragete chat widget and tools.',
	prices: ['free', 'paid'],
	providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
	tags: ['web'],
	screenshots: [
		'https://restream.io/integrations/content/images/2021/09/schedule-youtube-live-stream-wth-restream-events-add-channel.jpeg',
		'https://www.streamscheme.com/wp-content/uploads/2020/04/restream-channels.png',
	],
};

export default tool;
