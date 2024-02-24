import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const HourglassIcon = ({
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
				d="M21.2501 5V8.61806C21.2501 9.11162 21.104 9.59414 20.8302 10.0048L18.4246 13.6132C17.8648 14.453 17.8648 15.547 18.4246 16.3868L20.8302 19.9952C21.104 20.4059 21.2501 20.8884 21.2501 21.3819V25M21.2501 5H23.7501M21.2501 5H8.75012M21.2501 25H23.7501M21.2501 25H8.75012M8.75012 5V8.61806C8.75012 9.11162 8.89622 9.59414 9.17 10.0048L11.5756 13.6132C12.1355 14.453 12.1355 15.547 11.5756 16.3868L9.17 19.9952C8.89622 20.4059 8.75012 20.8884 8.75012 21.3819V25M8.75012 5H6.25012M8.75012 25H6.25012"
			/>
		</svg>
	)
}

HourglassIcon.displayName = 'HourglassIcon'

export default HourglassIcon
