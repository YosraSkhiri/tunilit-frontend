import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MessageCircleIcon = ({
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
				d="M9.99988 11.875H18.7499M9.99988 16.875H16.2499M19.1249 23.875L26.2499 26.25L23.8749 19.125C23.8749 19.125 24.9999 17.5 24.9999 14.375C24.9999 8.50694 20.2429 3.74997 14.3749 3.74997C8.50685 3.74997 3.74988 8.50694 3.74988 14.375C3.74988 20.243 8.50685 25 14.3749 25C17.6058 25 19.1249 23.875 19.1249 23.875Z"
			/>
		</svg>
	)
}

MessageCircleIcon.displayName = 'MessageCircleIcon'

export default MessageCircleIcon
