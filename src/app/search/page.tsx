import { nanoid } from 'nanoid'

import { Box,SchoolCard, SearchForm, Typography } from '~/components'
import { getSchoolCategories, getStates, search } from '~/server/data'

import Pagination from './components/Pagination'
import styles from './Page.module.scss'

const Page = async ({ searchParams }: {
  searchParams?: {
    category?: string,
    page?: string,
    q?: string,
    state?: string
  }
}) => {
  const selectedStates = searchParams?.state?.split(',')
	const selectedCategories = searchParams?.category?.split(',')
  const page = searchParams?.page ? searchParams?.page : '1'

  const states = await getStates()
  const result = await search({
    query: searchParams?.q,
    states: selectedStates,
    categories: selectedCategories,
    page: page,
  })
  const schoolCategories = await getSchoolCategories()

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
          selectedCategories={selectedCategories}
          selectedStates={selectedStates}
          stateOptions={states}
        />
      </Box>
      <div className={styles['search-result__count']}>
        <Typography className={styles['count']} variant='body1'>{result && result?.count ? result?.count : 0}</Typography>
        <Typography variant='body1'>Schools Found</Typography>
      </div>
      
      <div className={styles['schools-container']}>
        {
          result && result?.schools?.map(r => (
            <SchoolCard 
              category={r?.categories !== null ? r?.categories : ''}
              key={nanoid()}
              link={`/school/${r.slug}`}
              logo={`${process.env.NEXT_PUBLIC_IMAGES_URL}${r.logoKey}`}
              name={r.name}
            />
          ))
        }
      </div>
      {
        result?.count > 9 ? (
          <Pagination 
            count={Math.ceil(result?.count / 9)} 
            link={`/search?${searchParams?.category ? `category=${searchParams?.category}` : ""}${searchParams?.state ? `&state=${searchParams?.state}` : ""}`}
            page={+page}
          />
        ) : null
      }
    </div> 
  )
}

export default Page
