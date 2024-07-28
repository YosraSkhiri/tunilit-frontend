import { AnchorButtonBaseProps, RealButtonBaseProps } from '../ButtonBase/ButtonBase.types'

export type buttonVariantType = 'primary'
| 'secondary'
| 'tertiary'
| 'success'
| 'error'
| 'subtle'

type BtnSizes = 'sm' | 'md' | 'lg' 

interface CommonIconButtonProps {
  ariaLabel?: string,
  loading?: boolean,
  size?: BtnSizes,
  tooltip?: string,
  variant?: buttonVariantType
}

export interface AnchorIconButtonProps extends CommonIconButtonProps, AnchorButtonBaseProps {}

export interface RealIconButtonProps extends CommonIconButtonProps, RealButtonBaseProps {}

type IconButtonProps = AnchorIconButtonProps | AnchorIconButtonProps


export default IconButtonProps
