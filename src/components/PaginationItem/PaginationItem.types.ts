export default interface PaginationItemProps {
  currentPage: number,
  item: string,
  onClick: (clickedPageNumber: number) => void,
}
