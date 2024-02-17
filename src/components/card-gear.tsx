import type { Gear } from '../types/gear';
import ButtonLink from './button-link';

interface Props {
	gear: Gear;
	path: string;
	choice?: boolean;
}

export default function CardGear(props: Props) {
	const { gear, path, choice } = props;

	return (
		<div class='p-3 bg-dark-400 rounded-lg border border-dark-300 relative'>
			{choice && (
				<div class='absolute top-0 right-0 bg-red-600 text-white px-2 py-1 rounded-bl-lg rounded-tr-lg uppercase text-xs font-semibold'>
					Our choice
				</div>
			)}
			<a
				href={`/gears/${path}/${gear.slug}`}
				class='w-full aspect-square overflow-hidden bg-white rounded p-3 flex justify-center items-center mb-3'
			>
				<img src={gear.imageUrl} alt={gear.name} class='max-h-full w-auto' />
			</a>
			<h3 class='text-center font-semibold text-lg'>{gear.name}</h3>
			<p class='text-center text-dark-200'>{gear.price}€</p>
			<div class='flex gap-2'>
				<ButtonLink
					to={`/gears/microphones/${gear.slug}`}
					color='stroke'
					className='w-full mt-3'
				>
					Info
				</ButtonLink>
				<ButtonLink to={gear.url} className='w-full mt-3' external>
					Buy on Amazon
				</ButtonLink>
			</div>
		</div>
	);
}
