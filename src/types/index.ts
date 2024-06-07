export type location = {
  address: string,
  googleMapLink?: string,
  latitude: number,
  longitude: number
}

export interface SchoolProfile {
  description?: string,
  email?: string,
  facebook?: string,
  id: string,
  instagram?: string,
  linkedin?: string,
  locations: Array<location>,
  logoKey?: string,
  messenger?: string,
  mobile?: string,
  name: string,
  phone?: string,
  slug: string,
  website?: string,
  whatsup?: string,
  youtube?: string
}

export type category = {
  backgroundColor?: string,
  category: string,
  textBorderColor?: string
}
