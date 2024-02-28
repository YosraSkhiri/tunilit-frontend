export type variantType = 'default'
| 'info'
| 'success'
| 'error'

export default interface HelperTextProps {
  children: string,
  disabled?: boolean,
  variant?: variantType
}
