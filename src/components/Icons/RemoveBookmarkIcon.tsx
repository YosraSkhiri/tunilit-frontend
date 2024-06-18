"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const RemoveBookmarkIcon = forwardRef<SVGSVGElement, IconProps>(({
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
        d="M20 10C20 6.48171 17.5 5 12.5 5C7.5 5 5 6.4817 5 9.99999V23.8572C5 24.9709 6.34643 25.5286 7.13388 24.7411L11.6161 20.2589C12.1043 19.7707 12.8957 19.7707 13.3839 20.2589L17.8661 24.7411C18.6536 25.5286 20 24.9709 20 23.8572V20M20 10C17.2386 10 15 12.2386 15 15C15 17.7614 17.2386 20 20 20M20 10C22.7614 10 25 12.2386 25 15C25 17.7614 22.7614 20 20 20M18 15H22" 
        stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
      />
    </svg>

  )
})

RemoveBookmarkIcon.displayName = 'RemoveBookmarkIcon'

export default RemoveBookmarkIcon
