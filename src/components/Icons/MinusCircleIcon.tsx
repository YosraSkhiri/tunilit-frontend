import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MinusCircleIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				d="M9.99976 15H19.9998M26.2498 15C26.2498 21.2132 21.213 26.25 14.9998 26.25C8.78655 26.25 3.74976 21.2132 3.74976 15C3.74976 8.78677 8.78655 3.74997 14.9998 3.74997C21.213 3.74997 26.2498 8.78677 26.2498 15Z"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

MinusCircleIcon.displayName = 'MinusCircleIcon'

export default MinusCircleIcon
