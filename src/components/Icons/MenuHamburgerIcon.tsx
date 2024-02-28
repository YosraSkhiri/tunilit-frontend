import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MenuHamburgerIcon = ({
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
				d="M4.99988 21.25H24.9999M4.99988 15H24.9999M4.99988 8.75005H24.9999"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

MenuHamburgerIcon.displayName = 'MenuHamburgerIcon'

export default MenuHamburgerIcon
