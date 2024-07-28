import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react'

interface CommonButtonBaseProps {
  active?: string,
  children?: React.ReactNode,
  className?: string,
  component?: string | ElementType,
  ['data-value']?: string,
  disabled?: boolean,
  tabIndex?: number,
}

export interface AnchorButtonBaseProps extends CommonButtonBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
}

export interface RealButtonBaseProps extends CommonButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never
}

type ButtonBaseProps = AnchorButtonBaseProps | RealButtonBaseProps


export default ButtonBaseProps
