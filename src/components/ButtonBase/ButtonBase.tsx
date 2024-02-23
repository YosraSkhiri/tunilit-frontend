import { forwardRef } from 'react'
import ButtonBaseProps from './ButtonBase.types'

const ButtonBase = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonBaseProps
>(
	(
		{
			component: Component = 'button',
			children,
			disabled,
			onClick,
			onFocus,
			onBlur,
			href,
			type = 'button',
			className,
			role = 'button',
			...other
		},
		ref
	) => {
		const ButtonBaseComponent = href ? 'a' : Component

		return (
			<ButtonBaseComponent
				className={className}
				disabled={disabled}
				onClick={onClick}
				onFocus={onFocus}
				onBlur={onBlur}
				ref={ref}
				role={role}
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
