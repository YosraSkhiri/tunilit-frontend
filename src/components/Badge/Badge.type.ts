import { ReactNode } from 'react'

export default interface BadgeProps {
  children?: ReactNode,
  content?: string,
  variant?: 'standard' | 'dot',
  type?: 'primary' | 'secondary',
  invisible?: boolean,
}
