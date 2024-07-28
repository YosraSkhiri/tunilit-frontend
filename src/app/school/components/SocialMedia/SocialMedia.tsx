import { IconButton } from '~/components'
import { FacebookIcon, InstagramIcon, LinkedInIcon, MessengerIcon, WhatsupIcon, YoutubeIcon } from '~/components/Icons'

import styles from './SocialMedia.module.scss'
import SocialMediaProps from './SocialMedia.types'

const SocialMedia = ({
  facebook,
  instagram,
  linkedin,
  messenger,
  whatsup,
  youtube,
}: SocialMediaProps) => {
  return (
    <div className={styles['sm-container']}>
      {
        facebook && (
          <IconButton href={facebook} variant='subtle'>
            <FacebookIcon />
          </IconButton>
        )
      }
      {
        instagram && (
          <IconButton href={instagram} variant='subtle'>
            <InstagramIcon />
          </IconButton>
        )
      }
      {
        linkedin && (
          <IconButton href={linkedin} variant='subtle'>
            <LinkedInIcon />
          </IconButton>
        )
      }
      {
        messenger && (
          <IconButton href={messenger} variant='subtle'>
            <MessengerIcon />
          </IconButton>
        )
      }
      {
        whatsup && (
          <IconButton href={whatsup} variant='subtle'>
            <WhatsupIcon />
          </IconButton>
        )
      }
      {
        youtube && (
          <IconButton href={youtube} variant='subtle'>
            <YoutubeIcon />
          </IconButton>
        )
      }
    </div>
  )
}

export default SocialMedia
