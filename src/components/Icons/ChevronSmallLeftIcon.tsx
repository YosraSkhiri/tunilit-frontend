import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronSmallLeftIcon = ({
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
			viewBox="0 0 30 30"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<path
				d="M17.5 8.75L11.25 15L17.5 21.25"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

ChevronSmallLeftIcon.displayName = 'ChevronSmallLeftIcon'

export default ChevronSmallLeftIcon
