import { ReactNode } from 'react'

import { RealButtonBaseProps } from '../ButtonBase/ButtonBase.types'

type variantType = 'default' | 'info' | 'success' | 'error'
type sizeType = 'md' | 'lg'

export default interface InputButtonProps extends RealButtonBaseProps {
	ariaLabel?: string,
  children: ReactNode,
  disabled?: boolean,
  size?: sizeType,
  tooltip?: string,
  variant?: variantType
}
