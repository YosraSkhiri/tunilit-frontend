import InputBaseProps from '../InputBase/InputBase.types'

type textFieldVariantType = 'default' | 'info' | 'success' | 'error'

export default interface TextFieldProps extends InputBaseProps {
	className?: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	floatingUIProps?: any,
	fullWidth?: boolean,
	helper?: string,
	helperText?: string,
	label?: string,
	placeholder?: string,
	variant: textFieldVariantType
}
