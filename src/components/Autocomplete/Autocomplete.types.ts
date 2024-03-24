export type OptionType = {
  id?: string,
  label: string,
}

export default interface AutocompleteProps {
  clearable?: boolean,
  fullWidth?: boolean,
  id?: string,
  inputValue: string,
  label?: string,
  loading?: boolean,
  multiple?: boolean,
  options: Array<OptionType> | Array<string>,
  placeholder?: string,
  selectedValue: string | Array<string>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setSelectedValue: React.Dispatch<React.SetStateAction<string | Array<string>>>
}
