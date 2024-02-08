import ButtonBaseProps from '../ButtonBase/ButtonBase.types'

export type buttonVariantType = 'primary'
| 'secondary'
| 'tertiary'
| 'success'
| 'error'
| 'subtle'

type BtnSizes = 'md' | 'lg'

export default interface IconButtonProps extends ButtonBaseProps {
  ariaLabel?: string,
  variant?: buttonVariantType,
  size?: BtnSizes,
  tooltip?: string,
  loading?: boolean,
}
