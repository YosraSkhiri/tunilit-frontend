"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const BookmarkIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M7.5 9.99999C7.5 6.4817 10 5 15 5C20 5 22.5 6.48171 22.5 10V23.8572C22.5 24.9709 21.1536 25.5286 20.3661 24.7411L15.8839 20.2589C15.3957 19.7707 14.6043 19.7707 14.1161 20.2589L9.63388 24.7411C8.84643 25.5286 7.5 24.9709 7.5 23.8572V9.99999Z" 
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

BookmarkIcon.displayName = 'BookmarkIcon'

export default BookmarkIcon
