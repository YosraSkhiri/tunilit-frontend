export type categoryType = {
  link: string,
  name: string
}

export default interface CategoriesDropdownProps {
  categories: Array<categoryType>,
  className: string,
}
