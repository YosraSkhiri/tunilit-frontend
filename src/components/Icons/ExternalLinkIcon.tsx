import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ExternalLinkIcon = forwardRef<SVGSVGElement, IconProps>(({
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
      {...other}
    >
      <path 
        d="M12.5 7.5H7.5C6.11929 7.5 5 8.61929 5 10V22.5C5 23.8807 6.11929 25 7.5 25H20C21.3807 25 22.5 23.8807 22.5 22.5V17.5M17.5 5H25M25 5V12.5M25 5L12.5 17.5" 
        stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
      />
    </svg>

	)
})

ExternalLinkIcon.displayName = 'ExternalLinkIcon'

export default ExternalLinkIcon
