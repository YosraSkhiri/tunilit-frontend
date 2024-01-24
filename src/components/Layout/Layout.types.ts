import { ElementType } from 'react';

export default interface LayoutProps {
  component?: string | ElementType,
  children?: React.ReactNode,
  dir?: 'row' | 'column' | 'column-reverse' | 'row-reverse',
  rowGap?: 'sm' | 'md' | 'lg',
  columnGap?: 'sm' | 'md' | 'lg',
  gap?: 'sm' | 'md' | 'lg',
  type?: 'flex' | 'grid',
  flexWrap?: 'wrap' | 'nowrap',
  center?: boolean,
}
