import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const SearchIcon = forwardRef<SVGSVGElement, IconProps>(({
	className,
	height,
	size = 'md',
	stroke,
	strokeWidth,
	width,
	...other
}, ref) => {
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
      ref={ref}
			viewBox="0 0 30 30"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<path
				d="M25 25L19.7541 19.7541M22.5 13.125C22.5 7.94733 18.3027 3.75 13.125 3.75C7.94733 3.75 3.75 7.94733 3.75 13.125C3.75 18.3027 7.94733 22.5 13.125 22.5C18.3027 22.5 22.5 18.3027 22.5 13.125Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

SearchIcon.displayName = 'SearchIcon'

export default SearchIcon
