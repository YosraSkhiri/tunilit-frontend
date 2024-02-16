import clsx from 'clsx'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MenuVerticalIcon = ({
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
				d="M16.2498 6.24992C16.2498 5.55957 15.6901 4.99992 14.9998 4.99992C14.3094 4.99992 13.7498 5.55957 13.7498 6.24992C13.7498 6.94028 14.3094 7.49992 14.9998 7.49992C15.6901 7.49992 16.2498 6.94028 16.2498 6.24992Z"
			/>
			<path
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16.2498 14.9999C16.2498 14.3096 15.6901 13.7499 14.9998 13.7499C14.3094 13.7499 13.7498 14.3096 13.7498 14.9999C13.7498 15.6903 14.3094 16.2499 14.9998 16.2499C15.6901 16.2499 16.2498 15.6903 16.2498 14.9999Z"
			/>
			<path
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16.2498 23.7499C16.2498 23.0596 15.6901 22.4999 14.9998 22.4999C14.3094 22.4999 13.7498 23.0596 13.7498 23.7499C13.7498 24.4403 14.3094 24.9999 14.9998 24.9999C15.6901 24.9999 16.2498 24.4403 16.2498 23.7499Z"
			/>
		</svg>
	)
}

MenuVerticalIcon.displayName = 'MenuVerticalIcon'

export default MenuVerticalIcon
