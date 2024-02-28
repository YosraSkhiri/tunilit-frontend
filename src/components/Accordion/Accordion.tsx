import {
	Children,
	cloneElement,
	isValidElement,
	KeyboardEvent,
	useState,
} from 'react'

import styles from './Accordion.module.scss'
import AccordionProps from './Accordion.types'
import { AccordionContext } from './AccordionContext'

const Accordion = ({ children, expanded = false }: AccordionProps) => {
	const [isExpanded, setIsExpanded] = useState(expanded)
	const [summary, details] = Children.toArray(children)

	const handleClick = () => {
		setIsExpanded((state) => !state)
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code === '13') {
			setIsExpanded((state) => !state)
		}
	}

	return (
		<div
			className={styles['accordion-container']}
			role="button">
			<AccordionContext.Provider value={{ isExpanded }}>
				{isValidElement(summary) &&
					cloneElement(summary, {
						onClick: handleClick,
						onKeyDown: handleKeyDown,
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
					} as any)}
				{details}
			</AccordionContext.Provider>
		</div>
	)
}

export default Accordion
