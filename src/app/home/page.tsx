//import { SearchForm,Typography } from '~/components'

//import { HeroTitle, SchoolsTabs, TunisiaMap } from './components'
//import data from './data';
import styles from './Page.module.scss'

const Page = async () => {
  //const { schoolCategories, schoolsTabs, states } = await data();
  return 'home'
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
