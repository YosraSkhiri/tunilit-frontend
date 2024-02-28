import { ReactNode } from 'react';

export type labelVariantType = 'default'
| 'info'
| 'success'
| 'error'

export default interface InputLabelProps {
  children: ReactNode, 
  disabled?: boolean,
  htmlFor?: string,
  variant?: labelVariantType
}
