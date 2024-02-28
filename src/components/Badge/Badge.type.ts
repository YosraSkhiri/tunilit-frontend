import { ReactNode } from 'react'

export default interface BadgeProps {
  children?: ReactNode,
  content?: string,
  invisible?: boolean,
  type?: 'primary' | 'secondary',
  variant?: 'standard' | 'dot'
}
