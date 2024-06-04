export type category = {
  id?: string,
  name: string
}

export default interface NavbarProps {
  schoolCategories: Array<category>
}
