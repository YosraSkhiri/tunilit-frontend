import { ReactNode } from 'react';

export default interface ChipProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  backgroundColor?: string,
  children: ReactNode,
  color?: string,
  size?: 'md' | 'sm',
}
