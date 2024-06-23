'use client'
import useLocalStorage from '@rehooks/local-storage'
import { createContext, ReactNode, useContext } from 'react'

interface BookmarkContextType {
  addBookmark: (id: string) => void,
  bookmarkExist: (id: string) => boolean,
  bookmarks: string[],
  removeBookmark: (id: string) => void
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined)

export const useBookmarks = (): BookmarkContextType => {
  const context = useContext(BookmarkContext)
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider')
  }
  return context
}

export const BookmarkProvider = ({ children }: {children: ReactNode}) => {
  const [
    bookmarks, 
    setBookmarks
  ]  = useLocalStorage<Array<string>>("bookmarks", [])

  const addBookmark = (id: string) => {
    setBookmarks(bookmarks ? [...bookmarks, id] : [id]);
  }

  const removeBookmark = (id: string) => {
    setBookmarks(() => 
      bookmarks ? bookmarks.filter((bookmark) => bookmark !== id) : []
    )
  }

  const bookmarkExist = (id: string) => {
    return bookmarks.includes(id)
  }

  const value = {
    bookmarks: bookmarks || [],
    addBookmark,
    removeBookmark,
    bookmarkExist,
  }

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>
}