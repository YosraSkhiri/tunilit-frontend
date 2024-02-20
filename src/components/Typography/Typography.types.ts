import { ElementType, ReactNode } from 'react';

export type typographyVariantType ='body1'
| 'body2'
| 'body3'
| 'title'
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'subtitle1'
| 'subtitle2';

export default interface TypographyProps {
  component?: ElementType | string,
  children?: ReactNode,
  className?: string,
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right',
  variant?: typographyVariantType,
  noWrap?: boolean,
  adorn?: boolean,
}
