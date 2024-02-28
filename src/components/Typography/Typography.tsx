import clsx from 'clsx'
import { ElementType, Fragment } from 'react'

import styles from './Typography.module.scss'
import TypographyProps from './Typography.types'

const Typography = ({
	adorn = false,
	align,
	children,
	className,
	component,
	noWrap = false,
	variant = 'body2',
}: TypographyProps) => {
	const typographyClass = clsx(
		styles.typography,
		{
			[styles['typography--nowrap']]: noWrap,
			[styles[`typography--${variant}`]]: true,
			[styles[`typography--align-${align}`]]: align,
		},
		className,
	)

	const variantMapping = {
		title: 'h1',
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		h5: 'h5',
		h6: 'h6',
		subtitle1: 'h6',
		subtitle2: 'h6',
		body1: 'p',
		body2: 'p',
		body3: 'p',
	}

	const Component: ElementType | string = component
		? component
		: variantMapping[variant]
	const WrapperElem: ElementType | string =
		adorn && (variant === 'h1' || variant === 'h2') ? 'div' : Fragment

	return (
		<WrapperElem
			{...(WrapperElem !== Fragment && {
				className: styles['typography--with-adorn'],
			})}>
			<Component className={typographyClass}>{children}</Component>
			{adorn && (variant === 'h1' || variant === 'h2') ? (
				<svg
					className={styles['adorn']}
					fill="none"
					height="79"
					viewBox="0 0 200 79"
					width="200"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 34.8828C31.5168 17.0813 69.2525 17.0813 99.7692 34.8828C130.286 52.6842 168.022 52.6842 198.538 34.8828M1 25.0058C31.5168 7.2044 69.2525 7.2044 99.7692 25.0058C130.286 42.8073 168.022 42.8073 198.538 25.0058M1 15.1289C31.5168 -2.67253 69.2525 -2.67253 99.7692 15.1289C130.286 32.9304 168.022 32.9304 198.538 15.1289M1 44.7597C31.5168 26.9582 69.2525 26.9582 99.7692 44.7597C130.286 62.5611 168.022 62.5611 198.538 44.7597M1 54.6366C31.5168 36.8352 69.2525 36.8352 99.7692 54.6366C130.286 72.4381 168.022 72.4381 198.538 54.6366M1 64.5135C31.5168 46.7121 69.2525 46.7121 99.7692 64.5135C130.286 82.315 168.022 82.315 198.538 64.5135"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeOpacity="0.2"
						strokeWidth="2"
					/>
				</svg>
			) : null}
		</WrapperElem>
	)
}

export default Typography
