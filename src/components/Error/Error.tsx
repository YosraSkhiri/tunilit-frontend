"use client"
import Image from 'next/image'

import Typography from '../Typography'
import styles from './Error.module.scss'
import ErrorProps from './Error.types.ts'

const Error = ({
  message,
  type = 'default',
}: ErrorProps) => {
  return (
    <div className={styles['container']}>
      <Image 
        alt=''
        className={styles['error__img']}
        height={156.18}
        src={type === 'default' ? "/images/default-error.svg" : "/images/no-bookmarks-error.svg"} 
        width={180} 
      />
      <Typography className={styles['error__msg']}>{message}</Typography>
    </div>
  )
}

export default Error
