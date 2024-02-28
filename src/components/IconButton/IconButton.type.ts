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
  loading?: boolean,
  size?: BtnSizes,
  tooltip?: string,
  variant?: buttonVariantType
}
