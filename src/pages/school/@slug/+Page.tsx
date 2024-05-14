import { Button , Layout,SchoolLogo, Typography} from '~/components'
import { CompareIcon, ShareIcon } from '~/components/Icons'
import { useData } from '~/renderer/useData'

import type { Data } from './+data'
import styles from './SchoolPage.module.scss'

function Page() {
  const { school } = useData<Data>()

  return (
    <div>
      <Layout className={styles['school__info-1']} flexWrap='wrap'>
        <Layout className={styles['school__info']} flexWrap='wrap'>
          <SchoolLogo 
            ambientMode 
            size='xxlarge' 
            src={`https://utfs.io/f/${school.data.logo_key}`} 
          />
          <div>
            <Typography className={styles['school__name']} variant='h1'>
              {school.data.name}
            </Typography>
            <Typography variant='body3'>
              Computer Training School 
            </Typography>
          </div>
        </Layout>
        <Layout>
          <Button variant='tertiary'>
            <CompareIcon />
            Compare
          </Button>
          <Button variant='secondary'>
            <ShareIcon />
            Share
          </Button>
        </Layout>
      </Layout>
    </div>
  )
}

export default Page
