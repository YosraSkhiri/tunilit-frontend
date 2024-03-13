import Button from '../Button';
import { InfoCircleIcon } from '../Icons'
import SchoolLogo from '../SchoolLogo';
import Typography from '../Typography';
import VerificationBadge from '../VerificationBadge/VerificationBadge.tsx';
import styles from './SchoolCard.module.scss';
import SchoolCardProps from './SchoolCard.types.ts'

const SchoolCard = ({
  category,
  isVerified,
  link,
  logo,
  name
}: SchoolCardProps) => {
  return (
    <div className={styles['s-card-wrapper']}>
      <div className={styles['s-card-container']}>
      <SchoolLogo className={styles['s-card__logo']} size='xlarge' src={logo} />
        <div className={styles['s-card__details']}>
          <div className={styles['s-card__name']}>
            <Typography variant='h6'>{name}</Typography>
            {isVerified && (<VerificationBadge />)}
          </div>
          <Typography variant='body3'>{category}</Typography>
        </div>
        <Button fullWidth component="a" href={link}>
          <InfoCircleIcon />
          More info
        </Button>
      </div>
    </div>
  )
}

export default SchoolCard
