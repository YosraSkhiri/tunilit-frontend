import clsx from 'clsx'

import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CompareIcon = ({
	className,
	height,
	size = 'md',
	stroke,
	strokeWidth,
	width,
	...other
}: IconProps) => {
	const iconClass = clsx(
		{
			[styles['icon']]: true,
			[styles[`icon--${size}`]]: size,
		},
		className
	)

	return (
		<svg
			className={iconClass}
			fill="none"
			height={height}
			viewBox="0 0 30 30"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<path
				d="M8.74988 17.5C9.38692 18.7549 10.469 19.7931 11.8332 20.4583C13.1973 21.1235 14.7696 21.3797 16.3131 21.1881C18.8358 20.875 20.594 19.2354 22.4999 17.7267M22.4999 17.7267V21.25M22.4999 17.7267V17.5H18.7499M21.2499 12.5C20.6128 11.2451 19.5307 10.2068 18.1666 9.5416C16.8024 8.87639 15.2301 8.62027 13.6866 8.81183C11.164 9.12491 9.40572 10.7645 7.49988 12.2732M7.49988 12.2732V8.74997M7.49988 12.2732V12.5H11.2499"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	)
}

CompareIcon.displayName = 'CompareIcon'

export default CompareIcon
