import { ReactNode } from 'react'

import ButtonBaseProps from '../ButtonBase/ButtonBase.types'
import TypographyProps from '../Typography/Typography.types'

type menuItemSize = 'lg' | 'md' | 'sm'

export default interface MenuItemProps {
	buttonBaseProps?: ButtonBaseProps,
	children: ReactNode,
	disabled?: boolean,
	renderLeftAdorn?: ({className}: {className?: string}) => ReactNode,
	renderRightAdorn?: ({className}: {className?: string}) => ReactNode,
	selected?: boolean,
  size?: menuItemSize,
	typographyProps?: TypographyProps
}
