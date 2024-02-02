import { ElementType, MouseEvent } from 'react'

type BtnTypes = 'button' | 'submit' | 'reset'

interface ButtonBaseProps {
  component?: string | ElementType,
  children?: React.ReactNode,
  href?: string,
  type?: BtnTypes,
  className?: string,
  disabled?: boolean,
  onClick?: (e?: MouseEvent<HTMLElement>) => void,
  onBlur?: (e?: MouseEvent<HTMLElement>) => void,
  onFocus?: (e?: MouseEvent<HTMLElement>) => void,
}

export default ButtonBaseProps
