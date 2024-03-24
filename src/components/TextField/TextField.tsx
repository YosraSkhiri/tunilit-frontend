import clsx from 'clsx'
import { forwardRef } from 'react'

import HelperText from '../HelperText'
import Input from '../Input'
import Label from '../Label/index.tsx'
import styles from './TextField.module.scss'
import TextFieldProps from './TextField.types.ts'

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			defaultValue,
			disabled,
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
      >
				{label && (
					<Label
						disabled={disabled}
						htmlFor={id}
						variant={variant}>
						{label}
					</Label>
				)}
				<Input
					defaultValue={defaultValue}
					disabled={disabled}
					id={id}
					ref={ref}
          variant={variant}
					{...other}
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
