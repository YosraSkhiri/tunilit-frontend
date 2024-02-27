import clsx from 'clsx'
import { FocusEvent, useRef } from 'react'

import InputBase from '../InputBase'
import styles from './Input.module.scss'
import InputProps from './Input.types'

const Input = ({
	disabled = false,
	endAdornment,
	size = 'md',
	startAdornment,
  variant = 'default',
	...other
}: InputProps) => {
	const inputWrapperRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const { onBlur, onFocus, ...rest } = other

	const inputWrapperClass = clsx({
		[styles['input-wrapper']]: true,
		[styles[`input-wrapper--${variant}`]]: variant && !disabled,
		[styles['input-wrapper--disabled']]: disabled,
		[styles[`input-wrapper--${size}`]]: size,
	})

  const inputClass = clsx({
    [styles['input']]: true,
    [styles['input--default']]: !disabled,
    [styles['input--disabled']]: disabled,
  })

	const handleOnFocus = (e?: FocusEvent<HTMLInputElement>) => {
		onFocus && onFocus(e)
		inputWrapperRef.current?.classList.add(
			styles[`input-wrapper--${variant}-focus`]
		)
	}

	const handleOnBlur = (e?: FocusEvent<HTMLInputElement>) => {
		onBlur && onBlur(e)
		inputWrapperRef.current?.classList.remove(
			styles[`input-wrapper--${variant}-focus`]
		)
	}

	const handleInputWrapperOnClick = () => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus()
		}
	}

	return (
		<div
			className={inputWrapperClass}
			ref={inputWrapperRef}
			onClick={handleInputWrapperOnClick}>
			<div className={inputClass}>
				{startAdornment && startAdornment}
				<InputBase
					className={inputClass}
          disabled={disabled}
					ref={inputRef}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
					{...rest}
				/>
			</div>
			{endAdornment && (
				<div className={styles['input__actions']}>{endAdornment}</div>
			)}
		</div>
	)
}

export default Input
