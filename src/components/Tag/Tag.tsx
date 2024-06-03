"use client"
import ButtonBase from '../ButtonBase'
import { CrossSmallIcon } from '../Icons'
import styles from './Tag.module.scss'
import TagProps from './Tag.types'

const Tag = ({ children, ...other }: TagProps) => {
	return (
		<div
			className={styles.tag}
			title={children}>
			<div className={styles['tag__label']}>{children}</div>
			<ButtonBase
				className={styles['tag__btn']}
				{...other}>
				<CrossSmallIcon
					className={styles['tag__icon']}
					size="sm"
					strokeWidth={1.6}
				/>
			</ButtonBase>
		</div>
	)
}

export default Tag
