"use client"
import clsx from 'clsx'

import Typography from '../Typography'
import styles from './Link.module.scss'
import LinkProps from './Link.types.ts'

const Link = ({
  active,
	children,
	className,
	component: Component = 'a',
	href,
	leftAdorn,
	rightAdorn,
	typographyProps,
	underline = false,
  variant = 'default',
	...other
}: LinkProps) => {
	const linkClass = clsx(styles.link, {
		[styles[`link--${variant}`]]: variant,
		[styles[`link--${variant}-active`]]: variant && active,
	}, className)

	const typographyClass = clsx({
		[styles['link--underline']]: underline,
	})

	return (
		<Component
			className={linkClass}
			href={href}
			{...other}>
			{leftAdorn}
			<span className={styles['link-text-wrapper']}>
				<Typography
					className={typographyClass}
					component={'span'}
          variant="body2"
					{...typographyProps}>
					{children}
				</Typography>
			</span>
			{rightAdorn}
		</Component>
	)
}

export default Link
