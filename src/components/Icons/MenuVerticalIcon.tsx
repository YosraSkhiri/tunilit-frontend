"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MenuVerticalIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M16.2498 6.24992C16.2498 5.55957 15.6901 4.99992 14.9998 4.99992C14.3094 4.99992 13.7498 5.55957 13.7498 6.24992C13.7498 6.94028 14.3094 7.49992 14.9998 7.49992C15.6901 7.49992 16.2498 6.94028 16.2498 6.24992Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
			<path
				d="M16.2498 14.9999C16.2498 14.3096 15.6901 13.7499 14.9998 13.7499C14.3094 13.7499 13.7498 14.3096 13.7498 14.9999C13.7498 15.6903 14.3094 16.2499 14.9998 16.2499C15.6901 16.2499 16.2498 15.6903 16.2498 14.9999Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
			<path
				d="M16.2498 23.7499C16.2498 23.0596 15.6901 22.4999 14.9998 22.4999C14.3094 22.4999 13.7498 23.0596 13.7498 23.7499C13.7498 24.4403 14.3094 24.9999 14.9998 24.9999C15.6901 24.9999 16.2498 24.4403 16.2498 23.7499Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

MenuVerticalIcon.displayName = 'MenuVerticalIcon'

export default MenuVerticalIcon
