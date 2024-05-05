type option = {
  label: string,
  value: string
}

export default interface LanguageMenuProps {
  dir?: 'ltr' | 'rtl'
  onValueChange: (newValue: string) => void
  options: Array<option>,
  value: string
}
