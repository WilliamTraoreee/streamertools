import { Fragment } from 'preact/jsx-runtime';
import type { Prices } from '../types/tool';

export default function PriceTag(props: { prices: Prices }) {
	return (
		<Fragment>
			{props.prices.length === 1 && props.prices.includes('free') && (
				<span class='bg-green-600 text-white px-2 rounded h-7 text-sm inline-flex items-center font-medium'>
					Free
				</span>
			)}
			{props.prices.length === 1 && props.prices.includes('paid') && (
				<span class='bg-rose-600 text-white px-2 rounded h-7 text-sm inline-flex items-center font-medium'>
					$
				</span>
			)}
			{props.prices.length === 2 && (
				<span class='bg-rose-600 text-white px-2 rounded h-7 text-sm inline-flex items-center font-medium'>
					Free + $
				</span>
			)}
		</Fragment>
	);
}
