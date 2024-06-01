import defaultErrorImg from '/images/default-error.svg'
import noBookmarksErrorImg from '/images/no-bookmarks-error.svg'

import { Typography } from '../index.ts'
import styles from './Error.module.scss'
import ErrorProps from './Error.types.ts'

const Error = ({
  message,
  type = 'default',
}: ErrorProps) => {
  return (
    <div className={styles['container']}>
      <img 
        className={styles['error__img']} 
        src={type === 'default' ? defaultErrorImg : noBookmarksErrorImg} 
      />
      <Typography className={styles['error__msg']}>{message}</Typography>
    </div>
  )
}

export default Error
