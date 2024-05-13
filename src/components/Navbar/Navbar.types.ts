export type category = {
  id?: string,
  label: string,
  name: string
}

export default interface NavbarProps {
  schoolCategories: Array<category>
}
