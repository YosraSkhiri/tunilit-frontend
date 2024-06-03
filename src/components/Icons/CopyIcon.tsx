"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CopyIcon = forwardRef<SVGSVGElement, IconProps>(({
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
        d="M21.875 17.5H23.75C25.1307 17.5 26.25 16.3807 26.25 15V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75H15C13.6193 3.75 12.5 4.86929 12.5 6.25V8.125M6.25 12.5H15C16.3807 12.5 17.5 13.6193 17.5 15V23.75C17.5 25.1307 16.3807 26.25 15 26.25H6.25C4.86929 26.25 3.75 25.1307 3.75 23.75V15C3.75 13.6193 4.86929 12.5 6.25 12.5Z" 
        stroke={stroke} 
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
	)
})

CopyIcon.displayName = 'CopyIcon'

export default CopyIcon
