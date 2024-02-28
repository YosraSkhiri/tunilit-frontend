import { ReactElement, ReactNode } from 'react'

interface MenuProps {
	children?: ReactNode
	cornerRadius?: 0 | 10 | 20,
  renderMenuTrigger: (props: object) => ReactElement
}

export default MenuProps
