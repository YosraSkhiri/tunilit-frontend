import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ArrowRightIcon = ({
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
				d="M1.875 15H26.25M26.25 15L17.8125 7.5M26.25 15L17.8125 22.5"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

ArrowRightIcon.displayName = 'ArrowRightIcon'

export default ArrowRightIcon
