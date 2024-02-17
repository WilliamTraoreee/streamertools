import type { Tool } from '../types/tool';
import ButtonLink from './button-link';
import PriceTag from './price-tag';

interface Props extends Tool {}

export default function CardPlugin(props: Props) {
	const { name, description, slug, iconUrl, url, urlDisplay, prices } = props;

	return (
		<div class='p-6 bg-dark-400 rounded-lg border border-dark-300'>
			<div class='flex justify-between items-center mb-6 gap-3'>
				<a href={`/plugins/${slug}`} class='shrink-0'>
					<img
						src={iconUrl}
						alt={name}
						class='rounded-full w-10'
						loading='lazy'
						width='40'
						height='40'
					/>
				</a>
				<div class='text-right w-[calc(100%_-_60px)]'>
					<a href={`/plugins/${slug}`}>
						<h3 class='text-xl font-medium'>{name}</h3>
					</a>
					<h4 class='text-dark-200 underline -mt-0.5 text-sm truncate'>
						<a href={url}>{urlDisplay}</a>
					</h4>
				</div>
			</div>
			<div class='bg-dark-500 rounded-lg text-sm p-3 mb-3  w-full h-[5.2rem] overflow-hidden'>
				<p class='line-clamp-3 overflow-hidden w-full'>{description}</p>
			</div>

			<div class='flex gap-1 items-center justify-between'>
				<PriceTag prices={prices} />
			</div>

			<div class='flex gap-2'>
				<ButtonLink
					to={`/plugins/${slug}`}
					color='stroke'
					className='w-full mt-3'
				>
					Info
				</ButtonLink>
				<ButtonLink to={url} className='w-full mt-3'>
					Visit
				</ButtonLink>
			</div>
		</div>
	);
}
