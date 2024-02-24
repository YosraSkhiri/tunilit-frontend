import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronLeftIcon = ({
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
				d="M18.75 5L8.75 15L18.75 25"
			/>
		</svg>
	)
}

ChevronLeftIcon.displayName = 'ChevronLeftIcon'

export default ChevronLeftIcon
