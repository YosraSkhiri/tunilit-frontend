import { ElementType, KeyboardEvent,MouseEvent } from 'react'

type BtnTypes = 'button' | 'submit' | 'reset'

interface ButtonBaseProps {
  children?: React.ReactNode,
  className?: string,
  component?: string | ElementType,
  disabled?: boolean,
  href?: string,
  onBlur?: (e?: MouseEvent<HTMLElement>) => void,
  onClick?: (e?: MouseEvent<HTMLElement>) => void,
  onFocus?: (e?: MouseEvent<HTMLElement>) => void,
  onKeyDown?: (e?: KeyboardEvent) => void,
  role?: string,
  tabIndex?: number,
  type?: BtnTypes
}

export default ButtonBaseProps
