import queryString from 'query-string'

import { SearchForm, Typography } from '~/components'

import Form from './components/Form'
import data from './data'
import styles from './Page.module.scss'

const Page = async () => {
  const { schoolCategories, states } = await data()

  const handleAdvancedSearch = async ({ categories, states}: {categories: Array<string>, states: Array<string>}) => {
    "use server"
    const statesString = queryString.stringify({ state: states }, {arrayFormat: 'comma'})
    const categoriesString = queryString.stringify({ category: categories }, {arrayFormat: 'comma'})
    window.location.href = `/search?${statesString}&${categoriesString}`
  }
  
  return (
    <div>
      <Typography className={styles['title-1']} variant='h1'>Search</Typography>
      <div className={styles['search__form-container']}>
        
        <Form />
        <div>
          <Typography className={styles['title-2']} variant='h2'>Advanced Search</Typography>
          <SearchForm 
            buttonProps={{
              children: 'Explore',
              arrow: true,
              shadow: true,
            }}
            categoryOptions={schoolCategories}
            className={styles['search__form-2']}
            handleSearch={handleAdvancedSearch}
            stateOptions={states}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
