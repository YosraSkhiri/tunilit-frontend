import { MouseEvent } from 'react'

export default interface TunisiaMapProps {

}

export interface MapProps {
  onClick: (e: MouseEvent<SVGPathElement>) => void,
}