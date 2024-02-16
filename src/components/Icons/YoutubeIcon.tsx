import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const YoutubeIcon = ({
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
				fillRule="evenodd"
				clipRule="evenodd"
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M25.7437 5.57499C26.9276 5.89192 27.8581 6.82232 28.175 8.00626C28.7477 10.15 28.75 14.6254 28.75 14.6254C28.75 14.6254 28.75 19.1009 28.175 21.2447C27.8581 22.4286 26.9276 23.359 25.7437 23.6759C23.6 24.2509 15 24.2509 15 24.2509C15 24.2509 6.40002 24.2509 4.25625 23.6759C3.07232 23.359 2.14192 22.4286 1.82499 21.2447C1.25 19.1009 1.25 14.6254 1.25 14.6254C1.25 14.6254 1.25 10.15 1.82499 8.00626C2.14192 6.82232 3.07232 5.89192 4.25625 5.57499C6.40002 5 15 5 15 5C15 5 23.6 5 25.7437 5.57499ZM19.3917 14.6258L12.2474 18.7503V10.5013L19.3917 14.6258Z"
			/>
		</svg>
	)
}

YoutubeIcon.displayName = 'YoutubeIcon'

export default YoutubeIcon
