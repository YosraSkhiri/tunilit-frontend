import { ReactNode } from 'react';
import ButtonBaseProps from '../ButtonBase/ButtonBase.types';

export type buttonVariantType = 'primary'
| 'secondary'
| 'tertiary'
| 'success'
| 'error'
| 'subtle'

type sizeType = 'lg' | 'md'

export default interface ButtonProps extends ButtonBaseProps {
  variant?: buttonVariantType,
  size?: sizeType,
  disabled?: boolean,
  loading?: boolean,
  arrow?: boolean,
  shadow?: boolean,
  fullWidth?: boolean,
  children?: ReactNode,
  className?: string,
}
