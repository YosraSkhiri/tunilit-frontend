"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const LocationIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M20 12.7469C20 15.5083 17.7614 17.7469 15 17.7469C12.2386 17.7469 10 15.5083 10 12.7469C10 9.98548 12.2386 7.7469 15 7.7469C17.7614 7.7469 20 9.98548 20 12.7469Z"
				stroke={stroke}
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
			<path
				d="M25 13.212C25 18.3426 19.7467 23.9853 16.235 26.8148C15.5097 27.3992 14.4903 27.3992 13.765 26.8148C10.2533 23.9853 5 18.3426 5 13.212C5 7.43229 9.47715 2.7469 15 2.7469C20.5228 2.7469 25 7.43229 25 13.212Z"
				stroke={stroke}
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

LocationIcon.displayName = 'LocationIcon'

export default LocationIcon
