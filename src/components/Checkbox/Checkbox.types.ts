export default interface CheckboxProps {
  checked?: boolean, 
  defaultChecked?: boolean, 
  disabled?: boolean, 
  id?: string, 
  label?: string,
  name?: string, 
  onCheckedChange?: () => void, 
  required?: boolean,
  value?: string,
}
