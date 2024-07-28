"use client"
import { useRouter } from 'next/navigation'

import { Pagination as PaginationComponent } from '~/components'

import { PaginationProps } from './Pagination.types'

const Pagination = ({
  count,
  link,
  page
}: PaginationProps) => {
  const router = useRouter()

  return (
    <PaginationComponent 
      count={count} 
      link={link}
      page={page}
      onChange={(clickedPageNumber) => {
        router.push(`${link}&page=${clickedPageNumber}`)
      }}
    />
  )
}

export default Pagination