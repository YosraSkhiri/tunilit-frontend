"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MessengerIcon = forwardRef<SVGSVGElement, IconProps>(({
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
				clipRule="evenodd"
				d="M15.0019 2.5C7.96073 2.5 2.5 7.65805 2.5 14.6264C2.5 18.2711 3.99425 21.4195 6.42529 23.5939C6.62739 23.7768 6.75096 24.0297 6.76054 24.3056L6.8295 26.5307C6.83445 26.6943 6.87956 26.8541 6.96085 26.9962C7.04214 27.1382 7.15712 27.2581 7.29566 27.3453C7.4342 27.4324 7.59204 27.4842 7.75529 27.496C7.91854 27.5077 8.08218 27.4792 8.2318 27.4128L10.7136 26.319C10.9253 26.227 11.16 26.2088 11.3803 26.2682C12.5201 26.5814 13.7337 26.751 14.9981 26.751C22.0393 26.751 27.5 21.5939 27.5 14.6255C27.5 7.65805 22.0402 2.5 15.0019 2.5ZM21.5661 11.9732L18.4358 16.9377C18.318 17.1246 18.1628 17.2851 17.9799 17.409C17.797 17.5329 17.5905 17.6176 17.3732 17.6577C17.156 17.6979 16.9328 17.6926 16.7178 17.6422C16.5027 17.5918 16.3004 17.4974 16.1236 17.3649L13.6331 15.499C13.5222 15.4162 13.3875 15.3714 13.249 15.3714C13.1106 15.3714 12.9759 15.4162 12.8649 15.499L9.50479 18.0498C9.05939 18.3898 8.47031 17.8525 8.76916 17.3793L11.8994 12.4148C12.0172 12.2279 12.1725 12.0674 12.3553 11.9435C12.5382 11.8196 12.7448 11.7349 12.962 11.6948C13.1792 11.6546 13.4024 11.6599 13.6175 11.7103C13.8326 11.7607 14.0349 11.8551 14.2117 11.9875L16.7021 13.8534C16.813 13.9363 16.9478 13.9811 17.0862 13.9811C17.2247 13.9811 17.3594 13.9363 17.4703 13.8534L20.8305 11.3027C21.2807 10.9579 21.8697 11.4952 21.5661 11.9732Z"
				fillRule="evenodd"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
})

MessengerIcon.displayName = 'MessengerIcon'

export default MessengerIcon
