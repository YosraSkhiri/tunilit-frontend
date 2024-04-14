import * as Avatar from '@radix-ui/react-avatar'
import clsx from 'clsx'

import styles from './SchoolLogo.module.scss'
import SchoolLogoProps from './SchoolLogo.types'

const SchoolLogo = ({ active, alt, className, size = 'medium', src }: SchoolLogoProps) => {
	const logoClass = clsx({
		[styles['s-logo']]: true,
		[styles['s-logo--active']]: active,
		[styles[`s-logo--${size}`]]: size,
	}, className)

	return (
    <Avatar.Root asChild>
      <div className={logoClass}>
        <Avatar.Image
          alt={alt}
          className={styles['s-logo__img']}
          src={src}
        />
        <Avatar.Fallback className={styles['s-logo__fallback']} delayMs={600} />
      </div>
    </Avatar.Root>
	)
}

export default SchoolLogo
