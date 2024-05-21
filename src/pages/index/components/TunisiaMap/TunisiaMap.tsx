import { nanoid } from 'nanoid'
import queryString from 'query-string'
import { MouseEvent } from 'react'
import { navigate } from 'vike/client/router'

import { Link } from '~/components'
import {ChevronSmallRightIcon} from '~/components/Icons'

import Map from './Map.tsx'
import styles from './TunisiaMap.module.scss'
import TunisiaMapProps from './TunisiaMap.types.ts'

const TunisiaMap = ({ states }: TunisiaMapProps) => {
  const handleOnStateClick = (e: MouseEvent<SVGPathElement>) => {
    const target = e.target as SVGPathElement
    navigate(`/search?${queryString.stringify({ state: target.id }, {arrayFormat: 'comma'})}`)
  }

  const chunks = []
  for (let i = 0; i < states.length; i += 6) {
    chunks.push(states.slice(i, i + 6));
  }
  return (
    <div className={styles['section']}>
      <div className={styles['map-wrapper']}>
        <Map 
          onClick={handleOnStateClick}
        />
      </div>
      
      <div className={styles['links-wrapper']}>
        <div className={styles['links']}>
        {
          chunks.map((chunk) => (
            <div className={styles['links-section']} key={nanoid()}>
              {
                chunk.map((state) => (
                  <Link 
                    href={`/search?state=${state.name}`} 
                    key={nanoid()} 
                    leftAdorn={<ChevronSmallRightIcon />} typographyProps={{variant: 'body1'}}
                    variant='subtle'
                  >
                    {state.name} ({state?.count ?  state?.count : 0})
                  </Link>
                ))
              }
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default TunisiaMap
