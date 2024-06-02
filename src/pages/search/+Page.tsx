import { nanoid } from 'nanoid'
import queryString from 'query-string'
import { navigate } from 'vike/client/router'

import { Box, SchoolCard, SearchForm, Typography } from '~/components'
import { useData } from '~/renderer/useData'

import type { Data } from './+data'
import styles from './Page.module.scss'


const Page = () => {
  const { result, schoolCategories, selectedCategories, selectedStates, states } = useData<Data>()

  const handleAdvancedSearch = async ({ categories, states}: {categories: Array<string>, states: Array<string>}) => {
    const statesString = queryString.stringify({ state: states }, {arrayFormat: 'comma'})
    const categoriesString = queryString.stringify({ category: categories }, {arrayFormat: 'comma'})

    const navigationPromise = navigate(`/search?${statesString}&${categoriesString}`)
    await navigationPromise
  }

  if (result) {
    return (
      <div>
        <Typography className={styles['title']} variant='h1'>Search Result for Schools</Typography>
        <Box>
          <SearchForm 
            buttonProps={{
              children: 'Apply'
            }}
            categoryOptions={schoolCategories}
            className={styles['search-result__form']}
            handleSearch={handleAdvancedSearch}
            selectedCategories={selectedCategories}
            selectedStates={selectedStates}
            stateOptions={states}
          />
        </Box>
        <div className={styles['search-result__count']}>
          <Typography className={styles['count']} variant='body1'>{result.length}</Typography>
          <Typography variant='body1'>Schools Found</Typography>
        </div>
        
        <div className={styles['schools-container']}>
          {
            result.map(r => (
              <SchoolCard 
                category={r?.categories !== null ? r?.categories : ''}
                key={nanoid()}
                link={`/school/${r.slug}`}
                logo={`${import.meta.env.VITE_IMAGES_URL}${r.logoKey}`}
                name={r.name}
              />
            ))
          }
        </div>
      </div> 
    )
  } 
  
  return (
    <div>No result</div>
  )
}

export default Page
