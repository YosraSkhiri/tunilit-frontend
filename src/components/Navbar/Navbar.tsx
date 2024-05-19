import Badge from '../Badge'
import Button from '../Button'
import CategoriesDropdown from '../CategoriesDropdown'
import IconButton from '../IconButton'
import { CompareIcon, SearchIcon } from '../Icons'
import Layout from '../Layout'
import Logo from '../Logo'
import MobileNav from '../MobileNav'
import styles from './Navbar.module.scss'
import NavbarProps from './Navbar.types'

const Navbar = ({ schoolCategories }: NavbarProps) => {
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
          <Button href='/search'>
            Search 
          <SearchIcon />
          </Button>
          <Badge content='4' variant='standard'>
            <IconButton href='/compare' tooltip='Compare List' variant='tertiary'>
              <CompareIcon />
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
