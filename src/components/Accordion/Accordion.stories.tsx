import { Meta, StoryObj } from '@storybook/react'
import Accordion from './Accordion'
import AccordionDetails from '../AccordionDetails'
import AccordionSummary from '../AccordionSummary'
import Typography from '../Typography'

const meta: Meta<typeof Accordion> = {
	component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Overview: Story = {
	render: () => (
		<>
			<Accordion expanded>
				<AccordionSummary>Accordion 1</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary>Accordion 2</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary>Accordion 3</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	),
}
