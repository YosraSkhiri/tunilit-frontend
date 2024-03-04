import { ElementType, FocusEvent,KeyboardEvent,MouseEvent } from 'react'

type BtnTypes = 'button' | 'submit' | 'reset'

interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: string,
  children?: React.ReactNode,
  className?: string,
  component?: string | ElementType,
  ['data-value']?: string,
  disabled?: boolean,
  href?: string,
  onBlur?: (e?: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
  onClick?: (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
  onFocus?: (e?: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
  onKeyDown?: (e?: KeyboardEvent) => void,
  role?: string,
  tabIndex?: number,
  type?: BtnTypes
}

export default ButtonBaseProps
