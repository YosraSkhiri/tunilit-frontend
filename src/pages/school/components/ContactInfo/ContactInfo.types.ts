import { ReactNode } from 'react'

import SocialMediaProps from '../SocialMedia/SocialMedia.types'

export default interface ContactInfoProps extends SocialMediaProps{
  mail?: string | null,
  mobile?: string | null,
  phone?: string | null,
  website?: string | null
}

export interface ContactItemProps {
  children: ReactNode,
  contactInfo?: string,
  label: string,
  onCopyClick: () => void,
  tooltip?: string
}