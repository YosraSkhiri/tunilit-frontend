export type category = {
  id?: string,
  name: string
}

export default interface MobileNavProps {
  schoolCategories: Array<category>
}
