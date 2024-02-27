import { forwardRef } from 'react'

import InputBaseProps from './InputBase.types'

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
	(
		{
			autoComplete,
			autoFocus = false,
			className,
			defaultValue,
			disabled,
			id,
			name,
			onBlur,
			onChange,
			onClick,
			onFocus,
			onMouseEnter,
			onMouseLeave,
			placeholder,
			required,
			spellCheck,
      type = 'text',
			value,
			...other
		},
		ref
	) => (
		<input
			autoComplete={autoComplete}
			autoFocus={autoFocus}
			className={className}
			defaultValue={defaultValue}
			disabled={disabled}
			id={id}
			name={name}
			placeholder={placeholder}
			ref={ref}
			required={required}
			spellCheck={spellCheck}
			type={type}
			value={value}
			onBlur={onBlur}
			onChange={onChange}
			onClick={onClick}
			onFocus={onFocus}
      onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...other}
		/>
	)
)

export default InputBase
