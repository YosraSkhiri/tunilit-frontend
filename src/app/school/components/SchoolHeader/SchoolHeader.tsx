"use client"
import { useLocalStorage } from '@rehooks/local-storage';
import { nanoid } from 'nanoid'
import { Fragment, useState } from 'react';

import { Button, Chip, SchoolLogo, Toast, Typography } from '~/components'
import { BookmarkIcon, ShareIcon } from '~/components/Icons'

import styles from './SchoolHeader.module.scss'
import SchoolHeaderProps from './SchoolHeader.types'

const SchoolHeader = ({
  categories,
  id,
  logoKey,
  name,
}: SchoolHeaderProps) => {
  const [bookmarks, setBookmarks]  = useLocalStorage("bookmarks", "")
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <div className={styles['school__header']}>
        <div className={styles['school__logo']}>
          <SchoolLogo 
            size='xxlarge' 
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}${logoKey}`} 
          />
        </div>

        <div className={styles['school__brief']}>
          <Typography className={styles['school__name-wrapper']} variant='h1'>
            {name}
          </Typography>

          <div className={styles['school__categories-wrapper']}>
            <div className={styles['school__categories']}>
              {
                categories && categories.map((cat) => (
                  <Chip 
                    backgroundColor={cat.backgroundColor !== null ? cat.backgroundColor : undefined}
                    color={cat.textBorderColor !== null ? cat.textBorderColor : undefined}
                    href={`/search?category=${cat.category}`}
                    key={nanoid()}
                  >
                    {cat.category}
                  </Chip>
                ))
              }
            </div>
          </div>
        </div>

        <div className={styles['actions-wrapper']}>
          <div className={styles.actions}>
            <Button 
              variant='tertiary'
              onClick={() => {
                const currentBookmarks = bookmarks.split(",")
                if (!currentBookmarks.includes(id)) {
                  const newBookmarks = bookmarks !== "" ? bookmarks + "," + id : id
                  setBookmarks(newBookmarks)
                  setOpen(true)
                }
              }}
            >
              <BookmarkIcon />
              Bookmark
            </Button>
            <Button variant='secondary'>
              <ShareIcon />
              Share
            </Button>
          </div>
        </div>
      </div>
      <Toast message='Added to your bookmarks' open={open} onOpenChange={setOpen} />
    </Fragment>
  )
}

export default SchoolHeader
