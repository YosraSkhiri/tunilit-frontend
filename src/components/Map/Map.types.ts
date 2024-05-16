export type locationType = {
  address: string,
  latitude: number,
  longitude: number
}

export default interface MapProps {
  locations: Array<locationType>
}
