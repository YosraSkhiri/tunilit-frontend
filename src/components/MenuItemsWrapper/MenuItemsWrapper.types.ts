import { ReactNode } from 'react'

export default interface MenuItemsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  cornerRadius?: 0 | 10 | 20,
  fullWidth?: boolean,
  maxWidth?: boolean,
}