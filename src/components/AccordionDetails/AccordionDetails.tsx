import clsx from 'clsx'
import { useContext } from 'react'

import { AccordionContext } from '../Accordion/AccordionContext'
import styles from './AccordionDetails.module.scss'
import AccordionDetailsProps from './AccordionDetails.types'

const AccordionDetails = ({ children }: AccordionDetailsProps) => {
	const { isExpanded } = useContext(AccordionContext)

	const contentWrapperClass = clsx({
		[styles['details-content-wrapper']]: true,
		[styles['details-content-wrapper--expended']]: isExpanded,
		[styles['details-content-wrapper--contracted']]: !isExpanded,
	})

	return (
		<div
			className={contentWrapperClass}
			data-testid="accordion-details">
			<div className={styles['details-content']}>{children}</div>
		</div>
	)
}

export default AccordionDetails
