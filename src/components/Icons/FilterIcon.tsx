"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const FilterIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M23.7499 5.00003V12.5M23.7499 12.5C22.3692 12.5 21.2499 13.6193 21.2499 15C21.2499 16.3807 22.3692 17.5 23.7499 17.5M23.7499 12.5C25.1306 12.5 26.2499 13.6193 26.2499 15C26.2499 16.3807 25.1306 17.5 23.7499 17.5M23.7499 17.5V25M14.9999 5.00003V20M14.9999 20C13.6192 20 12.4999 21.1193 12.4999 22.5C12.4999 23.8807 13.6192 25 14.9999 25C16.3806 25 17.4999 23.8807 17.4999 22.5C17.4999 21.1193 16.3806 20 14.9999 20ZM6.24988 10V25M6.24988 10C7.63059 10 8.74988 8.88074 8.74988 7.50003C8.74988 6.11932 7.63059 5.00003 6.24988 5.00003C4.86917 5.00003 3.74988 6.11932 3.74988 7.50003C3.74988 8.88074 4.86917 10 6.24988 10Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

FilterIcon.displayName = 'FilterIcon'

export default FilterIcon
