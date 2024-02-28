import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ShareIcon = ({
	className,
	height,
	size = 'md',
	stroke,
	strokeWidth,
	width,
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
			fill="none"
			height={height}
			viewBox="0 0 30 30"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<path
				d="M10.8554 13.3222L19.1404 9.1797M19.1444 20.8222L10.8671 16.6836M26.2499 7.49997C26.2499 9.57104 24.5709 11.25 22.4999 11.25C20.4288 11.25 18.7499 9.57104 18.7499 7.49997C18.7499 5.4289 20.4288 3.74997 22.4999 3.74997C24.5709 3.74997 26.2499 5.4289 26.2499 7.49997ZM11.2499 15C11.2499 17.071 9.57095 18.75 7.49988 18.75C5.42881 18.75 3.74988 17.071 3.74988 15C3.74988 12.9289 5.42881 11.25 7.49988 11.25C9.57095 11.25 11.2499 12.9289 11.2499 15ZM26.2499 22.5C26.2499 24.571 24.5709 26.25 22.4999 26.25C20.4288 26.25 18.7499 24.571 18.7499 22.5C18.7499 20.4289 20.4288 18.75 22.4999 18.75C24.5709 18.75 26.2499 20.4289 26.2499 22.5Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

ShareIcon.displayName = 'ShareIcon'

export default ShareIcon
