import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const WhatsupIcon = forwardRef<SVGSVGElement, IconProps>(({
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
      <path d="M15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2C7.8203 2 2 7.8203 2 15C2 17.5621 2.74119 19.9511 4.02085 21.9643L2.92857 27.0714L7.35419 25.515C9.49989 27.0779 12.1423 28 15 28Z" stroke={stroke} strokeLinejoin="round" strokeWidth={strokeWidth}/>
      <path clipRule="evenodd" d="M11.3303 8.19642C11.0599 7.53226 10.7597 7.51613 10.5043 7.51613C10.2789 7.5 10.0377 7.5 9.78231 7.5C9.54281 7.5 9.13689 7.59678 8.79172 8.00191C8.44568 8.4061 7.5 9.36154 7.5 11.3199C7.5 13.2791 8.82166 15.1729 9.00217 15.4319C9.18179 15.691 11.5557 19.8343 15.312 21.4378C18.4361 22.7652 19.0674 22.5062 19.7436 22.4246C20.419 22.3439 21.922 21.4701 22.2373 20.5308C22.5375 19.6085 22.5375 18.7992 22.4477 18.637C22.3579 18.4757 22.1017 18.3779 21.7415 18.1673C21.3656 17.9738 19.5631 17.0022 19.218 16.8722C18.8719 16.7432 18.6315 16.6787 18.3912 17.0667C18.1508 17.4718 17.4446 18.3618 17.2201 18.6208C17.0087 18.8799 16.7842 18.9121 16.4232 18.7176C16.0481 18.5241 14.8612 18.1028 13.4488 16.7432C12.3517 15.69 11.6156 14.3797 11.3901 13.9917C11.1806 13.5865 11.3602 13.3759 11.5557 13.1814C11.7212 13.004 11.9317 12.7127 12.1122 12.4859C12.2918 12.2582 12.3517 12.0808 12.4873 11.8218C12.607 11.5627 12.5471 11.3199 12.4573 11.1263C12.3666 10.9479 11.6613 8.98961 11.3303 8.19642Z" fillRule="evenodd" stroke={stroke} strokeLinejoin="round" strokeWidth={strokeWidth}/>
    </svg>
	)
})

WhatsupIcon.displayName = 'WhatsupIcon'

export default WhatsupIcon
