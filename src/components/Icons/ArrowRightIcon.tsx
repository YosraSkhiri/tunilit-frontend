import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ArrowRightIcon = ({
	width,
	height,
	stroke,
	strokeWidth,
	classname,
	size = 'md',
	...other
}: IconProps) => {
	const iconClass = clsx(
		{
			[styles['icon']]: true,
			[styles[`icon--${size}`]]: size,
		},
		classname
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
				d="M1.875 15H26.25M26.25 15L17.8125 7.5M26.25 15L17.8125 22.5"
			/>
		</svg>
	)
}

ArrowRightIcon.displayName = 'ArrowRightIcon'

export default ArrowRightIcon
