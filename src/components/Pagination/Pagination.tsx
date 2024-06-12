"use client"
import IconButton from '../IconButton'
import { ChevronSmallLeftIcon,ChevronSmallRightIcon, MenuHorizontalIcon } from '../Icons'
import styles from './Pagination.module.scss'
import PaginationProps from './Pagination.types.ts'

const Pagination = ({
  count,
  onChange,
  page,
}: PaginationProps) => {
  return (
    <div className={styles['container']}>
      <IconButton size='sm' variant='tertiary' onClick={() => onChange()}>
        <ChevronSmallLeftIcon />
      </IconButton>

      {
        count <= 8 ? (
          <>
            {
              Array.from({ length: count }).map((_, index) => (
                <IconButton size='sm' variant={page === (index+1) ? 'primary' : 'subtle'}>
                  {index + 1}
                </IconButton>
              ))
            }
          </>
        ) : (
          <>
            {
              Array.from({ length: 6 }).map((_, index) => (
                <IconButton size='sm' variant={page === (index+1) ? 'primary' : 'subtle'}>
                  {index + 1}
                </IconButton>
              ))
            }
            <IconButton disabled size='sm' variant='subtle'>
              <MenuHorizontalIcon />
            </IconButton>
            <IconButton size='sm' variant={page === count ? 'primary' : 'subtle'}>
              {count}
            </IconButton>
          </>
        )
      }
      
      <IconButton size='sm' variant='tertiary'>
        <ChevronSmallRightIcon />
      </IconButton>
    </div>
  )
}

export default Pagination
