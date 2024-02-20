import { ReactNode, ElementType } from 'react'
import TypographyProps from '../Typography/Typography.types'

type linkVariants = 'default' | 'subtle' | 'light'

export default interface LinkProps {
	component?: ElementType,
	variant?: linkVariants,
  typographyProps?: TypographyProps,
	underline?: boolean
	children: string,
  leftAdorn?: ReactNode,
  rightAdorn?: ReactNode,
  href?: string,
}
