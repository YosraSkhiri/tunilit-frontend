import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CrossSmallIcon = ({
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
				d="M19.9999 10L14.9999 15M14.9999 15L9.99988 20M14.9999 15L9.99989 10M14.9999 15L19.9999 20"
			/>
		</svg>
	)
}

CrossSmallIcon.displayName = 'CrossSmallIcon'

export default CrossSmallIcon
