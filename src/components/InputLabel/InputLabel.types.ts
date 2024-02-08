import { ReactNode } from 'react';

export type labelVariantType = 'default'
| 'info'
| 'success'
| 'error'

export default interface InputLabelProps {
  variant?: labelVariantType, 
  htmlFor?: string,
  children: ReactNode,
  disabled?: boolean,
}
