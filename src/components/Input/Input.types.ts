import { ReactElement } from 'react'

import InputBaseProps from '../InputBase/InputBase.types'

type inputVariantType = 'default' | 'info' | 'success' | 'error'

export default interface InputProps extends InputBaseProps {
	disabled?: boolean,
	endAdornment?: ReactElement,
	size?: 'md' | 'lg',
	startAdornment?: ReactElement,
	variant?: inputVariantType
}
