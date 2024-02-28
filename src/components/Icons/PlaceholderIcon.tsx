import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const PlaceholderIcon = ({
	className,
	height,
	size = 'md',
	stroke,
	strokeWidth,
	width,
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
			fill="none"
			height={height}
			viewBox="0 0 32 32"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<circle
				cx="16"
				cy="16"
				r="15"
				stroke={stroke}
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

PlaceholderIcon.displayName = 'PlaceholderIcon'

export default PlaceholderIcon
