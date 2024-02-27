type inputTypes = 'text' | 'email' | 'tel' | 'search' | 'password' | 'hidden'

export default interface InputBaseProps {
	autoComplete?: 'off' | 'on'
	autoFocus?: boolean
	className?: string
	defaultValue?: string
	disabled?: boolean
	id?: string
	name?: string
	onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void
	onChange?: (e?: React.FormEvent<HTMLInputElement>, newValue?: string) => void
	onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void
	onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void
	onMouseEnter?: (e?: React.MouseEvent<HTMLInputElement>) => void
	onMouseLeave?: (e?: React.MouseEvent<HTMLInputElement>) => void
	placeholder?: string
	required?: boolean
	spellCheck?: boolean
	type?: inputTypes
	value?: string
}
