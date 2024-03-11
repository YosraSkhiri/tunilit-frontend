import { CSSProperties, ElementType } from 'react';

export type directionType = 'row' 
| 'column' 
| 'column-reverse' 
| 'row-reverse';

export default interface LayoutProps {
  center?: boolean,
  children?: React.ReactNode,
  className?: string,
  component?: string | ElementType,
  direction?: directionType,
  flexWrap?: 'wrap' | 'nowrap',
  style?: CSSProperties,
  type?: 'flex' 
  | 'grid' 
  | 'inline-flex'
}
