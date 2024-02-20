import styles from './Link.module.scss'
import LinkProps from './Link.types.ts'
import clsx from 'clsx'
import Typography from '../Typography'

const Link = ({
	component: Component = 'a',
	variant = 'default',
	underline = false,
	children,
	href,
	typographyProps,
	leftAdorn,
	rightAdorn,
	...other
}: LinkProps) => {
	const linkClass = clsx(styles.link, {
		[styles[`link--${variant}`]]: variant,
	})

	const typographyClass = clsx({
		[styles['link--underline']]: underline,
	})

	return (
		<Component
			className={linkClass}
			href={href}
			{...other}>
			{leftAdorn}
			<div className={styles['link-text-wrapper']}>
				<Typography
					variant="body2"
					className={typographyClass}
					{...typographyProps}>
					{children}
				</Typography>
			</div>
			{rightAdorn}
		</Component>
	)
}

export default Link
