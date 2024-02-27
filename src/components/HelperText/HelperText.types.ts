export type variantType = 'default'
| 'info'
| 'success'
| 'error'

export default interface HelperTextProps {
  children: string,
  variant?: variantType,
  disabled?: boolean,
}
