import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronSmallRightIcon = ({
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
				d="M12.5 21.25L18.75 15L12.5 8.75"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

ChevronSmallRightIcon.displayName = 'ChevronSmallRightIcon'

export default ChevronSmallRightIcon
