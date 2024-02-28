import { useContext } from 'react'

import { AccordionContext } from '../Accordion/AccordionContext'
import ButtonBase from '../ButtonBase'
import { MinusCircleIcon,PlusCircleIcon } from '../Icons'
import Typography from '../Typography'
import styles from './AccordionSummary.module.scss'
import AccordionSummaryProps from './AccordionSummary.types'

const AccordionSummary = ({
	children,
	onClick,
	onKeyDown,
}: AccordionSummaryProps) => {
	const { isExpanded } = useContext(AccordionContext)

	return (
		<ButtonBase
			aria-expanded={isExpanded}
			className={styles['summary']}
			tabIndex={0}
			type="button"
			onClick={onClick}
			onKeyDown={onKeyDown}>
			{isExpanded ? (
				<MinusCircleIcon
					className={styles['summary__icon']}
					data-testid="minus-circle-icon"
					size="lg"
				/>
			) : (
				<PlusCircleIcon
					className={styles['summary__icon']}
					data-testid="plus-circle-icon"
					size="lg"
				/>
			)}
			<Typography
				className={styles['summary__text']}
				variant="body1">
				{children}
			</Typography>
		</ButtonBase>
	)
}

export default AccordionSummary
