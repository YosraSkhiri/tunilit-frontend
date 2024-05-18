import { ElementType,ReactNode } from 'react'

import TypographyProps from '../Typography/Typography.types'

type linkVariants = 'default' | 'subtle' | 'light'

export default interface LinkProps {
  active?: boolean,
	children: ReactNode,
	component?: ElementType,
  href?: string,
	leftAdorn?: ReactNode,
	rightAdorn?: ReactNode,
  typographyProps?: TypographyProps,
  underline?: boolean,
  variant?: linkVariants
}
