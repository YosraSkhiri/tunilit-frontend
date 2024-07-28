import { HTMLAttributes, ReactNode } from 'react';

export default interface ParagraphProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  className?: string,
  maxLines?: number,
  variant?: 'body1' | 'body2' | 'body3'
}
