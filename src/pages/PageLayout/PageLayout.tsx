import '~/sass/global.scss'

import { Footer,Navbar } from '~/components'
import { usePageContext } from '~/renderer/usePageContext'

import styles from './PageLayout.module.scss'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const pageContext = usePageContext()
  const { schoolCategories } = pageContext.data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navbar
          schoolCategories={schoolCategories}
        />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
