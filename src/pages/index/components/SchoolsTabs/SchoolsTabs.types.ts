export default interface SchoolsTabsProps {
  categories: Array<string>,
  schools: {
    [key: string]: Array<{
      categories: string | null,
      logoKey: string,
      name: string,
      slug: string | null
    }>
  }
}
