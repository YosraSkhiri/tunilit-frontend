import { ReactNode } from 'react'

import ButtonBaseProps from '../ButtonBase/ButtonBase.types'
import IconProps from '../Icons/Icon.types'
import TypographyProps from '../Typography/Typography.types'

type menuItemSize = 'lg' | 'md' | 'sm'

export default interface MenuItemProps {
	buttonBaseProps?: ButtonBaseProps,
	children: ReactNode,
	disabled?: boolean,
	label: string,
	leftAdorn?: React.FC<IconProps>,
	rightAdorn?: React.FC<IconProps>,
	selected?: boolean,
	size?: menuItemSize,
	typographyProps?: TypographyProps
}
