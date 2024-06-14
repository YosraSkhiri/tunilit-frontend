export default interface PaginationProps {
  count: number,
  link?: string,
  onChange: (clickedPageNumber: number) => void,
  page: number,
  showNext?: boolean,
  showPrevious?: boolean
}
