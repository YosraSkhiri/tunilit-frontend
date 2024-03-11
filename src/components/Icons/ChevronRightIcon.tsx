import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M11.25 25L21.25 15L11.25 5"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

ChevronRightIcon.displayName = 'ChevronRightIcon'

export default ChevronRightIcon
