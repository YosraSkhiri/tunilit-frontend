import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CheckIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M24.9998 8.74997L11.2499 22.4999L4.99976 16.25"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

CheckIcon.displayName = 'CheckIcon'

export default CheckIcon
