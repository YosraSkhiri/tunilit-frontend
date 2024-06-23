'use client'

import { useEffect, useState } from 'react'

import { Error,Typography } from '~/components'
import { useBookmarks } from '~/context/BookmarkProvider'
import { School } from '~/server/db'

import {data} from './actions'
import { BookmarkItemSkeleton } from './components/BookmarkItem'
import BookmarkList from './components/BookmarkList'
import styles from './Page.module.scss'

const Page = () => {
  const {bookmarks} = useBookmarks()
  const [schools, setSchools] = useState<School[]>([])
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading')

  useEffect(() => {
    const updateBookmarks = async () => {
      if (bookmarks.length > 0) {
        const { bookmarkedSchools } = await data(bookmarks)
        setSchools(bookmarkedSchools)
        setStatus('success')
      } else {
        setStatus('error')
      }
    }

    updateBookmarks()
  }, [bookmarks])

  if (status === 'loading') {
    return (
      <div className={styles['bookmarks']}>
        <BookmarkItemSkeleton />
        <BookmarkItemSkeleton />
        <BookmarkItemSkeleton />
      </div>
    )
  }

  if (status === 'error') {
    return (
      <Error message="You don't have bookmarks yet." type='noBookmarks' />
    )
  }
  
  return (
    <div>
      <Typography gutterBottom variant='h1'>Schools Bookmarks</Typography>
      <div className={styles['bookmarks']}>
        <BookmarkList bookmarks={schools} />
      </div>
    </div>
  )
}

export default Page
