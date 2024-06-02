import { nanoid } from 'nanoid'

import { Error,Typography } from '~/components'
import { useData } from '~/renderer/useData'

import type { Data } from './+data'
import BookmarkItem from './components/BookmarkItem'
import styles from './Page.module.scss'

const Page = () => {
  const { bookmarks } = useData<Data>()
  
  if (!bookmarks || (bookmarks && bookmarks?.length === 0)) {
    return (
      <Error message="You don't have bookmarks yet." type='noBookmarks' />
    )
  }
  
  return (
    <div>
      <Typography variant='h1'>Schools Bookmarks</Typography>
      <div className={styles['bookmarks']}>
        {
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
        }
      </div>
    </div>
  )
}

export default Page
