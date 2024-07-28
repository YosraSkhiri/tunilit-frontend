import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import Accordion from '../Accordion'
import AccordionItem from '../AccordionItem'
import AccordionContent from './AccordionContent'

describe('<AccordionContent />', () => {
	it('should render children', () => {
		const { getAllByText } = render(
			<Accordion defaultValue='test1'>
        <AccordionItem value='test1'>
          <AccordionContent>Accordion details</AccordionContent>
        </AccordionItem>
			</Accordion>
		)
		expect(getAllByText('Accordion details')).toBeTruthy()
	})
})
