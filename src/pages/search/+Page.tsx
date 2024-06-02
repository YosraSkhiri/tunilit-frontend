import { nanoid } from 'nanoid'
import queryString from 'query-string'
import { SubmitHandler, useForm } from "react-hook-form"
import { navigate } from 'vike/client/router'

import { Box, Button, SchoolCard, SearchForm, Typography } from '~/components'
import { SearchIcon } from '~/components/Icons'
import Input from '~/components/Input'
import { useData } from '~/renderer/useData'

import type { Data } from './+data'
import styles from './Page.module.scss'

type Inputs = {
  query: string
}

const Page = () => {
  const { result, schoolCategories, selectedCategories, selectedStates, states } = useData<Data>()
  const {
    handleSubmit,
    register,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const searchQueryString = queryString.stringify({ q: data.query }, {arrayFormat: 'comma'})

    const navigationPromise = navigate(`/search?${searchQueryString}`)
    await navigationPromise
  }

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
    <div>
      <Typography className={styles['title-1']} variant='h1'>Search</Typography>
      <div className={styles['search__form-container']}>
        <form className={styles['search__form-1']} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              placeholder='Expolre Schools...'
              size='lg'
              {...register("query")}
            />
          </div>
          <div>
            <Button size='lg' type='submit'>
              Search
              <SearchIcon />
            </Button>
          </div>
        </form>

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
            selectedCategories={selectedCategories}
            selectedStates={selectedStates}
            stateOptions={states}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
