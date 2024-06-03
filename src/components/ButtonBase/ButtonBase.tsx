"use client"
import { forwardRef } from 'react'

import ButtonBaseProps from './ButtonBase.types'

const ButtonBase = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonBaseProps
>(
	(
		{
			children,
			className,
			component: Component = 'button',
			disabled,
			href,
			onBlur,
			onClick,
			onFocus,
			role = 'button',
			type = 'button',
			...other
		},
		ref
	) => {
		const ButtonBaseComponent = href ? 'a' : Component

		return (
			<ButtonBaseComponent
				className={className}
				disabled={disabled}
				ref={ref}
				role={role}
				onBlur={onBlur}
				onClick={onClick}
				onFocus={onFocus}
				{...(href && { href: href })}
				{...(type && Component === 'button' && { type: type })}
				{...other}>
				{children}
			</ButtonBaseComponent>
		)
	}
)

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
