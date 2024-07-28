"use client"
import { nanoid } from 'nanoid'
import { useCallback, useMemo, useState } from 'react'

import PaginationItem from '../PaginationItem'
import styles from './Pagination.module.scss'
import PaginationProps from './Pagination.types.ts'

const Pagination = ({
  count,
  onChange,
  page,
  showNext = true,
  showPrevious = true
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(page)
  
  const range = useCallback(() => {
    return Array.from({ length: count }, (_, index) => `${index + 1}`)
  }, [count])

  const generateItems = useCallback(() => {
    return [
      ...(showPrevious ? ['previous'] : []),
      ...range(),
      ...(showNext ? ['next'] : []),
    ]
  }, [range, showNext, showPrevious])

  const itemList = useMemo(() => generateItems(), [generateItems])

  const handleChange = useCallback((clickedPageNumber: number) => {
    if (clickedPageNumber > 0 && clickedPageNumber <= count) {
      setCurrentPage(clickedPageNumber)
      onChange && onChange(clickedPageNumber)
    }
  }, [count, onChange])

  return (
    <div className={styles['container']}>
      {
        itemList.map(item => (
          <PaginationItem 
            currentPage={currentPage}
            item={item}
            key={nanoid()}
            onClick={handleChange}
          />
        ))
      }
    </div>
  )
}

export default Pagination
