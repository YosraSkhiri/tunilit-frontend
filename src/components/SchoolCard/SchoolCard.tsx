import { useState } from 'react'

import Button from '../Button'
import ButtonBase from '../ButtonBase/ButtonBase.tsx'
import { InfoCircleIcon } from '../Icons'
import SchoolLogo from '../SchoolLogo'
import Typography from '../Typography'
import VerificationBadge from '../VerificationBadge'
import styles from './SchoolCard.module.scss'
import SchoolCardProps from './SchoolCard.types.ts'

const SchoolCard = ({
  category,
  isVerified,
  link,
  logo,
  name
}: SchoolCardProps) => {
  const [focused, setFocused] = useState(false)

  const toggleFocusState = () => {
    setFocused(!focused) 
  }

  return (
    <ButtonBase 
      className={styles['s-card-wrapper']} 
      onBlur={toggleFocusState} 
      onClick={() =>  window.location.href = link} 
      onFocus={toggleFocusState}
    >
      <div className={styles['s-card-container']}>
        <div className={styles['s-card__logo']}>
          <SchoolLogo active={focused} size='xlarge' src={logo} />
        </div>
        <div className={styles['s-card__details']}>
          <div className={styles['s-card__name']}>
            <Typography variant='h6'>{name}</Typography>
            {isVerified && (<VerificationBadge />)}
          </div>
          <Typography align='left' variant='body3'>{category}</Typography>
        </div>
        <Button fullWidth component="a" href={link}>
          <InfoCircleIcon />
          More info
        </Button>
      </div>
    </ButtonBase>
  )
}

export default SchoolCard
