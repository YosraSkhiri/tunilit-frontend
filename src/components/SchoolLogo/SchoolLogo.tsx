import * as Avatar from '@radix-ui/react-avatar'
import clsx from 'clsx'

import styles from './SchoolLogo.module.scss'
import SchoolLogoProps from './SchoolLogo.types'

const SchoolLogo = ({ active, alt, ambientMode, className, size = 'medium', src }: SchoolLogoProps) => {
	const logoClass = clsx({
		[styles['s-logo']]: true,
		[styles['s-logo--active']]: active,
		[styles[`s-logo--${size}`]]: size,
	}, className)

  const logoImgClass = clsx({
    [styles['s-logo__img']]: true,
    [styles[`s-logo--${size}-border`]]: true,
  })

  const logoFallbackClass = clsx({
    [styles['s-logo__fallback']]: true,
    [styles[`s-logo--${size}-border`]]: size,
  })

	return (
    <Avatar.Root asChild>
      <div className={logoClass}>
        <Avatar.Image
          alt={alt}
          className={logoImgClass}
          src={src}
        />
        {
          ambientMode && (
            <Avatar.Image
              alt={alt}
              className={styles['s-logo__img--ambient']}
              src={src}
            />
          )
        }
        <Avatar.Fallback className={logoFallbackClass} delayMs={600} />
      </div>
    </Avatar.Root>
	)
}

export default SchoolLogo
