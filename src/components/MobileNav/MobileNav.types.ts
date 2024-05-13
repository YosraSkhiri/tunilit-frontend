export type category = {
  id?: string,
  label: string,
  name: string
}

export default interface MobileNavProps {
  schoolCategories: Array<category>
}
