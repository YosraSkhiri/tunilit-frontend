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
  arrow?: boolean,
  children?: ReactNode,
  className?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  loading?: boolean,
  shadow?: boolean,
  size?: sizeType,
  variant?: buttonVariantType
}
