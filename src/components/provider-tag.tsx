import { Icon } from '@iconify/react';
import type { Providers } from '../types/tool';

const providerIcon = {
	twitch: 'twitch-fill',
	youtube: 'youtube-fill',
	kick: 'kick-fill',
	facebook: 'facebook-fill',
	tiktok: 'tiktok-fill',
	x: 'twitter-x-fill',
	instagram: 'instagram-fill',
	linkedin: 'linkedin-fill',
};

export default function ProviderTag(props: { providers: Providers }) {
	return (
		<div class='bg-dark-600 border border-dark-400 text-white px-1 rounded h-8 text-sm inline-flex items-center gap-0.5'>
			{props.providers.map((provider: string) => (
				<div class='group relative h-6 w-6 flex items-center justify-center hover:bg-dark-300 rounded-sm'>
					<Icon
						name={`ri:${providerIcon[provider as keyof typeof providerIcon]}`}
						width={18}
						height={18}
					/>
					<span class='absolute top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs uppercase bg-black px-1 py-0.5 font-semibold'>
						{provider}
					</span>
				</div>
			))}
		</div>
	);
}
