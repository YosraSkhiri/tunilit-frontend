export type categoryType = {
  name: string
}

export default interface CategoriesDropdownProps {
  categories: Array<categoryType>,
  className: string,
}
