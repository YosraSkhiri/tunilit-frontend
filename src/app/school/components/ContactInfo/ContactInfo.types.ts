import { ReactNode } from 'react'

import SocialMediaProps from '../SocialMedia/SocialMedia.types'

export default interface ContactInfoProps extends SocialMediaProps{
  mail?: string,
  mobile?: string,
  phone?: string,
  website?: string
}

export interface ContactItemProps {
  children: ReactNode,
  contactInfo?: string,
  label: string,
  onCopyClick: () => void,
  tooltip?: string
}