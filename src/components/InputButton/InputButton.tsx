import { useState } from 'react'
import ButtonBase from '../ButtonBase'
import Tooltip, { TooltipContent, TooltipTrigger } from '../Tooltip'
import InputButtonProps from './InputButton.types'
import classNames from 'classnames'
import styles from './InputButton.module.scss'

const InputButton = ({
	variant = 'default',
	size = 'md',
	children,
	tooltip,
	ariaLabel,
  disabled,
	...other
}: InputButtonProps) => {
	const [showTooltip, setShowTooltip] = useState<boolean>(false)

	const inputButtonClass = classNames({
		[styles.btn]: true,
		[styles[`btn--${variant}`]]: !disabled,
		[styles[`btn--${size}`]]: size,
		[styles[`btn--disabled`]]: disabled,
	})

	const btnIcon = (
		<ButtonBase
			data-testid="icon-btn"
			className={inputButtonClass}
			aria-label={ariaLabel}
      disabled={disabled}
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

export default InputButton
