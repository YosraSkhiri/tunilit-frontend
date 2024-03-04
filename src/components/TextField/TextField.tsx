import clsx from 'clsx'
import { forwardRef } from 'react'

import HelperText from '../HelperText'
import Input from '../Input'
import InputLabel from '../InputLabel'
import styles from './TextField.module.scss'
import TextFieldProps from './TextField.types.ts'

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			defaultValue,
			disabled,
			floatingUIProps,
			fullWidth,
			helperText,
			id,
			label,
			variant,
			...other
		},
		ref
	) => {
		const inputGroupClass = clsx({
			[styles['input-group']]: true,
			[styles['full-width']]: fullWidth,
		})

		return (
			<div
				className={inputGroupClass}
				ref={ref}
      >
				{label && (
					<InputLabel
						disabled={disabled}
						htmlFor={id}
						variant={variant}>
						{label}
					</InputLabel>
				)}
				<Input
					defaultValue={defaultValue}
					disabled={disabled}
					id={id}
					variant={variant}
					{...other}
					{...floatingUIProps}
				/>
				{helperText && (
					<HelperText
						disabled={disabled}
						variant={variant}>
						{helperText}
					</HelperText>
				)}
			</div>
		)
	}
)

TextField.displayName = 'TextField'

export default TextField
