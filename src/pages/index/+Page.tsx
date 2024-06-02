import queryString from 'query-string';

import { SearchForm,Typography } from '~/components'
import { useData } from '~/renderer/useData'

import { Data } from './+data'
import { HeroTitle, SchoolsTabs, TunisiaMap } from './components'
import styles from './Page.module.scss'

const Page = () => {
  const { schoolCategories, schoolsTabs, states } = useData<Data>()

  const handleSearch = async ({ categories, states}: {categories: Array<string>, states: Array<string>}) => {
    const statesString = queryString.stringify({ state: states }, {arrayFormat: 'comma'})
    const categoriesString = queryString.stringify({ category: categories }, {arrayFormat: 'comma'})
    window.location.href = `/search?${statesString}&${categoriesString}`
  }

  return (
    <div>
      <div className={styles['header-container']}>
        <div>
          <HeroTitle />
          <Typography align='center' className={styles['header__paragraph']} variant='body1'>
            Whether for a hobby or to start a career path, Tunilit is the perfect place to find the best learning path for you.
          </Typography>
          <div className={styles['header__form']}>
            <SearchForm 
              buttonProps={{
                children: 'Expoler',
                arrow: true,
                shadow: true
              }}
              categoryOptions={schoolCategories}
              className={styles['form']}
              handleSearch={handleSearch}
              stateOptions={states}
            />
          </div>
        </div>
      </div>

      <div className={styles['section']}>
        <Typography adorn className={styles['section__title']} variant='h2'>
          Discover More Learning Opportunities
        </Typography>

        <SchoolsTabs 
          categories={Object.keys(schoolsTabs)}
          schools={schoolsTabs}
        />
      </div>

      <div className={styles['section']}>
        <div className={`${styles['section__title-container']} ${styles['section__title-container--center']}`}>
          <Typography adorn className={styles['section__title']} variant='h2'>
            Explore by Location
          </Typography>
          <Typography className={styles['section__para']} variant='body3'>
          Browse Educational institutions by Tunisia’s locations
          </Typography>   
        </div>
        <TunisiaMap 
          states={states} 
        />
      </div>

    </div>
  )
}

export default Page
