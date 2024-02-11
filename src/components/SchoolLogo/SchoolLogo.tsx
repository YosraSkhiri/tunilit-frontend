import classNames from 'classnames'
import SchoolLogoProps from './SchoolLogo.types'
import styles from './SchoolLogo.module.scss'

const SchoolLogo = ({ src, alt, size = 'medium' }: SchoolLogoProps) => {
	const logoClass = classNames({
		[styles['s-logo']]: true,
		[styles[`s-logo--${size}`]]: size,
	})

	return (
		<div className={logoClass}>
			<img
				src={src}
				alt={alt}
				className={styles['s-logo__img']}
			/>
		</div>
	)
}

export default SchoolLogo
