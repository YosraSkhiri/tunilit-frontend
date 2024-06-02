import { nanoid } from 'nanoid'
import { lazy, Suspense } from 'react'

import { Box, Link, Paragraph, Typography} from '~/components'
import { LocationIcon, SparkleIcon } from '~/components/Icons'
import ListItem from '~/components/ListItem'
import Skeleton from '~/components/Skeleton'
import { useData } from '~/renderer/useData'

import { ContactInfo, SchoolHeader } from '../components'
import type { Data } from './+data'
import styles from './SchoolPage.module.scss'

const Map = lazy(() => import('~/components/Map'))

function Page() {
  const { school } = useData<Data>()

  return (
    <div>
      <div className={styles.container}>
        <SchoolHeader 
          categories={school.categories}
          id={school.data.id}
          logoKey={school.data.logo_key}
          name={school.data.name}
        />

        <section >
          <Typography className={styles['section__title']} variant='h2'>Overview</Typography>
          <Box className={styles['content-container']}>

            <div>
              <Typography className={styles['section__sub-title']} variant='h3'>Description</Typography>
              <div>
                <Paragraph maxLines={5}>
                  {school.data.description}
                </Paragraph>
              </div>
            </div>

            <div>
              <Typography className={styles['section__sub-title']} variant='h3'>Contact Info</Typography>
              <ContactInfo 
                facebook={school.data.sm_facebook_link}
                instagram={school.data.sm_instagram_link}
                linkedin={school.data.sm_linkedin_link}
                mail={school.data.mail}
                messenger={school.data.sm_messenger_link}
                mobile={school.data.mobile}
                phone={school.data.phone}
                website={school.data.website}
                whatsup={school.data.sm_whatsup_link}
                youtube={school.data.sm_youtube_link}
              />
            </div>

            <div>
              <Typography className={styles['section__sub-title']} variant='h3'>Locations</Typography>
              <div className={styles['locations-list']}>
                {
                  school?.locations?.map(l => (
                    <div key={nanoid()}>
                      <ListItem adorn={<SparkleIcon />}>
                        {l.address}
                      </ListItem>
                      {l.google_map_link && <Link underline href={l.google_map_link} leftAdorn={<LocationIcon />}>Get Directions</Link>}
                    </div>
                  ))
                }
              </div>
              
              <Suspense fallback={<Skeleton height='25rem' />}>
                <Map locations={school?.locations} />
              </Suspense>
            </div>
          </Box>
        </section>
      </div>
    </div>
  )
}

export default Page
