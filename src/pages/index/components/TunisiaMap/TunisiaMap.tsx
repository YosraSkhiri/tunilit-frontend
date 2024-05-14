import { nanoid } from 'nanoid'
import { MouseEvent } from 'react'

import { Layout, Link } from '~/components'
import {ChevronSmallRightIcon} from '~/components/Icons'

import Map from './Map.tsx'
import styles from './TunisiaMap.module.scss'
import TunisiaMapProps from './TunisiaMap.types.ts'

const TunisiaMap = ({ states }: TunisiaMapProps) => {
  const handleOnStateClick = (e: MouseEvent<SVGPathElement>) => {
    const target = e.target as SVGPathElement;
    console.log(target.id)
  }

  const chunks = []
  for (let i = 0; i < states.length; i += 6) {
    chunks.push(states.slice(i, i + 6));
  }
  return (
    <Layout className={styles['section']}>
      <div className={styles['map-wrapper']}>
        <Map 
          onClick={handleOnStateClick}
        />
      </div>
      
      <div>
        <div className={styles['links']}>
        {
          chunks.map((chunk) => (
            <div className={styles['links-section']} key={nanoid()}>
              {
                chunk.map((state) => (
                  <Link key={nanoid()} leftAdorn={<ChevronSmallRightIcon />} typographyProps={{variant: 'body1'}} variant='subtle'>
                    {state.name}
                  </Link>
                ))
              }
            </div>
          ))
        }
        </div>
      </div>
    </Layout>
  )
}

export default TunisiaMap
