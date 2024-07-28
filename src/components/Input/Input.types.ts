import { ReactElement } from 'react'

import InputBaseProps from '../InputBase/InputBase.types'

type inputVariantType = 'default' | 'info' | 'success' | 'error'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChangeHandler = (event: { target: any; type?: any }) => void;

export default interface InputProps extends Omit<InputBaseProps, 'size'> {
	disabled?: boolean,
	endAdornment?: ReactElement,
	onBlur?: ChangeHandler;
  onChange?: ChangeHandler;
	size?: 'md' | 'lg',
  startAdornment?: ReactElement,  
  variant?: inputVariantType
}
