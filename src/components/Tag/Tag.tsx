import ButtonBase from '../ButtonBase'
import TagProps from './Tag.types'
import { CrossSmallIcon } from '../Icons'
import styles from './Tag.module.scss'

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
					strokeWidth={1.6}
					size="sm"
					className={styles['tag__icon']}
				/>
			</ButtonBase>
		</div>
	)
}

export default Tag
