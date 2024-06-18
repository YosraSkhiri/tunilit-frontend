"use client"
import { useLocalStorage } from '@rehooks/local-storage';
import { nanoid } from 'nanoid'
import { Fragment, useEffect, useRef, useState } from 'react';

import { Button, Chip, SchoolLogo, ShareDialog,Toast, Typography } from '~/components'
import ButtonProps from '~/components/Button/Button.types';
import { BookmarkIcon, RemoveBookmarkIcon, ShareIcon } from '~/components/Icons'

import styles from './SchoolHeader.module.scss'
import SchoolHeaderProps from './SchoolHeader.types'

const SchoolHeader = ({
  categories,
  id,
  logoKey,
  name,
}: SchoolHeaderProps) => {
  const unsaveBtnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const saveBtnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null)

  const [bookmarks, setBookmarks]  = useLocalStorage("bookmarks", "")
  const [open, setOpen] = useState(false)
  const [bookmarkState, setBookmarkState] = useState<'Loading' | 'Bookmark' | 'Saved'>('Loading')

  useEffect(() => {
    const bookmarksArray = bookmarks.split(',')
    if(bookmarksArray.includes(id)) {
      setBookmarkState('Saved');
    } else {
      setBookmarkState('Bookmark');
    }
  }, [bookmarks, id])

  const handleBookmarkClick = () => {
    const currentBookmarks = bookmarks.split(",")
    if(bookmarkState === 'Saved') {
      const newBookmarks = currentBookmarks.filter(item => item !== id).join(',')
      setBookmarks(newBookmarks)
    } else {
      if (!currentBookmarks.includes(id)) {
        const newBookmarks = bookmarks ? `${bookmarks},${id}` : id
        setBookmarks(newBookmarks)
        setOpen(true)
      }    
    }
  }

  const getBookmarkButtonProps = () => {
    let props: ButtonProps = {
      variant: 'tertiary',
      children: (<><BookmarkIcon /> {bookmarkState}</>),
      onClick: handleBookmarkClick,
    }

    if(bookmarkState === 'Loading') {
      props = {
        ...props,
        loading: true,
      }
    }

    return props
  }

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
              {
                bookmarkState === "Saved" ? (
                  <div 
                    onMouseEnter={() => {
                      if (
                        unsaveBtnRef && unsaveBtnRef?.current
                        && saveBtnRef && saveBtnRef?.current
                        && unsaveBtnRef.current.style.display === 'none'
                        && saveBtnRef.current.style.display === 'flex'
                      ) {
                        unsaveBtnRef.current.style.display = 'flex';
                        saveBtnRef.current.style.display = 'none';
                      }
                    }}
                    onMouseLeave={() => {
                      if (
                        unsaveBtnRef && unsaveBtnRef?.current
                        && saveBtnRef && saveBtnRef?.current
                        && unsaveBtnRef.current.style.display === 'flex'
                        && saveBtnRef.current.style.display === 'none'
                      ) {
                        unsaveBtnRef.current.style.display = 'none';
                        saveBtnRef.current.style.display = 'flex';
                      }
                    }}
                  >
                    <Button
                      style={{
                        display: 'flex'
                      }}
                      ref={saveBtnRef}
                      variant='success'
                    >
                      <BookmarkIcon />
                      Saved
                    </Button>
                    <Button
                      style={{
                        display: 'none'
                      }}
                      ref={unsaveBtnRef}
                      variant='error'
                      onClick={handleBookmarkClick}
                    >
                      <RemoveBookmarkIcon />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <Button
                    {...getBookmarkButtonProps()}
                  >
                    <BookmarkIcon />
                    Bookmark
                  </Button>
                )
              }
            <ShareDialog 
              trigger={
                <Button variant='secondary'>
                  <ShareIcon />
                  Share
                </Button>
              }
            /> 
          </div>
        </div>
      </div>
      <Toast message='Added to your bookmarks' open={open} onOpenChange={setOpen} />
    </Fragment>
  )
}

export default SchoolHeader
