import { ReactNode } from 'react'

type variantType = 'default' | 'info' | 'success' | 'error'
type sizeType = 'md' | 'lg'

export default interface InputButtonProps {
	ariaLabel?: string,
  children: ReactNode,
  disabled?: boolean,
  size?: sizeType,
  tooltip?: string,
  variant?: variantType
}
