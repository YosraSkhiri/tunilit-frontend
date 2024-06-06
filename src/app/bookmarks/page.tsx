import { nanoid } from 'nanoid'

import { Error,Typography } from '~/components'

import BookmarkItem from './components/BookmarkItem'
import data from './data'
import styles from './Page.module.scss'

const Page = async ({ searchParams }: {
  searchParams?: {
    list?: string,
  }
}) => {
  const { bookmarks } = await data(searchParams?.list)
  
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
