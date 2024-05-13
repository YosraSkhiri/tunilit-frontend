import clsx from 'clsx'

import styles from './Badge.module.scss'
import BadgeProps from './Badge.type'

const Badge = ({
	children,
	content,
	invisible,
	type = 'primary',
	variant = 'dot',
}: BadgeProps) => {
	const badgeClass = clsx({
		[styles[`badge--${variant}`]]: variant,
		[styles[`badge--${type}`]]: type,
    [styles['badge--position']]: children,
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
