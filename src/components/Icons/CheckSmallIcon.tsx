import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CheckSmallIcon = ({
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
				d="M22.5002 10.375L12.0003 20.875L7.50024 16.375"
			/>
		</svg>
	)
}

CheckSmallIcon.displayName = 'CheckSmallIcon'

export default CheckSmallIcon
