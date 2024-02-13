export type variantType = 'info'
| 'success'
| 'error'
| 'disabled'

export default interface HelperTextProps {
  children: string,
  variant?: variantType,
}
