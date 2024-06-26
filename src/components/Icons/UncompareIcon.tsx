"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const UncompareIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M6.5625 18.875C7.3588 20.5064 8.71144 21.8561 10.4166 22.7209C12.1218 23.5857 14.0872 23.9186 16.0166 23.6696C19.1699 23.2626 21.3677 21.1311 23.75 19.1698M23.75 19.1698V23.75M23.75 19.1698V18.875H19.0625M22.1875 12.375C21.3912 10.7437 20.0386 9.39392 18.3334 8.52915C16.6282 7.66437 14.6628 7.33141 12.7334 7.58044C9.58011 7.98745 7.3823 10.1189 5 12.0803M5 12.0803V7.50002M5 12.0803V12.375H9.6875M23.7503 6.25L5.63065 24.3696"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

UncompareIcon.displayName = 'UncompareIcon'

export default UncompareIcon
