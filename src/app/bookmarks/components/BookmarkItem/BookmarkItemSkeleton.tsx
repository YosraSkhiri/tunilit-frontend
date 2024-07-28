'use client'

import { Skeleton } from '~/components'

import styles from './BookmarkItem.module.scss'

const BookmarkItemSkeleton = () => {
  return (
    <div className={styles['column-wrapper']}>
      <div className={styles['column-container']}>
        <div className={styles['header']}>
          <Skeleton height='180px' width='180px' />
          <Skeleton width='60%' />
        </div>
        
        <Skeleton count={2} />
        <Skeleton width='70%' />
        <Skeleton count={2} width='50%' />
      </div>   
    </div>
  )
}

export default BookmarkItemSkeleton