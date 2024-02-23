import { ElementType, MouseEvent, KeyboardEvent } from 'react'

type BtnTypes = 'button' | 'submit' | 'reset'

interface ButtonBaseProps {
  component?: string | ElementType,
  children?: React.ReactNode,
  href?: string,
  type?: BtnTypes,
  className?: string,
  disabled?: boolean,
  tabIndex?: number,
  role?: string,
  onClick?: (e?: MouseEvent<HTMLElement>) => void,
  onBlur?: (e?: MouseEvent<HTMLElement>) => void,
  onFocus?: (e?: MouseEvent<HTMLElement>) => void,
  onKeyDown?: (e?: KeyboardEvent) => void,
}

export default ButtonBaseProps
