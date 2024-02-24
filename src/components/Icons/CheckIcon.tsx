import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CheckIcon = ({
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
				d="M24.9998 8.74997L11.2499 22.4999L4.99976 16.25"
			/>
		</svg>
	)
}

CheckIcon.displayName = 'CheckIcon'

export default CheckIcon
