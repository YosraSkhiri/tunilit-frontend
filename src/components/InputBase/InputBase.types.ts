import {
	FocusEvent as ReactFocusEvent,
	FormEvent as ReactFormEvent,
	InputHTMLAttributes,
	MouseEvent as ReactMouseEvent,
} from 'react'
type inputTypes = 'text' | 'email' | 'tel' | 'search' | 'password' | 'hidden'

export default interface InputBaseProps
	extends InputHTMLAttributes<HTMLInputElement> {
	autoComplete?: 'off' | 'on'
	autoFocus?: boolean
	className?: string
	defaultValue?: string
	disabled?: boolean
	id?: string
	name?: string
	onBlur?: (e: ReactFocusEvent<HTMLInputElement>) => void
	onChange?: (e: ReactFormEvent<HTMLInputElement>) => void
	onClick?: (e: ReactMouseEvent<HTMLInputElement>) => void
	onFocus?: (e: ReactFocusEvent<HTMLInputElement>) => void
	onMouseEnter?: (e: ReactMouseEvent<HTMLInputElement>) => void
	onMouseLeave?: (e: ReactMouseEvent<HTMLInputElement>) => void
	placeholder?: string
	required?: boolean
	size?: number
	spellCheck?: boolean
	type?: inputTypes
	value?: string
}
