import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import Accordion from '../Accordion'
import AccordionItem from '../AccordionItem'
import AccordionTrigger from './AccordionTrigger'

describe('<AccordionSummary />', () => {
	it('should render a string inside .summary-text element', () => {
		const { container } = render(
      <Accordion>
        <AccordionItem value='test1'>
          <AccordionTrigger>Text</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    )
		expect(container.lastChild).toHaveTextContent('Text')
	})
})
