import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import Accordion from './Accordion'
import AccordionSummary from '../AccordionSummary'

describe('<Accordion />', () => {
	it('should render the summary', () => {
		const { getByText } = render(
			<Accordion>
				<AccordionSummary>Accordion summary</AccordionSummary>
			</Accordion>
		)

    expect(getByText('Accordion summary')).toBeVisible()
	})
})
