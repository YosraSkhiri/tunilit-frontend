import BadgeProps from './Badge.type'
import styles from './Badge.module.scss'
import classNames from 'classnames'

const Badge = ({
	variant = 'dot',
	type = 'primary',
	children,
	content,
	invisible,
}: BadgeProps) => {
	const badgeClass = classNames({
		[styles[`badge--${variant}`]]: variant,
		[styles[`badge--${type}`]]: type,
	})

	const badgeElem =
		(content && variant === 'standard') || (variant === 'dot' && !invisible) ? (
			<div className={badgeClass}>{variant === 'standard' && content}</div>
		) : null

	return (
		<div className={styles['badge-wrapper']}>
			{children}
			{badgeElem}
		</div>
	)
}

export default Badge
