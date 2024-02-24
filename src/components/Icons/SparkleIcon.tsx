import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const SparkleIcon = ({
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
				d="M15 3.75C15 9.9632 20.0368 15 26.25 15C20.0368 15 15 20.0368 15 26.25C15 20.0368 9.9632 15 3.75 15C9.9632 15 15 9.9632 15 3.75Z"
			/>
		</svg>
	)
}

SparkleIcon.displayName = 'SparkleIcon'

export default SparkleIcon
