import { TabPanel } from '@headlessui/react'
import { nanoid } from 'nanoid'
import queryString from 'query-string'

import {Link, SchoolCard, Tabs} from '~/components'
import {ArrowRightIcon} from '~/components/Icons'

import styles from './SchoolsTabs.module.scss'
import SchoolsTabsProps from './SchoolsTabs.types.ts'

const SchoolsTabs = ({categories, schools}: SchoolsTabsProps) => {
  const renderTabs = () => {
    return categories.map((cat: string) => (
      <TabPanel key={nanoid()}>
        <div className={styles['tab__panel-container']}>
          {
            schools[cat].map(
              s => 
                <SchoolCard 
                  category={s.categories !== null ? s.categories : ''}
                  key={nanoid()}  
                  link={`/school/${s.slug}`}
                  logo={`${import.meta.env.VITE_IMAGES_URL}${s.logoKey}`}
                  name={s.name}
                />
            )
          }
        </div>
        <div className={styles['link-wrapper']}>
          <Link 
            underline 
            href={`/search?${queryString.stringify({ categories: cat }, {arrayFormat: 'comma'})}`} 
            rightAdorn={<ArrowRightIcon />} 
            typographyProps={{variant: 'body1'}}
          >
            Explore More      
          </Link>
        </div>
      </TabPanel>
    ))
  }

  return (
    <div className={styles['tabs-wrapper']}>
      <Tabs 
        tabs={[...categories]}
      >
        {renderTabs()}
      </Tabs>
    </div>    
  )
}

export default SchoolsTabs
