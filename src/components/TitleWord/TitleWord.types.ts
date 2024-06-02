import { ReactNode } from 'react';

export default interface TitleWordProps {
  adorn?: boolean,
  children: ReactNode,
  className?: string,
  dir?: 'rtl' | 'ltr',
  order?: number,
}
