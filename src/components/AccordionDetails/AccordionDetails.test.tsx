import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import Accordion from '../Accordion'
import AccordionDetails from './AccordionDetails'
import styles from './AccordionDetails.module.scss'

describe('<AccordionDetails />', () => {
	it('should render children', () => {
		const { getAllByText } = render(
			<Accordion>
				<AccordionDetails>Accordion details</AccordionDetails>
			</Accordion>
		)
		expect(getAllByText('Accordion details')).toBeTruthy()
	})

	it('should add .details-content-wrapper--expended class when expended is set is true', () => {
		const { getByTestId } = render(
			<Accordion expanded>
				<AccordionDetails>Accordion details</AccordionDetails>
			</Accordion>
		)

		expect(getByTestId('accordion-details')).toHaveClass(
			styles['details-content-wrapper--expended']
		)
	})

	it('should add .details-content-wrapper--contracted class when expended is set is false', () => {
		const { getByTestId } = render(
			<Accordion>
				<AccordionDetails>Accordion details</AccordionDetails>
			</Accordion>
		)

		expect(getByTestId('accordion-details')).toHaveClass(
			styles['details-content-wrapper--contracted']
		)
	})
})
