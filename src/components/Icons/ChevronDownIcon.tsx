import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronDownIcon = ({
	width,
	height,
	stroke,
	strokeWidth,
	className,
	size = 'md',
	...other
}: IconProps) => {
	const iconClass = clsx(
		{
			[styles['icon']]: true,
			[styles[`icon--${size}`]]: size,
		},
		className
	)

	return (
		<svg
			className={iconClass}
			width={width}
			height={height}
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<path
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8.74988 12.5L14.9999 18.75L21.2499 12.5"
			/>
		</svg>
	)
}

ChevronDownIcon.displayName = 'ChevronDownIcon'

export default ChevronDownIcon
