import IconButton from '../IconButton'
import {ChevronSmallRightIcon, FacebookIcon, LinkedInIcon, MessengerIcon} from '../Icons'
import Link  from '../Link'
import Logo from '../Logo'
import Typography from '../Typography'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles['footer-wrapper']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer__section']}>
          <Logo />
          <Typography>
            Find the right education path 
            for you in Tunisia.
          </Typography>
          <Typography>
            ©2024
          </Typography>
          <div className={styles['footer__sm']}>
            <IconButton variant='subtle'>
              <FacebookIcon />
            </IconButton>
            <IconButton variant='subtle'>
              <MessengerIcon />
            </IconButton>
            <IconButton variant='subtle'>
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>
        <div className={styles['footer__section']}>
          <Link 
            href='/contact' 
            leftAdorn={<ChevronSmallRightIcon />} 
            typographyProps={{ variant: 'body1' }}
            variant='subtle'
          >
            Contact
          </Link>
          <Link 
            href='/about' 
            leftAdorn={<ChevronSmallRightIcon />} 
            typographyProps={{ variant: 'body1' }}
            variant='subtle'
          >
            About us
          </Link>
          <Link 
            href='/termsOfUse' 
            leftAdorn={<ChevronSmallRightIcon />} 
            typographyProps={{ variant: 'body1' }}
            variant='subtle'
          >
            Terms of Use
          </Link>
          <Link 
            href='/privacyPolicy' 
            leftAdorn={<ChevronSmallRightIcon />} 
            typographyProps={{ variant: 'body1' }}
            variant='subtle'
          >
            Privacy Policy
          </Link>
        </div>
        <div className={styles['footer__section']}>
          <Link 
            href='/search' 
            leftAdorn={<ChevronSmallRightIcon />} 
            typographyProps={{ variant: 'body1' }}
            variant='subtle'
          >
            Search Schools
          </Link>
        </div>
        <Logo onlyIcon className={styles['bg-logo']} iconHeight={347.06} iconWidth={400} />
      </div>
    </div>
  )
}

export default Footer
