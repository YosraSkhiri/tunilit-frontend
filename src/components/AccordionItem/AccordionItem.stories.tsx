import { Meta,StoryObj } from '@storybook/react'

import AccordionItem from './AccordionItem.tsx'

const meta: Meta<typeof AccordionItem> = {
  component: AccordionItem
}

export default meta

type Story = StoryObj<typeof AccordionItem>

export const Overview: Story = {}
