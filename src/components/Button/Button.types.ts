import { ReactNode } from 'react'

import { AnchorButtonBaseProps, RealButtonBaseProps } from '../ButtonBase/ButtonBase.types'

export type buttonVariantType = 'primary'
| 'secondary'
| 'tertiary'
| 'success'
| 'error'
| 'subtle'

type sizeType = 'lg' | 'md'

interface CommonButtonProps {
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

export interface AnchorButtonProps extends CommonButtonProps, AnchorButtonBaseProps {}

export interface RealButtonProps extends CommonButtonProps, RealButtonBaseProps {}

type ButtonProps = AnchorButtonProps | RealButtonProps


export default ButtonProps
