import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const FlagIcon = ({
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
				d="M5 26.3889V20.1389M5 20.1389V5.13886C5 5.13886 8.75 2.01389 15 5.13889C21.25 8.26389 25 5.13889 25 5.13889V20.1389C25 20.1389 21.25 23.2639 15 20.1389C8.75 17.0139 5 20.1389 5 20.1389Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

FlagIcon.displayName = 'FlagIcon'

export default FlagIcon
