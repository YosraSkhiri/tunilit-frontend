import {Logo} from '~/components';

import styles from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={styles['loading']}>
      <div className={styles['container']}>
        <div>
          <Logo className={styles.logo} />
          <div className={styles.loader}></div>
        </div>
      </div>
    </div>
  )
}