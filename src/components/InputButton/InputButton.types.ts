import { ReactNode } from 'react'

import ButtonBaseProps from '../ButtonBase/ButtonBase.types'

type variantType = 'default' | 'info' | 'success' | 'error'
type sizeType = 'md' | 'lg'

export default interface InputButtonProps extends ButtonBaseProps {
	ariaLabel?: string,
  children: ReactNode,
  disabled?: boolean,
  size?: sizeType,
  tooltip?: string,
  variant?: variantType
}
