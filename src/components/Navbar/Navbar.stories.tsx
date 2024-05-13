import { Meta,StoryObj } from '@storybook/react'

import Navbar from './Navbar.tsx'

const meta: Meta<typeof Navbar> = {
  component: Navbar
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Overview: Story = {
  args: {
    schoolCategories: [
      {
        label: 'category 1',
        name: 'category 1',
      },
      {
        label: 'category 2',
        name: 'category 2',
      },
      {
        label: 'category 3',
        name: 'category 3',
      },
      {
        label: 'category 4',
        name: 'category 4',
      },
      {
        label: 'category 5',
        name: 'category 5',
      },
      {
        label: 'category 6',
        name: 'category 6',
      },
    ]
  }
}
