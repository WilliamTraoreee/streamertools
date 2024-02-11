export type Price = 'free' | 'paid';
export type Prices = Price[];

export type Provider =
	| 'twitch'
	| 'youtube'
	| 'kick'
	| 'facebook'
	| 'tiktok'
	| 'x'
	| 'instagram'
	| 'linkedin';
export type Providers = Provider[];

export type Tool = {
	iconUrl: string;
	name: string;
	url: string;
	urlDisplay: string;
	description: string;
	prices: Prices;
	providers: Providers;
	tags: string[];
	screenshots: string[];
	slug: string;
};
