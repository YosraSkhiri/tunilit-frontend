import { forwardRef, useState } from 'react'
import IconButtonProps from './IconButton.type'
import clsx from 'clsx'
import styles from './IconButton.module.scss'
import ButtonBase from '../ButtonBase'
import Tooltip, { TooltipContent, TooltipTrigger } from '../Tooltip'
import { LoaderIcon } from '../Icons'

const IconButton = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	IconButtonProps
>(
	(
		{
			children,
			size = 'md',
			variant = 'primary',
			ariaLabel,
			loading,
			tooltip,
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
				data-testid="icon-btn"
				className={iconButtonClass}
				aria-label={ariaLabel}
				ref={ref}
				{...other}>
				{loading ? (
					<LoaderIcon
						size={size}
						classname={styles['loader--animation']}
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
						onMouseMove={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}>
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
