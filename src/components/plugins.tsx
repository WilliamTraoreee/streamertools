import type { Price, Provider, Tool } from '../types/tool';
import Card from './card';
import { useSignal, useComputed } from '@preact/signals';
import CardPlugin from './card-plugin';

const providers = [
	{ name: 'twitch', className: '!bg-provider-twitch', icon: 'twitch-fill' },
	{ name: 'youtube', className: '!bg-provider-youtube', icon: 'youtube-fill' },
	{ name: 'kick', className: '!bg-provider-kick', icon: 'kick-fill' },
	{
		name: 'facebook',
		className: '!bg-provider-facebook',
		icon: 'facebook-fill',
	},
	{ name: 'tiktok', className: '!bg-provider-tiktok', icon: 'tiktok-fill' },
	{ name: 'x', className: '!bg-provider-x', icon: 'twitter-x-fill' },
	{
		name: 'instagram',
		className: '!bg-provider-instagram',
		icon: 'instagram-fill',
	},
	{
		name: 'linkedin',
		className: '!bg-provider-linkedin',
		icon: 'linkedin-fill',
	},
];

interface Props {
	tools: Tool[];
}

export default function PluginsList(props: Props) {
	const filter = useSignal('all');
	const providerFilter = useSignal('all');
	const filteredTools = useComputed(() =>
		props.tools
			.filter((tool) => {
				if (filter.value === 'all') return true;
				return tool.prices.includes(filter.value as Price);
			})
			.filter((tool) => {
				if (providerFilter.value === 'all') return true;
				return tool.providers.includes(providerFilter.value as Provider);
			})
	);

	return (
		<div>
			{/* <div class='flex justify-between items-center mb-6 flex-col lg:flex-row gap-3'>
				<div class='p-1 rounded-full bg-dark-400 w-fit flex'>
					<button
						class={`px-3 sm:px-4 rounded-full text-sm h-8 sm:h-12 font-medium transition-colors duration-200  hover:bg-dark-300 ${
							filter.value === 'all' ? '!bg-primary-500' : 'bg-dark-400'
						}`}
						onClick={() => (filter.value = 'all')}
					>
						All
					</button>
					<button
						class={`px-3 sm:px-4 rounded-full text-sm h-8 sm:h-12 font-medium transition-colors duration-200  hover:bg-dark-300 ${
							filter.value === 'free' ? '!bg-primary-500' : 'bg-dark-400'
						}`}
						onClick={() => (filter.value = 'free')}
					>
						Free
					</button>
					<button
						class={`px-3 sm:px-4 rounded-full text-sm h-8 sm:h-12 font-medium transition-colors duration-200  hover:bg-dark-300 ${
							filter.value === 'paid' ? '!bg-primary-500' : 'bg-dark-400'
						}`}
						onClick={() => (filter.value = 'paid')}
					>
						Paid
					</button>
				</div>

				<div class='p-1 rounded-full bg-dark-400 w-fit flex'>
					<button
						class={`px-3 sm:px-4 rounded-full text-sm h-8 sm:h-12 font-medium transition-colors duration-200 ${
							providerFilter.value === 'all' ? '!bg-primary-500' : 'bg-dark-400'
						}`}
						onClick={() => (providerFilter.value = 'all')}
					>
						All
					</button>
					{providers.map((provider) => (
						<button
							key={provider.name}
							class={`w-8 sm:w-12 rounded-full text-lg h-8 sm:h-12 font-medium transition-colors duration-200 flex justify-center items-center relative group hover:bg-dark-300 ${
								providerFilter.value === provider.name
									? provider.className
									: 'bg-dark-400'
							}`}
							onClick={() => (providerFilter.value = provider.name)}
						>
							<i class={`ri-${provider.icon}`}></i>
							<span class='absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs uppercase bg-black px-1 py-0.5 font-semibold'>
								{provider.name}
							</span>
						</button>
					))}
				</div>
			</div> */}

			<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredTools.value.map((tool) => (
					<CardPlugin {...tool} key={tool.name} />
				))}
			</div>
		</div>
	);
}
