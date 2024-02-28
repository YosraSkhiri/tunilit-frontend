import { ReactElement, ReactNode } from 'react'

import ButtonBaseProps from '../ButtonBase/ButtonBase.types'
import TypographyProps from '../Typography/Typography.types'

type menuItemSize = 'lg' | 'md' | 'sm'

export default interface MenuItemProps {
	adorn?: ReactElement,
	buttonBaseProps?: ButtonBaseProps,
	children: ReactNode,
	disabled?: boolean,
	label: string,
	selected?: boolean,
	size?: menuItemSize,
	typographyProps?: TypographyProps
}
