"use client"
import { useLocalStorage } from '@rehooks/local-storage'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

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
  const [bookmarks] = useLocalStorage('bookmarks')
  const [bookmarksNumber, setBookmarksNumber] = useState<string>('')

  const getNumberOfBookmarks = () => {
    if (bookmarks) {
      const b = bookmarks?.split(',')?.length
      return (b !== undefined ? String(b) : '0')
    }
    return "0"
  }

  useEffect(() => {
    setBookmarksNumber(() => getNumberOfBookmarks())
  }, [])

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
                const list = localStorage.getItem('bookmarks')
                const listQueryString = queryString.stringify({ list: list })
                window.location.href = `/bookmarks?${listQueryString}`
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
