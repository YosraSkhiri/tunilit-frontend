import '~/sass/global.scss'
import 'react-loading-skeleton/dist/skeleton.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

import { Footer, Navbar } from '~/components'
import { ToastProvider } from '~/components/Toast/ToastProvider'
import { BookmarkProvider } from '~/context/BookmarkProvider'
import { getSchoolCategories } from '~/server/data'

import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Tunilit | Explore Training centers in Tunisia',
  description: `
    Discover schools and training centers across Tunisia with ease. 
    Our platform enables you to search and filter by state or category, 
    providing a comprehensive directory of educational and training institutions 
    to help you find the right fit for your needs.
  `
}

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
	const schoolCategories = await getSchoolCategories()

  return (
    <html>
      <body>
        <div className={styles.wrapper}>
          <BookmarkProvider>
            <div className={styles.container}>
              <Navbar
                schoolCategories={schoolCategories}
              />
              <ToastProvider>
                {children}
              </ToastProvider>
            </div>
            <Footer />
          </BookmarkProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

export default PageLayout
