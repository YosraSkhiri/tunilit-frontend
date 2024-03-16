import { Meta, StoryObj } from '@storybook/react'

import AccordionContent from '../AccordionContent'
import AccordionItem from '../AccordionItem'
import AccordionTrigger from '../AccordionTrigger'
import Typography from '../Typography'
import Accordion from './Accordion'

const meta: Meta<typeof Accordion> = {
	component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Overview: Story = {
  render: () => (
    <Accordion defaultValue={['accordion-1', 'accordion-2']} type='multiple'>
      <AccordionItem value='accordion-1'>
        <AccordionTrigger>Accordion 1</AccordionTrigger>
        <AccordionContent>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos eos perferendis magni perspiciatis fugiat, 
            impedit laborum debitis, excepturi eligendi numquam 
            corrupti quia sint aliquam iste, eveniet necessitatibus 
            reprehenderit voluptatem soluta!
          </Typography>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='accordion-2'>
        <AccordionTrigger>Accordion 2</AccordionTrigger>
        <AccordionContent>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos eos perferendis magni perspiciatis fugiat, 
            impedit laborum debitis, excepturi eligendi numquam 
            corrupti quia sint aliquam iste, eveniet necessitatibus 
            reprehenderit voluptatem soluta!
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos eos perferendis magni perspiciatis fugiat, 
            impedit laborum debitis, excepturi eligendi numquam 
            corrupti quia sint aliquam iste, eveniet necessitatibus 
            reprehenderit voluptatem soluta!
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos eos perferendis magni perspiciatis fugiat, 
            impedit laborum debitis, excepturi eligendi numquam 
            corrupti quia sint aliquam iste, eveniet necessitatibus 
            reprehenderit voluptatem soluta!
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos eos perferendis magni perspiciatis fugiat, 
            impedit laborum debitis, excepturi eligendi numquam 
            corrupti quia sint aliquam iste, eveniet necessitatibus 
            reprehenderit voluptatem soluta!
          </Typography>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='accordion-3'>
        <AccordionTrigger>Accordion 3</AccordionTrigger>
        <AccordionContent>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos eos perferendis magni perspiciatis fugiat, 
            impedit laborum debitis, excepturi eligendi numquam 
            corrupti quia sint aliquam iste, eveniet necessitatibus 
            reprehenderit voluptatem soluta!
          </Typography>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
