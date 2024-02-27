import clsx from 'clsx'
import React, { forwardRef } from 'react'

import HelperText from '../HelperText'
import Input from '../Input'
import InputLabel from '../InputLabel'
import styles from './TextField.module.scss'
import TextFieldProps from './TextField.types.ts'

type InputGroupElemType = typeof React.Fragment | 'div'

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

		const InputGroupElem: InputGroupElemType =
			label || helperText ? 'div' : React.Fragment

		return (
			<InputGroupElem
				{...((label || helperText) && { className: inputGroupClass })}>
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
					ref={ref}
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
			</InputGroupElem>
		)
	}
)

TextField.displayName = 'TextField'

export default TextField
