import { useContext } from 'react'
import { AccordionContext } from '../Accordion/AccordionContext'
import styles from './AccordionSummary.module.scss'
import AccordionSummaryProps from './AccordionSummary.types'
import { PlusCircleIcon, MinusCircleIcon } from '../Icons'
import Typography from '../Typography'
import ButtonBase from '../ButtonBase'

const AccordionSummary = ({
	children,
	onClick,
	onKeyDown,
}: AccordionSummaryProps) => {
	const { isExpanded } = useContext(AccordionContext)

	return (
		<ButtonBase
			className={styles['summary']}
			onClick={onClick}
			onKeyDown={onKeyDown}
			type="button"
			tabIndex={0}
			aria-expanded={isExpanded}>
			{isExpanded ? (
				<MinusCircleIcon
					size="lg"
					className={styles['summary__icon']}
					data-testid="minus-circle-icon"
				/>
			) : (
				<PlusCircleIcon
					size="lg"
					className={styles['summary__icon']}
					data-testid="plus-circle-icon"
				/>
			)}
			<Typography
				variant="body1"
				className={styles['summary__text']}>
				{children}
			</Typography>
		</ButtonBase>
	)
}

export default AccordionSummary
