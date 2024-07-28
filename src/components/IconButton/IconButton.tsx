"use client"
import clsx from 'clsx'
import { forwardRef, useState } from 'react'

import ButtonBase from '../ButtonBase'
import { LoaderIcon } from '../Icons'
import Tooltip, { TooltipContent, TooltipTrigger } from '../Tooltip'
import styles from './IconButton.module.scss'
import IconButtonProps from './IconButton.type'

const IconButton = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	IconButtonProps
>(
	(
		{
			ariaLabel,
			children,
			loading,
			size = 'md',
			tooltip,
			variant = 'primary',
			...other
		},
		ref
	) => {
		const [showTooltip, setShowTooltip] = useState<boolean>(false)

		const { disabled } = other

		const iconButtonClass = clsx({
			[styles.btn]: true,
			[styles[`btn--${size}`]]: true,
			[styles[`btn--${variant}`]]: !disabled && !loading,
			[styles['btn--disabled-outlined']]:
				(disabled || loading) && variant !== 'subtle',
			[styles['btn--disabled-subtle']]:
				(disabled || loading) && variant === 'subtle',
		})

		const btnIcon = (
			<ButtonBase
				aria-label={ariaLabel}
				className={iconButtonClass}
				data-testid="icon-btn"
				ref={ref}
				{...other}>
				{loading ? (
					<LoaderIcon
						className={styles['loader--animation']}
						size={size}
					/>
				) : (
					children
				)}
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
	}
)

IconButton.displayName = 'IconButton'

export default IconButton
