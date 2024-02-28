import clsx from 'clsx'

import styles from './SchoolLogo.module.scss'
import SchoolLogoProps from './SchoolLogo.types'

const SchoolLogo = ({ alt, size = 'medium', src }: SchoolLogoProps) => {
	const logoClass = clsx({
		[styles['s-logo']]: true,
		[styles[`s-logo--${size}`]]: size,
	})

	return (
		<div className={logoClass}>
			<img
				alt={alt}
				className={styles['s-logo__img']}
				src={src}
			/>
		</div>
	)
}

export default SchoolLogo
