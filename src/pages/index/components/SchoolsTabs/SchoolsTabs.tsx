import { Tab } from '@headlessui/react'
import { nanoid } from 'nanoid'

import {Link, SchoolCard,Tabs} from '../../../../components'
import {ArrowRightIcon} from '../../../../components/Icons'
import styles from './SchoolsTabs.module.scss'
import SchoolsTabsProps from './SchoolsTabs.types.ts'

const schools = [
  {
    link: '#',
    name: 'School Name',
    category: 'Category',
    logo: 'https://utfs.io/f/c5f8a1e1-24a5-455d-a144-790885ba1fbd-3wpiq8.png'
  },
  {
    link: '#',
    name: 'School Name',
    category: 'Category',
    logo: 'https://utfs.io/f/c5f8a1e1-24a5-455d-a144-790885ba1fbd-3wpiq8.png'
  },
  {
    link: '#',
    name: 'School Name',
    category: 'Category',
    logo: 'https://utfs.io/f/c5f8a1e1-24a5-455d-a144-790885ba1fbd-3wpiq8.png'
  },
  {
    link: '#',
    name: 'School Name',
    category: 'Category',
    logo: 'https://utfs.io/f/c5f8a1e1-24a5-455d-a144-790885ba1fbd-3wpiq8.png'
  },
  {
    link: '#',
    name: 'School Name',
    category: 'Category',
    logo: 'https://utfs.io/f/c5f8a1e1-24a5-455d-a144-790885ba1fbd-3wpiq8.png'
  },
  {
    link: '#',
    name: 'School Name',
    category: 'Category',
    logo: 'https://utfs.io/f/c5f8a1e1-24a5-455d-a144-790885ba1fbd-3wpiq8.png'
  },
]

const SchoolsTabs = ({}: SchoolsTabsProps) => {
  return (
    <div className={styles['tabs-wrapper']}>
      <Tabs 
        tabs={[
          'Tab 1',
          'Tab 2',
          'Tab 3',
          'Tab 4',
          'Tab 5',
          'Tab 6',
        ]}
      >
        <Tab.Panel>
          <div className={styles['tab__panel-container']}>
            {
              schools.map(s => (
                <SchoolCard key={nanoid()} {...s} />
              ))
            }
          </div>
        </Tab.Panel>
      </Tabs>
      

      <div className={styles['link-wrapper']}>
      <Link underline href='#' rightAdorn={<ArrowRightIcon />} typographyProps={{variant: 'body1'}}>
        Explore More      
      </Link>
      </div>
      
    </div>
      
  )
}

export default SchoolsTabs
