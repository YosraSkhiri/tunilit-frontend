import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronSmallRightIcon = ({
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
				d="M12.5 21.25L18.75 15L12.5 8.75"
			/>
		</svg>
	)
}

ChevronSmallRightIcon.displayName = 'ChevronSmallRightIcon'

export default ChevronSmallRightIcon
