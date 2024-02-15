import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import AccordionSummary from './AccordionSummary'
import Accordion from '../Accordion'

describe('<AccordionSummary />', () => {
	it('should render a string inside .summary-text element', () => {
		const { container } = render(<AccordionSummary>Text</AccordionSummary>)
		expect(container.lastChild).toHaveTextContent('Text')
	})

	it('should show MinusCircleIcon when isExpanded is set to true', () => {
		const { getByTestId } = render(
			<Accordion expanded>
				<AccordionSummary>Text</AccordionSummary>
			</Accordion>
		)
		expect(getByTestId('minus-circle-icon')).toBeTruthy()
	})
})
