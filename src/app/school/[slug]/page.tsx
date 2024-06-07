import { nanoid } from 'nanoid'
import { Metadata } from 'next'

import { Box, Link, Paragraph, Typography} from '~/components'
import { LocationIcon, SparkleIcon } from '~/components/Icons'
import ListItem from '~/components/ListItem'
import { getSchoolProfileData } from '~/server/data'

import { ContactInfo, SchoolHeader } from '../components'
import Locations from '../components/Location/Location'
import styles from './SchoolPage.module.scss'

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = params.slug
 
  const info = await getSchoolProfileData(slug)
  const school = info?.school;
 
  return {
    title: school?.name,
    description: `Explore ${school?.name} Profile`,
    openGraph: {
      images: "/images/SM-image.png",
      title: school?.name,
      description: `Explore ${school?.name} Profile`,
    },
  }
}
 
async function Page({ params }: { params: { slug: string } }) {
	const info = await getSchoolProfileData(params.slug)
  const school = info?.school;
  const categories = info?.categories;

  if (!school) return 'nope'

  return (
    <div>
      <div className={styles.container}>
        <SchoolHeader 
          categories={categories}
          id={school.id}
          logoKey={school.logoKey}
          name={school.name}
        />

        <section >
          <Typography className={styles['section__title']} variant='h2'>Overview</Typography>
          <Box className={styles['content-container']}>

            <div>
              <Typography className={styles['section__sub-title']} variant='h3'>Description</Typography>
              <div>
                <Paragraph maxLines={5}>
                  {school.description}
                </Paragraph>
              </div>
            </div>

            <div>
              <Typography className={styles['section__sub-title']} variant='h3'>Contact Info</Typography>
              <ContactInfo 
                facebook={school.facebook}
                instagram={school.instagram}
                linkedin={school.linkedin}
                mail={school.email}
                messenger={school.messenger}
                mobile={school.mobile}
                phone={school.phone}
                website={school.website}
                whatsup={school.whatsup}
                youtube={school.youtube}
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
                      {l.googleMapLink && <Link underline href={l.googleMapLink} leftAdorn={<LocationIcon />}>Get Directions</Link>}
                    </div>
                  ))
                }
              </div>
              
              <Locations locations={school?.locations} />
            </div>
          </Box>
        </section>
      </div>
    </div>
  )
}

export default Page
