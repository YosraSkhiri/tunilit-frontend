"use client"
import { nanoid } from 'nanoid'
import { Fragment, useEffect, useRef, useState } from 'react';

import { Button, Chip, SchoolLogo, ShareDialog,Toast, Typography } from '~/components'
import ButtonProps from '~/components/Button/Button.types';
import { BookmarkIcon, RemoveBookmarkIcon, ShareIcon } from '~/components/Icons'
import { useBookmarks } from '~/context/BookmarkProvider';

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
  const { addBookmark, bookmarkExist, removeBookmark } = useBookmarks();
  const [open, setOpen] = useState(false)
  const [bookmarkState, setBookmarkState] = useState<'Loading' | 'Bookmark' | 'Saved'>('Loading')

  useEffect(() => {
    if (!bookmarkExist(id)) {
      setBookmarkState('Bookmark');
    } else {
      setBookmarkState('Saved');
    }
  }, [bookmarkExist, id])

  const getBookmarkButtonProps = () => {
    let props: ButtonProps = {
      variant: 'tertiary',
      children: (<><BookmarkIcon /> {bookmarkState}</>),
      onClick: () => addBookmark(id),
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
                      onClick={() => removeBookmark(id)}
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
