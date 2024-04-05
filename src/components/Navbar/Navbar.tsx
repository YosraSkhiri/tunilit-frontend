import Badge from '../Badge'
import Button from '../Button'
import CategoriesDropdown from '../CategoriesDropdown'
import IconButton from '../IconButton'
import { CompareIcon, SearchIcon } from '../Icons'
import LanguageMenu from '../LanguageMenu'
import Layout from '../Layout'
import Logo from '../Logo'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <Layout className={styles['nav-flex']}>
        <Layout className={styles['nav-flex-item']}>
          <Logo animate link />
          <CategoriesDropdown />
        </Layout>
        <Layout className={styles['nav-flex-item']}>
          <Button>
            Search 
            <SearchIcon />
          </Button>
          <LanguageMenu />
          <Badge content='4' variant='standard'>
            <IconButton tooltip='Compare List' variant='tertiary'>
              <CompareIcon />
            </IconButton>
          </Badge>
        </Layout>
      </Layout>
    </nav>
  )
}

export default Navbar
