/* eslint-disable @typescript-eslint/no-explicit-any */
import TextFieldProps from '../TextField/TextField.types'

export type OptionType = {
  id?: string,
  label: string,
}

export default interface AutocompleteProps {
  TextFieldProps?: TextFieldProps,
  clearable?: boolean,
  fullWidth?: boolean,
  id?: string,
  inputValue: string,
  label?: string,
  multiple?: boolean,
  onChange: (e: any, newValue: string | Array<string>) => void,
  onInputChange: (e: any, newValue: string) => void,
  options?: Array<OptionType>,
  placeholder?: string,
  value?: string | Array<string>
}
