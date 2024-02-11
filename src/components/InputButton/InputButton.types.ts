import { ReactNode } from 'react'

type variantType = 'default' | 'info' | 'success' | 'error'
type sizeType = 'md' | 'lg'

export default interface InputButtonProps {
	variant?: variantType,
  size?: sizeType,
  children: ReactNode,
  tooltip?: string,
  ariaLabel?: string,
  disabled?: boolean,
}
