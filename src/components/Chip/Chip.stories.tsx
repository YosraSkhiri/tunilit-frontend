import { Meta,StoryObj } from '@storybook/react'

import Chip from './Chip.tsx'

const meta: Meta<typeof Chip> = {
  component: Chip
}

export default meta

type Story = StoryObj<typeof Chip>

export const MediumChip: Story = {
  args: {
    children: 'Chip',
    href: '#'
  }
}

export const SmallChip: Story = {
  args: {
    children: 'Chip',
    href: '#',
    size: 'sm'
  }
}
