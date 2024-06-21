"use client"
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

import { useBookmarks } from '~/context/BookmarkProvider'

import Badge from '../Badge'
import Button from '../Button'
import CategoriesDropdown from '../CategoriesDropdown'
import IconButton from '../IconButton'
import { BookmarkIcon, SearchIcon } from '../Icons'
import Layout from '../Layout'
import Logo from '../Logo'
import MobileNav from '../MobileNav'
import styles from './Navbar.module.scss'
import NavbarProps from './Navbar.types'

const Navbar = ({ schoolCategories }: NavbarProps) => {
  const { bookmarks } = useBookmarks()
  const [bookmarksNumber, setBookmarksNumber] = useState<string>('0')
  const router = useRouter()

  useEffect(() => {
    setBookmarksNumber(`${bookmarks.length}`)
  }, [bookmarks.length])

  return (
    <nav className={styles.nav}>
      <Layout className={styles['nav-flex']}>
        <Layout className={styles['nav-flex-item']}>
          <Logo animate link className={styles.logo} />
          <CategoriesDropdown
            categories={schoolCategories}
            className={styles['nav__categories']}
          />
        </Layout>

        <Layout className={`${styles['nav-flex-item']} ${styles['nav__desktop-btns']}`}>
          <Button href='/explore'>
            Search 
          <SearchIcon />
          </Button>
          <Badge 
            content={bookmarksNumber} 
            variant='standard'
          >
            <IconButton 
              tooltip='Bookmarks List'
              variant='tertiary'
              onClick={() => {
                const listQueryString = queryString.stringify({ list: bookmarks.join(',') })
                router.push(`/bookmarks?${listQueryString}`)
              }}
            >
              <BookmarkIcon />
            </IconButton>
          </Badge>
        </Layout>

        <Layout className={`${styles['nav-flex-item']} ${styles['nav__mobile-btns']}`}>
          <IconButton href='/search' variant='primary'>
            <SearchIcon />
          </IconButton>
          <MobileNav schoolCategories={schoolCategories} />
        </Layout>
      </Layout>
    </nav>
  )
}

export default Navbar
