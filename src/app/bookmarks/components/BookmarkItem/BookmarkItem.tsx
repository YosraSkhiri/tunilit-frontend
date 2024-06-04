"use client"
import { useLocalStorage } from '@rehooks/local-storage'
import queryString from 'query-string'

import { Button,SchoolLogo, Typography } from '~/components'
import { CrossSmallIcon, ExternalLinkIcon } from '~/components/Icons'

import styles from './BookmarkItem.module.scss'
import BookmarkItemProps from './BookmarkItem.type'

const BookmarkItem = ({
  description,
  id,
  logoKey,
  name,
  slug,
}: BookmarkItemProps) => {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks')

  return (
    <div className={styles['column-wrapper']}>
      <div className={styles['column-container']}>
        <div className={styles['header']}>
          <SchoolLogo 
            size='xxlarge'
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}${logoKey}`}
          />
          <Typography variant='h4'>
            {name}
          </Typography>
        </div>
        
        <div className={styles['actions']}>
          <Button fullWidth href={`/school/${slug}`} target="_blank">
            Visit Profile
            <ExternalLinkIcon />
          </Button>
          <Button 
            fullWidth
            variant='error' 
            onClick={() => {
              const bookmarksArray = bookmarks?.split(',')
              if (bookmarksArray) {
                const newBookmarks = bookmarksArray.filter(item => item !== id)
                const bookmarksString = newBookmarks.join(',')
                setBookmarks(bookmarksString)
                const listQueryString = queryString.stringify({ list: bookmarksString })
                window.location.href = `/bookmarks?${listQueryString}`
              }
            }}
          >
            <CrossSmallIcon />
            Remove
          </Button>
        </div>
        <Typography>{description}</Typography>
      </div>
    </div>
  )
}

export default BookmarkItem
