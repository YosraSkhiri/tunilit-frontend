"use client"
import clsx from 'clsx'
import { forwardRef, useState } from 'react'

import ButtonBase from '../ButtonBase'
import Tooltip, { TooltipContent, TooltipTrigger } from '../Tooltip'
import styles from './InputButton.module.scss'
import InputButtonProps from './InputButton.types'

const InputButton = forwardRef<HTMLButtonElement, InputButtonProps>(({
	ariaLabel,
	children,
	className,
	disabled,
	size = 'md',
  tooltip,
  variant = 'default',
	...other
}, ref) => {
	const [showTooltip, setShowTooltip] = useState<boolean>(false)

	const inputButtonClass = clsx({
		[styles.btn]: true,
		[styles[`btn--${variant}`]]: !disabled,
		[styles[`btn--${size}`]]: size,
		[styles[`btn--disabled`]]: disabled,
	}, className)

	const btnIcon = (
		<ButtonBase
      aria-label={ariaLabel}
			className={inputButtonClass}
			data-testid="icon-btn"
			disabled={disabled}
      ref={ref}
			{...other}>
			{children}
		</ButtonBase>
	)

	if (tooltip) {
		return (
			<Tooltip
				open={showTooltip}
				onOpenChange={setShowTooltip}>
				<TooltipTrigger
					onMouseLeave={() => setShowTooltip(false)}
					onMouseMove={() => setShowTooltip(true)}>
					{btnIcon}
				</TooltipTrigger>
				<TooltipContent>{tooltip}</TooltipContent>
			</Tooltip>
		)
	}

	return btnIcon
})

export default InputButton
