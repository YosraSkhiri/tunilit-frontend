import { ElementType,MouseEvent,ReactNode } from 'react'

import TypographyProps from '../Typography/Typography.types'

type linkVariants = 'default' | 'subtle' | 'light'

export default interface LinkProps {
  active?: boolean,
	children: ReactNode,
	className?: string,
  component?: ElementType,
	href?: string,
	leftAdorn?: ReactNode,
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void,
  rightAdorn?: ReactNode,
  typographyProps?: TypographyProps,
  underline?: boolean,
  variant?: linkVariants
}
