import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CheckSmallIcon = ({
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
				d="M22.5002 10.375L12.0003 20.875L7.50024 16.375"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

CheckSmallIcon.displayName = 'CheckSmallIcon'

export default CheckSmallIcon
