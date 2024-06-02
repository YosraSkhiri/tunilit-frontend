import queryString from 'query-string'
import { SubmitHandler, useForm } from "react-hook-form"

import { Button, SearchForm, Typography } from '~/components'
import { SearchIcon } from '~/components/Icons'
import Input from '~/components/Input'
import { useData } from '~/renderer/useData'

import type { Data } from './+data'
import styles from './Page.module.scss'

type Inputs = {
  query: string
}

const Page = () => {
  const { schoolCategories, states } = useData<Data>()
  const {
    handleSubmit,
    register,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const searchQueryString = queryString.stringify({ q: data.query }, {arrayFormat: 'comma'})
    window.location.href = `/search?${searchQueryString}`
  }

  const handleAdvancedSearch = async ({ categories, states}: {categories: Array<string>, states: Array<string>}) => {
    const statesString = queryString.stringify({ state: states }, {arrayFormat: 'comma'})
    const categoriesString = queryString.stringify({ category: categories }, {arrayFormat: 'comma'})
    window.location.href = `/search?${statesString}&${categoriesString}`
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
            stateOptions={states}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
