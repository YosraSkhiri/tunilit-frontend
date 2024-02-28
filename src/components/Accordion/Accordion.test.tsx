import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import AccordionSummary from '../AccordionSummary'
import Accordion from './Accordion'

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
