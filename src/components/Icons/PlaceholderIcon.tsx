import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const PlaceholderIcon = ({
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
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<circle
				stroke={stroke}
				strokeWidth={strokeWidth}
				cx="16"
				cy="16"
				r="15"
			/>
		</svg>
	)
}

PlaceholderIcon.displayName = 'PlaceholderIcon'

export default PlaceholderIcon
