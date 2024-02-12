import type { ReactNode } from 'preact/compat';

interface Props {
	to: string;
	color?: string;
	className?: string;
	external?: string;
	children: ReactNode;
}

const buttonColor = {
	primary: 'bg-primary-500 text-white hover:bg-primary-400',
	stroke: 'bg-dark-500 border border-dark-300 hover:bg-dark-400',
};

export default function ButtonLink(props: Props) {
	const {
		to,
		color = 'primary',
		className = '',
		external = false,
		children,
	} = props;
	return (
		<a
			href={to}
			class={`h-10 rounded px-3 font-medium text-sm items-center inline-flex transition-colors duration-150 text-center justify-center ${
				buttonColor[color as keyof typeof buttonColor]
			} ${className}`}
			target={external ? '_blank' : '_self'}
		>
			{children}
		</a>
	);
}
