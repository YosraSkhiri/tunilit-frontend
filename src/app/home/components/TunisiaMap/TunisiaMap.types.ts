import { MouseEvent } from 'react'

type state = {
  count?: string | number,
  name: string
}

export default interface TunisiaMapProps {
  states: Array<state>
}

export interface MapProps {
  onClick: (e: MouseEvent<SVGPathElement>) => void,
}