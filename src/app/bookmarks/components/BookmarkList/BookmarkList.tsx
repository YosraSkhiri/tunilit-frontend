"use client"

import { nanoid } from 'nanoid'

import BookmarkItem from '../BookmarkItem'
import BookmarkListProps from './BookmarkList.types'

const BookmarkList = ({ bookmarks }: BookmarkListProps) => {
  return (
    bookmarks.map(b => {
      if (b.id && b.id !== null && b.slug && b.slug !== null) {
        return (
          <BookmarkItem 
            description={b.description !== null ? b.description : undefined}
            id={b.id}
            key={nanoid()}
            logoKey={b.logo_key}
            name={b.name}
            slug={b.slug}
          />
        )
      }
    })
  )
}

export default BookmarkList
