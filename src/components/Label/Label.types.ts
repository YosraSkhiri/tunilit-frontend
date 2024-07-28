import { ReactNode } from 'react';

export type labelVariantType = 'default'
| 'info'
| 'success'
| 'error'

export default interface LabelProps {
  children: ReactNode, 
  disabled?: boolean,
  htmlFor?: string,
  required?: boolean,
  variant?: labelVariantType
}
