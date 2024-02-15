import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const PlaceholderIcon = ({
	width,
	height,
	stroke,
	strokeWidth,
	classname,
	size = 'md',
	...other
}: IconProps) => {
	const iconClass = classNames(
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
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<circle
				stroke={stroke}
				strokeWidth={strokeWidth}
				cx="16"
				cy="16"
				r="15"
			/>
		</svg>
	)
}

PlaceholderIcon.displayName = 'PlaceholderIcon'

export default PlaceholderIcon
