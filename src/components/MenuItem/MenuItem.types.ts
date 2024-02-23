import { ReactElement, ReactNode } from 'react'
import TypographyProps from '../Typography/Typography.types'
import ButtonBaseProps from '../ButtonBase/ButtonBase.types'

type menuItemSize = 'lg' | 'md' | 'sm'

export default interface MenuItemProps {
	label: string
	size?: menuItemSize
	adorn?: ReactElement
	selected?: boolean
	disabled?: boolean
	children: ReactNode
	typographyProps?: TypographyProps
	buttonBaseProps?: ButtonBaseProps
}
