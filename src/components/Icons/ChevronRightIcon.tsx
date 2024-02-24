import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronRightIcon = ({
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
				d="M11.25 25L21.25 15L11.25 5"
			/>
		</svg>
	)
}

ChevronRightIcon.displayName = 'ChevronRightIcon'

export default ChevronRightIcon
