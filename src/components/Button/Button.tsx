import { Fragment, useRef } from 'react'
import ButtonBase from '../ButtonBase'
import { LoaderIcon } from '../Icons'
import ButtonProps from './Button.types'
import styles from './Button.module.scss'
import clsx from 'clsx'

type WrapperElemType = typeof Fragment | 'div'

const Button = ({
	variant = 'primary',
	size = 'md',
	fullWidth,
	arrow,
	shadow,
	children,
	className,
	disabled,
	loading,
	...other
}: ButtonProps) => {
	const buttonClass = clsx(
		{
			[styles.btn]: true,
			[styles[`btn--${variant}`]]: !disabled && !loading,
			[styles[`btn--${size}`]]: size,
			[styles['btn--full-width']]: fullWidth,
			[styles['btn--disabled-outlined']]:
				(disabled || loading) && variant !== 'subtle',
			[styles['btn--disabled-subtle']]:
				(disabled || loading) && variant === 'subtle',
		},
		className
	)

	const wrapperClass = clsx({
		[styles['btn--shadow']]: shadow,
		[styles[`btn--shadow-${size}`]]: shadow,
		[styles['wrapper__arrow']]: arrow && variant === 'primary',
	})

	const { onBlur, onClick, onFocus } = other

	const arrowSvgRef = useRef<SVGSVGElement>(null)

	const WrapperElem: WrapperElemType = shadow || arrow ? 'div' : Fragment

	const handleFocus = (e?: React.MouseEvent<HTMLElement>) => {
		if (onFocus) onFocus(e)
		if (arrowSvgRef.current && arrow) {
			arrowSvgRef.current.classList.add(styles[`arrow--focus-${variant}`])
		}
	}

	const handleBlur = (e?: React.MouseEvent<HTMLElement>) => {
		if (onBlur) onBlur(e)
		if (arrowSvgRef.current && arrow) {
			arrowSvgRef.current.classList.remove(styles[`arrow--focus-${variant}`])
		}
	}

	const handleClick = (e?: React.MouseEvent<HTMLElement>) => {
		if (onClick) onClick(e)
	}

	return (
		<WrapperElem
			{...(WrapperElem === 'div' && {
				className: wrapperClass,
				['data-testid']: '',
			})}>
			<ButtonBase
				onClick={handleClick}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className={buttonClass}
				disabled={disabled}
				{...other}>
				{loading && (
					<LoaderIcon
						size={size}
						classname={styles['loader--animation']}
					/>
				)}
				{loading ? 'Loading' : children}
			</ButtonBase>
			{arrow && variant !== 'subtle' ? (
				<svg
					ref={arrowSvgRef}
					className={`${styles.arrow} ${
						disabled ? styles['arrow--disabled'] : ''
					}`}
					width="72"
					height="17"
					viewBox="0 0 72 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					data-testid="arrow-svg"
					focusable={false}
					aria-hidden={true}>
					<path
						className={styles.path1}
						d="M1.16111 8.20063C7.25514 8.21308 60.5781 8.32203 66.3199 8.33377"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						className={styles.path2}
						d="M58.8581 1.25788C62.2902 5.50703 66.6865 8.32578 70.7984 8.23543"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						className={styles.path3}
						d="M59.265 15.7288C62.454 11.3341 66.6865 8.32578 70.7984 8.23543"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			) : (
				''
			)}
		</WrapperElem>
	)
}

export default Button
