import { ReactElement, ReactNode } from 'react'

interface MenuProps {
	children?: ReactNode
	renderMenuTrigger: (props: object) => ReactElement
  cornerRadius?: 0 | 10 | 20
}

export default MenuProps
