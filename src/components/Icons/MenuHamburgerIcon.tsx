import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MenuHamburgerIcon = ({
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
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<path
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4.99988 21.25H24.9999M4.99988 15H24.9999M4.99988 8.75005H24.9999"
			/>
		</svg>
	)
}

MenuHamburgerIcon.displayName = 'MenuHamburgerIcon'

export default MenuHamburgerIcon
