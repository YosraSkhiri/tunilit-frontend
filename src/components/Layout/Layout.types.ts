import { CSSProperties, ElementType } from 'react';

export type directionType = 'row' 
| 'column' 
| 'column-reverse' 
| 'row-reverse';

export default interface LayoutProps {
  component?: string | ElementType,
  children?: React.ReactNode,
  direction?: directionType,
  type?: 'flex' 
  | 'grid' 
  | 'inline-flex',
  flexWrap?: 'wrap' | 'nowrap',
  center?: boolean,
  classname?: string,
  style?: CSSProperties,
}
