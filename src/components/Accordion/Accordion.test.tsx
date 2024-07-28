import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import AccordionItem from '../AccordionItem'
import AccordionTrigger from '../AccordionTrigger'
import Accordion from './Accordion'

describe('<Accordion />', () => {
	it('should render the trigger text', () => {
		const { getByText } = render(
			<Accordion>
				<AccordionItem value='1'>
          <AccordionTrigger>Accordion trigger</AccordionTrigger>
        </AccordionItem>
			</Accordion>
		)

    expect(getByText('Accordion trigger')).toBeVisible()
	})
})
