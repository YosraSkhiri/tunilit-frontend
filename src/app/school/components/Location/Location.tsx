"use client"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Skeleton } from '~/components'

const Map = dynamic(() => import('~/components/Map'), { ssr: false })

const Locations = ({ locations }) => {
  return (
    <Suspense fallback={<Skeleton height='25rem' />}>
      <Map locations={locations} />
    </Suspense>
  )
}

export default Locations
