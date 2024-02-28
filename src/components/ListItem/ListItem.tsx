import clsx from 'clsx'

import Typography from '../Typography'
import styles from './ListItem.module.scss'
import ListItemProps from './ListItem.types.ts'

const ListItem = ({ adorn, children }: ListItemProps) => {
	const listItemClass = clsx({
		[styles['list-item']]: true,
	})

	return (
		<li className={listItemClass}>
			{adorn}
			<Typography>{children}</Typography>
		</li>
	)
}

export default ListItem
