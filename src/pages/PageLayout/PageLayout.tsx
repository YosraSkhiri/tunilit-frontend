import '../../sass/global.scss'

import { Footer,Navbar } from '../../components'
import { usePageContext } from '../../renderer/usePageContext'
import styles from './PageLayout.module.scss'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const pageContext = usePageContext()
  const data = pageContext.data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navbar
          schoolCategories={data?.schoolCategories}
        />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout